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

Mechanics.prototype.play_success_weapon_sound = function(weapon) {
  if (weapon.success_sound_src) {
    var i = Math.random_range(0, weapon.success_sound_src.length - 1);
    var src = weapon.success_sound_src[i];
    var audio = window.audio.play(src, weapon.success_sound_volume );
  }
};

Mechanics.prototype.play_failure_weapon_sound = function(weapon) {
  if (weapon.failure_sound_src) {
    var i = Math.random_range(0, weapon.failure_sound_src.length - 1);
    var src = weapon.failure_sound_src[i];
    window.audio.play(src, weapon.failure_sound_volume );
  }
};

Mechanics.prototype.play_dead_sound = function(creature) {
  if (creature.dead_sound_src) {
    var i = Math.random_range(0, creature.dead_sound_src.length - 1);
    var src = creature.dead_sound_src[i];
    window.audio.play(src, creature.dead_sound_volume);
  }
};

Mechanics.prototype.attack = function(victim, attacker) {
  if (victim.life <= 0) {
    return;
  }

  var attacker_weapon = this.get_active_weapon(attacker);

  if (!attacker_weapon.is_ready()) {
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
  attacker.attack_type = attacker_weapon.animation;

  if (attacker_weapon.max_ammo && attacker_weapon.ammo >= 1) {
    attacker_weapon.ammo -= 1;
  }

  if (attacker_weapon.suicidal) {
    attacker.set_life(0);
    this.play_dead_sound(attacker);
  }

  if (attacker_weapon.splash_circular) {
    return this.attack_splash_circular(attacker);
  } else {
    return this.attack_normal(victim, attacker);
  }
};

Mechanics.prototype.attack_normal = function(victim, attacker) {
  if (victim.life <= 0) {
    return;
  }

  var attacker_weapon = this.get_active_weapon(attacker);

  victim.commander.on_attacked(attacker);
  this.weapon_noise(attacker);

  var victim_armour = victim.armour || victim.natural_armour;
  this.play_success_weapon_sound(attacker_weapon);

  // obrona to suma obrony postaci i zbroi
  var defence = (victim.defence + victim_armour.defence);
  // ale nie wiecej niz 100%
  if (defence > 100) {
    defence = 100;
  }
  // zamieniamy procenty na liczbe
  defence = defence * 0.01;
  // atak oslabiamy procentowo o obrone pancerz
  var power = (attacker.attack + attacker_weapon.attack) * ( 1 - defence);
  // ale nie mniej niz minimalny atak postaci
  var min_attack = attacker_weapon.min_attack + attacker.min_attack;
  if (power < min_attack) {
    power = min_attack;
  }
  // zaokragalmy do gory
  power = Math.ceil(power);

  // modify life
  debug.trace("Atak "+victim.name+" przez "+attacker.name+" ma "+victim.life+"  zabieram zycia " + power);
  victim.set_life(victim.life - power);

  if (victim.life <= 0) {
    this.play_dead_sound(victim);
    var victim_weapon = this.get_active_weapon(victim);
    if (victim_weapon.suicidal && victim_weapon.splash_circular) {
      this.attack_splash_circular(victim);
    }
  }

  if (global_config.flash.display) {
    victim.level.map.add_flash( Flash(power, victim.x + global_config.flash.offset_x, victim.y + global_config.flash.offset_y));
  }

  return Mechanics.enums.SUCCESS;
};

Mechanics.prototype.attack_splash_circular = function(attacker) {
  var attacker_weapon = this.get_active_weapon(attacker);

  for (var i = 0; i < attacker.level.creatures.length; i++) {
    var creature = attacker.level.creatures[i];

    if (creature == attacker) {
      continue;
    }

    if (Math.in_distance(attacker.x, attacker.y, creature.x, creature.y, attacker_weapon.splash_radius)) {
      this.attack_normal(creature, attacker);
    }
  }

  for (var i = 0; i < attacker.level.soldiers.length; i++) {
    var creature = attacker.level.soldiers[i];

    if (creature == attacker) {
      continue;
    }

    if (Math.in_distance(attacker.x, attacker.y, creature.x, creature.y, attacker_weapon.splash_radius)) {
      this.attack_normal(creature, attacker);
    }
  }
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

Mechanics.prototype.get_active_weapon = function(creature) {
  var creature_weapon = creature.weapon || creature.natural_weapon;

  // look for ammo if weapon uses it
  if (creature_weapon.max_ammo && creature_weapon.ammo <= 0) {
    // nie ma amunicji - kreatura walczy naturalna bronia
    return creature.natural_weapon;
  }

  return creature_weapon;
};
