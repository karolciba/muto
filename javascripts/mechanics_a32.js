function Mechanics() {
  if (this.singleton) {
    return this.singleton;
  }

  this.singleton = this;
}

Mechanics.enums = {
  CRITICAL_SUCCESS: 1,
  SUCCESS: 2,
  LUCK: 3,
  FAILURE: 4,
  CRITICAL_FAILURE: 5,

  WEAPON_NOT_READY: 11,
  NOT_IN_RANGE: 12,
  NOT_IN_VIEW: 13,
};

Mechanics.attack_successful = function(ret) {
  return (ret <= Mechanics.enums.LUCK);
};

Mechanics.attack_possible = function(ret) {
  return (ret <= Mechanics.enums.CRITICAL_FAILURE);
};

Mechanics.prototype.speed = function(vigour) {
  return this.config.base_speed[vigour - 1] * this.config.base_speed_multiplier;
};

Mechanics.prototype.run = function(vigour) {
  return this.config.base_run[vigour - 1] * this.config.base_run_multiplier;
};

Mechanics.prototype.life = function(vigour) {
  return this.config.base_life_multiplier * vigour;
};

Mechanics.prototype.attack_speed = function(attacker) {
  var agility = attacker.get_agility();
  var attacker_weapon = this.get_active_weapon(attacker);
  var modifier = attacker.abilities[attacker_weapon.type] || 0;
  return this.config.base_attack_speed[ Math.floor(agility + modifier) - 1];
};

Mechanics.prototype.throw_dice = function() {
  return Math.random_range(1,32);
};

Mechanics.prototype.test_attack = function(level) {
  var rand = this.throw_dice();
  if (rand === 1) { return Mechanics.enums.CRITICAL_SUCCESS; }
  else if (rand <= level - 1) { return Mechanics.enums.SUCCESS; }
  else if (rand === level) { return Mechanics.enums.LUCK; }
  else if (rand <= 31) { return Mechanics.enums.FAILURE; }
  else if (rand === 32) { return Mechanics.enums.CRITICAL_FAILURE; }

  return Mechanics.enums.SUCCESS;
};

Mechanics.prototype.test_level = function(victim, attacker) {
  var attacker_weapon = this.get_active_weapon(attacker);
  var victim_weapon = this.get_active_weapon(victim);

  var level = attacker_weapon.ranged ? attacker.get_perception() : attacker.get_agility();
  level = Math.floor(level);
  // TODO: dalsze modyfikatory ataku
  level += attacker_weapon.hit_modifier;

  level += victim.hit_modifier;

  if (victim_weapon.ranged && !attacker_weapon.ranged) level += 2;

  if (victim.state == 'stand') {
    if (attacker_weapon.ranged) level += 2;
    else level += 1;
  }

  var ability = attacker.abilities.get(attacker_weapon.type);

  level += Math.floor(ability);

  if (!attacker_weapon.white) {
    var test_vigour = Math.floor(attacker.get_vigour() - attacker_weapon.min_vigour);
    level += attacker_weapon.vigour_modifier[test_vigour + 31];
  }

  return level;
};

Mechanics.prototype.play_success_weapon_sound = function(weapon) {
  if (weapon.success_sound_src) {
    var audio = window.audio.play(weapon.success_sound_src, weapon.success_sound_volume );
  }
};

Mechanics.prototype.play_failure_weapon_sound = function(weapon) {
  if (weapon.failure_sound_src) {
    window.audio.play(weapon.failure_sound_src, weapon.failure_sound_volume );
  }
};

