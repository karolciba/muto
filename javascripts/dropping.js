Dropping = function(type, x, y, def) {
  
  var config = global_config.droppings;

  var ttl = def.ttl || config.ttl;
  var health_add = def.health_add || config.health_add;
  var ammo_add = def.ammo_add || config.ammo_add;
  var viols_add = def.viols_add || config.viols_add;
  
  var attack_boost = def.attack_boost || config.attack_boost;
  var defence_boost = def.defence_boost || config.defence_boost;
  var speed_boost = def.speed_boost || config.speed_boost;
  var slow_boost = def.slow_boost || config.slow_boost;
  var injure_boost = def.injure_boost || config.injure_boost;

  var icon = Image.from_src( config[type + "_src"] );

  var ofsetted_x = x - config.radius;
  var ofsetted_y = y - config.radius;

  var that = {
    x: x,
    y: y,
    radius: config.radius,
    ttl: ttl,
    draw: draw,
    use: use,
  };

  return that;

  function draw(context) {
    if (ttl > config.blink_start) { 
      context.drawImage(icon, ofsetted_x, ofsetted_y);
    } else {
      if (ttl % (config.blink_time_on + config.blink_time_off) < config.blink_time_on) {
      context.drawImage(icon, ofsetted_x, ofsetted_y);
      }
    }
    return ttl--;
  }

  // dispatczuje do wlasciwej funkcji
  function use(soldier, level) {
    switch (type) {
      case 'ammo': 
        return use_ammo(soldier, level);
      case 'health':
        return use_health(soldier, level);
      case 'viols':
        return use_viols(soldier, level);
      case 'attack':
        return use_attack(soldier, level);
      case 'defence':
        return use_defence(soldier, level);
      case 'speed':
        return use_speed(soldier, level);
      case 'slow':
        return use_slow(soldier, level);
      case 'injure':
        return use_injure(soldier, level);
    }
  }

  function use_ammo(soldier, level) {
    var weapon = soldier.weapon || soldier.natural_weapon;

    // look for ammo if weapon uses it
    if (weapon.ammo && weapon.ammo <= 0) {
      // nie ma amunicji - kreatura walczy naturalna bronia
      weapon = soldier.natural_weapon;
    }

    if (weapon && weapon.max_ammo && weapon.ammo < weapon.max_ammo) {
      if (config.ammo_sound_src) {
        var i = Math.random_range(0, config.ammo_sound_src.length - 1);
        var src = config.ammo_sound_src[i];
        window.audio.play(src, config.ammo_sound_volume);
      }
      var percentage = Math.random_range(ammo_add[0] * 100, ammo_add[1] * 100);

      var add = Math.round(weapon.max_ammo * percentage / 100);

      weapon.ammo += add;

      if (weapon.ammo > weapon.max_ammo) {
        weapon.ammo = weapon.max_ammo;
      }

      return true;
    }
  }

  function use_health(soldier, level) {
    if (soldier.life < soldier.max_life) {
      if (config.health_sound_src) {
        var i = Math.random_range(0, config.health_sound_src.length - 1);
        var src = config.health_sound_src[i];
        window.audio.play(src, config.health_sound_volume);
      }
      var add = Math.random_range(health_add[0], health_add[1]);
      soldier.set_life ( soldier.life + add);
      return true;
    }
  }

  function use_viols(soldier, level) {
    if (config.viols_sound_src) {
      var i = Math.random_range(0, config.viols_sound_src.length - 1);
      var src = config.viols_sound_src[i];
      window.audio.play(src, config.viols_sound_volume);
    }
    var add = Math.random_range(viols_add[0], viols_add[1]);
    level.violki_bonus_prize += add;
    return true;
  }

  function use_attack(soldier, level) {
    if (config.attack_sound_src) {
      var i = Math.random_range(0, config.attack_sound_src.length - 1);
      var src = config.attack_sound_src[i];
      window.audio.play(src, config.attack_sound_volume);
    }
    var attack_percentage = Math.random_range(attack_boost.attack[0] * 100, attack_boost.attack[1] * 100) / 100;
    var min_attack_percentage = Math.random_range(attack_boost.min_attack[0] * 100, attack_boost.min_attack[1] * 100) / 100;
    var speed_percentage = Math.random_range(attack_boost.speed[0] * 100, attack_boost.speed[1] * 100) / 100;

    var weapon = soldier.weapon || soldier.natural_weapon;

    // look for ammo if weapon uses it
    if (weapon.ammo && weapon.ammo <= 0) {
      // nie ma amunicji - kreatura walczy naturalna bronia
      weapon = soldier.natural_weapon;
    }

    var attack_add = Math.floor((soldier.attack + weapon.attack) * attack_percentage);
    var min_attack_add = Math.floor((soldier.min_attack + weapon.min_attack) * min_attack_percentage);
    var speed_sub = weapon.speed * speed_percentage;

    soldier.attack += attack_add;
    soldier.min_attack += min_attack_add;
    weapon.speed -= speed_sub;

    soldier.influences.set('attack_boost');

    level.add_on_wave_end_callback( function() {
      soldier.attack -= attack_add;
      // if (soldier.attack < 35) debugger;
      soldier.min_attack -= min_attack_add;
      weapon.speed += speed_sub;
      soldier.influences.clear('attack_boost');
    });

    return true;
  }

  function use_defence(soldier, level) {
    if (config.defence_sound_src) {
      var i = Math.random_range(0, config.defence_sound_src.length - 1);
      var src = config.defence_sound_src[i];
      window.audio.play(src, config.defence_sound_volume);
    }

    var defence_percentage = Math.random_range(defence_boost[0] * 100, defence_boost[1] * 100);

    var defence_add = Math.floor(soldier.defence * defence_percentage / 100);
    
    soldier.defence += defence_add;
    
    soldier.influences.set('defence_boost');

    level.add_on_wave_end_callback( function() {
      soldier.defence -= defence_add;
      soldier.influences.clear('defence_boost');
    });

    return true;
  }

  function use_speed(soldier, level) {
    if (config.speed_sound_src) {
      var i = Math.random_range(0, config.speed_sound_src.length - 1);
      var src = config.speed_sound_src[i];
      window.audio.play(src, config.speed_sound_volume);
    }

    var speed_percentage = Math.random_range(speed_boost[0] * 100, speed_boost[1] * 100);

    var speed_add = Math.floor(soldier.speed * speed_percentage / 100);
    
    soldier.run_speed += speed_add;

    soldier.influences.set('speed_boost');

    level.add_on_wave_end_callback( function() {
      soldier.run_speed -= speed_add;
      soldier.influences.clear('speed_boost');
    });

    return true;
  }

  function use_slow(soldier, level) {
    if (config.slow_sound_src) {
      var i = Math.random_range(0, config.slow_sound_src.length - 1);
      var src = config.slow_sound_src[i];
      window.audio.play(src, config.slow_sound_volume);
    }

    var slow_percentage = Math.random_range(slow_boost[0] * 100, slow_boost[1] * 100) / 100;

    for (var i = 0; i < level.creatures.length; i++) {
      var creature = level.creatures[i];
      creature.walk_speed = Math.floor( ( 1 - slow_percentage) * creature.walk_speed); 
      creature.run_speed = Math.floor( ( 1 - slow_percentage) * creature.run_speed); 

    }

    return true;
  }

  function use_injure(soldier, level) {
    if (config.injure_sound_src) {
      var i = Math.random_range(0, config.injure_sound_src.length - 1);
      var src = config.injure_sound_src[i];
      window.audio.play(src, config.injure_sound_volume);
    }

    var injure_percentage = Math.random_range(injure_boost[0] * 100, injure_boost[1] * 100) / 100;

    for (var i = 0; i < level.creatures.length; i++) {
      var creature = level.creatures[i];
      if (!creature.friendly) {
        creature.set_life( creature.life - Math.floor( creature.max_life * injure_percentage));
      }
    }

    return true;
  }

};