Mechanics.prototype.attack = function(victim, attacker) {
  // check weapon readiness
  var attack_speed = this.attack_speed(attacker);

  var attacker_weapon = this.get_active_weapon(attacker);

  if (!attacker_weapon.is_ready(attack_speed, this.config.base_attack_speed_multiplier)) {
    debug.trace("Atak "+victim.name+" przez "+attacker.name+" bron nie gotowa");
    return Mechanics.enums.WEAPON_NOT_READY;
  }

  // check range
  var distance = Math.distance(victim.x, victim.y, attacker.x, attacker.y);
  // pomniejszamy distance o radius przeciwnika - nie liczymy do srodka tylko do obrysu
  distance -= victim.radius;
  var range;
  if (attacker_weapon.ranged) {
    range = attacker_weapon.range;
  } else {
    range = attacker[ attacker_weapon.animation + "_range" ];
  }
  if (distance - range > 0.1) {
    debug.trace("Atak "+victim.name+" przez "+attacker.name+" poza zasiegiem "+distance+" > "+range);
    return Mechanics.enums.NOT_IN_RANGE;
  }

  attacker_weapon.use();

  // test attack
  var test_level = this.test_level(victim, attacker);
  var test_attack = this.test_attack(test_level);

  debug.trace("Atak "+victim.name+" przez "+attacker.name+" test_level: "+test_level+" test_attack: "+test_attack);

  if (attacker_weapon.ammo) {
    this.decrement_ammo(attacker, attacker_weapon.ammo);
  }

  victim.commander.on_attacked(attacker);

  if (test_attack == Mechanics.enums.FAILURE) {
    // failure do nothing
    victim.level.map.add_flash( Flash("fail", victim.x + global_config.flash.offset_x, victim.y + global_config.flash.offset_y));
    this.play_failure_weapon_sound(attacker_weapon);
    return Mechanics.enums.FAILURE;
  } else if (test_attack == Mechanics.enums.CRITICAL_FAILURE) {
    victim.level.map.add_flash( Flash("fail", victim.x + global_config.flash.offset_x, victim.y + global_config.flash.offset_y));
    victim.level.map.add_flash( Flash("crit", attacker.x + global_config.flash.offset_x, attacker.y + global_config.flash.offset_y));
    // critical failure - extra penalty
    this.play_failure_weapon_sound(attacker_weapon);
    return Mechanics.enums.CRITICAL_FAILURE;
  } else if (test_attack == Mechanics.enums.LUCK) {
    victim.level.map.add_flash( Flash("luck", attacker.x + global_config.flash.offset_x, attacker.y + global_config.flash.offset_y));
    // add bonus
  } else if (test_attack == Mechanics.enums.CRITICAL_SUCCESS) {
    victim.level.map.add_flash( Flash("succ", attacker.x + global_config.flash.offset_x, attacker.y + global_config.flash.offset_y));
    // add bonus
  }
  this.play_success_weapon_sound(attacker_weapon);

  // add modificators
  // calculate power
  var power = this.defence(victim, attacker);

  if (power > 0) {
    this.influence_test(attacker, victim);
  }
  
  victim.level.map.add_flash( Flash(power, victim.x + global_config.flash.offset_x, victim.y + global_config.flash.offset_y));

  attacker.attack_type = attacker_weapon.animation;

  // modify life
  debug.trace("Atak "+victim.name+" przez "+attacker.name+" ma "+victim.life+"  zabieram zycia " + power);
  victim.set_life(victim.life - power);
  // victim.life -= power;

  // rozwijamy wspolczynniki
  this.increment_ability(attacker, attacker_weapon.type);
  if (attacker_weapon.ranged) {
    this.increment_perception(attacker);
  } else {
    this.increment_agility(attacker);
  }

  this.increment_vigour(victim,power);

  return test_attack;
};

Mechanics.prototype.defence = function(victim, attacker, bonus ) {
  var weapon = this.get_active_weapon(attacker);
  var armour = victim.armour || victim.natural_armour;
  debug.trace("Obliczam obrone");
  
  var defence_class = armour.defence_class;
  // debug.debug("weapon", weapon);
  // debug.debug("armour", armour);
  defence_class += armour.trauma_sensitivity[weapon.trauma_type];
  defence_class -= weapon.piercing_modifier;
  if (defence_class < 0) { defence_class = 0; }
  else if (defence_class > 6) { defence_class = 6; }

  // var weapon_power = weapon.power;
  var weapon_power = weapon.power; 
  if (weapon.white) {
    var test_vigour = Math.floor(attacker.get_vigour() - weapon.min_vigour);
    weapon_power += weapon.vigour_modifier[test_vigour + 31];
  }

  this.weapon_noise(attacker);

  // obliczamy zuzycie broni i jesli sie zuzyla to ja zdejmujemy
  if (weapon.condition) {
    weapon.condition -= weapon_power;
    if (weapon.condition <= 0) {
      debug.debug("Bron sie zuzyla, zdejmuje");
      attacker.set_weapon(null);
    }
  }

  var defence = this.config.base_defence_modifier[defence_class][weapon_power];

  if (defence !== 0 && !defence) {
    console.log("Atakaujacy", attacker);
    console.log("Ofiara", victim);
    console.log("Bron", weapon);
    console.log("Armour", armour);
    console.log("Bonus", bonus);
    console.log("defence_class", defence_class);
    console.log("weapon_power", weapon_power);
    console.log("Wynik ataku", defence);
    engine.stop();
    alert('Blad! Sila ataku nieokreslona');
  }

  // obliczamy zuzycie armoura i jesli sie zuzyl to zdejmujemy
  if (armour.condition) {
    armour.condition -= ( weapon_power - defence );
    if (armour.condition <= 0) {
      debug.debug("Armour sie zuzyl, zdejmuje");
      victim.set_armour(null);
    }
  }

  return defence;
};

Mechanics.prototype.weapon_noise = function(attacker) {
  attacker.level.creatures_notify_noise(
      attacker.x, 
      attacker.y, 
      this.get_active_weapon(attacker).noise,
      { 
        skip: attacker,
      }
  );
};

Mechanics.prototype.influence_test = function(attacker, victim) {
  var weapon = this.get_active_weapon(attacker);
  var armour = victim.armour || victim.natural_armour;

  if (weapon.influence) {
    var protection = armour.influences_protection && armour.influences_protection[weapon.influence.type];
    if (!protection || Math.random() > protection) {
      victim.influences.set_timed(weapon.influence.type, weapon.influence.duration, weapon.influence.interval);
    }
  }
  
};

Mechanics.prototype.increment_ability = function(creature, ability) {
  debug.trace("Rozwijam ability "+ability, creature);
  var level = creature.abilities.get(ability);

  if (level >= 8) return;

  var level_points = this.config.base_abilities_levels[ Math.floor(level) ];

  var add = 1.0 / level_points * this.development_coefficient(creature);

  add = add || 0;

  creature.abilities.set(ability, level + add);
};

Mechanics.prototype.increment_perception = function(creature) {
  debug.trace("Rozwijam perception", creature);
  var level = creature.perception;

  var level_points = this.config.base_factors_levels[ Math.floor(level) ];

  var add = 1.0 / level_points * this.development_coefficient(creature);

  add = add || 0;

  creature.set_perception(level + add);
};

Mechanics.prototype.increment_vigour = function(creature, points) {
  debug.trace("Rozwijam vigour", creature);
  var level = creature.vigour;

  var level_points = this.config.base_vigour_levels[ Math.floor(level) ];

  var add = 1.0 / level_points * this.development_coefficient(creature);

  add = add || 0;

  creature.set_vigour(level + add);
};

Mechanics.prototype.increment_agility = function(creature) {
  debug.trace("Rozwijam agility", creature);
  var level = creature.agility;

  var level_points = this.config.base_factors_levels[ Math.floor(level) ];

  var add = 1.0 / level_points * this.development_coefficient(creature);

  add = add || 0;

  creature.set_agility(level + add);
};

Mechanics.prototype.development_coefficient = function(creature) {
  return (creature.intelligence) ? this.config.base_development[ Math.floor(creature.intelligence) - 1] * this.config.base_development_multiplier : 0;
};

Mechanics.prototype.get_active_weapon = function(creature) {
  var creature_weapon = creature.weapon || creature.natural_weapon;

  // look for ammo if weapon uses it
  if (creature_weapon.ammo) {
    var ammo = this.get_ammo(creature, creature_weapon.ammo);
    // nie ma amunicji - kreatura walczy naturalna bronia
    if (!ammo) {
      return creature.natural_weapon;
    }
  }

  return creature_weapon;
};

Mechanics.prototype.decrement_ammo = function(creature, key) {
  var item_0 = creature.get_item_0();
  if (item_0 && item_0.key === key) {
    if (!item_0.decrement()) {
      creature.set_item_0(null);
    }
    return item_0;
  }
  var item_1 = creature.get_item_1();
  if (item_1 && item_1.key === key) {
    if (!item_1.decrement()) {
      creature.set_item_1(null);
    }
    return item_1;
  }
  var item_2 = creature.get_item_2();
  if (item_2 && item_2.key === key) {
    if (!item_2.decrement()) {
      creature.set_item_2(null);
    }
    return item_2;
  }
  var item_3 = creature.get_item_3();
  if (item_3 && item_3.key === key) {
    if (!item_3.decrement()) {
      creature.set_item_3(null);
    }
    return item_3;
  }
};

Mechanics.prototype.get_ammo = function(creature, key) {
  var item_0 = creature.get_item_0();
  if (item_0 && item_0.key === key) {
    return item_0;
  }
  var item_1 = creature.get_item_1();
  if (item_1 && item_1.key === key) {
    return item_1;
  }
  var item_2 = creature.get_item_2();
  if (item_2 && item_2.key === key) {
    return item_2;
  }
  var item_3 = creature.get_item_3();
  if (item_3 && item_3.key === key) {
    return item_3;
  }
};
