Skill_pogromca_first = function() {
  var config = global_config.skills;

  var soldier = null;

  var use_time = Number.min_value;
  var callback;

  that = {
    use: use,
    cooldown_coef: cooldown_coef,
    active_coef: active_coef,
    set_soldier: set_soldier,
    icon_src: config.pogromca_first_src,
    clear: clear,
  };

  return that;

  function set_soldier(setted) {
    soldier = setted;
  }

  function clear() {
    use_time = Number.min_value;
    if (callback) {
      callback();
      callback = null;
    }
  }
  
  function use(level) {
    if ( use_time + config.pogromca_first_cooldown > engine.frame) {
      return;
    }

    if (soldier.life <= 0) {
      return;
    }

    use_time = engine.frame;

    for (var i = 0; i < level.creatures.length; i++) {
      var creature = level.creatures[i];
      var dx = creature.x - soldier.x;
      var dy = creature.y - soldier.y;
      var r_square = config.pogromca_first_radius * config.pogromca_first_radius;
      if (dx * dx + dy * dy < r_square && !creature.friendly) {
        creature.switch_amok();
        creature.commander.target = soldier;

        creature.natural_weapon.attack -= Math.floor(creature.natural_weapon.attack * config.pogromca_first_attack_penalty);
        creature.natural_weapon.min_attack -= Math.floor(creature.natural_weapon.min_attack * config.pogromca_first_min_attack_penalty);
        creature.natural_armour.defence -= Math.floor(creature.natural_armour.defence * config.pogromca_first_defence_penalty);

        creature.attack -= Math.floor(creature.attack * config.pogromca_first_attack_penalty);
        creature.min_attack -= Math.floor(creature.min_attack * config.pogromca_first_min_attack_penalty);
        creature.defence -= Math.floor(creature.defence * config.pogromca_first_defence_penalty);
      }
    }

  }

  function cooldown_coef() {
    var cooldown = config.pogromca_first_cooldown;
    var timeout = config.pogromca_first_timeout;

    var time = engine.frame - use_time;

    if (time > cooldown || time < timeout) {
      return 1;
    }
    var coef = (time - timeout)/(cooldown - timeout);
    return coef;
  }

  function active_coef() {
    return 1;
  }
};

Skill_pogromca_second = function() {
  var config = global_config.skills;

  var soldier = null;

  var use_time = Number.min_value;

  var attack_add = 0;
  var min_attack_add = 0;

  var callback;

  that = {
    use: use,
    cooldown_coef: cooldown_coef,
    active_coef: active_coef,
    set_soldier: set_soldier,
    icon_src: config.pogromca_second_src,
    clear: clear,
  };

  return that;

  function set_soldier(setted) {
    soldier = setted;
  }

  function clear() {
    use_time = Number.min_value;
    if (callback) {
      callback();
      callback = null;
    }
  }
  
  function use(level) {
    if ( use_time + config.pogromca_second_cooldown > engine.frame) {
      return;
    }
    if (soldier.life <= 0) {
      return;
    }

    use_time = engine.frame;

    var weapon = soldier.weapon || soldier.natural_weapon;

    // look for ammo if weapon uses it
    if (weapon.ammo && weapon.ammo <= 0) {
      // nie ma amunicji - kreatura walczy naturalna bronia
      weapon = soldier.natural_weapon;
    }

    attack_add = Math.floor((soldier.attack + weapon.attack) * config.pogromca_second_attack_bonus);
    min_attack_add = Math.floor((soldier.min_attack + weapon.min_attack) * config.pogromca_second_min_attack_bonus);

    soldier.attack += attack_add;
    soldier.min_attack += min_attack_add;

    callback = function() {
      soldier.attack -= attack_add;
      soldier.min_attack -= min_attack_add;
	  callback = null;
    };
    engine.timeout_callback(
      config.pogromca_second_timeout,
      callback
    );
  }

  function cooldown_coef() {
    var cooldown = config.pogromca_second_cooldown;
    var timeout = config.pogromca_second_timeout;

    var time = engine.frame - use_time;

    if (time > cooldown || time < timeout) {
      return 1;
    }
    var coef = (time - timeout)/(cooldown - timeout);
    return coef;
  }

  function active_coef() {
    var timeout = config.pogromca_second_timeout;

    var time = engine.frame - use_time;
    if (time > timeout) {
      return 1;
    }
    var coef = time/timeout;
    return coef;
  }
};

Skill_wojownik_first = function() {
  var config = global_config.skills;

  var soldier = null;

  var use_time = Number.min_value;

  var callback;

  that = {
    use: use,
    cooldown_coef: cooldown_coef,
    active_coef: active_coef,
    set_soldier: set_soldier,
    icon_src: config.wojownik_first_src,
    clear: clear,
  };

  return that;

  function set_soldier(setted) {
    soldier = setted;
  }

  function clear() {
    use_time = Number.min_value;
    if (callback) {
      callback();
      callback = null;
    }
  }
  
  function use(level) {
    if ( use_time + config.wojownik_first_cooldown > engine.frame) {
      return;
    }
    if (soldier.life <= 0) {
      return;
    }

    use_time = engine.frame;

    soldier.defence += config.wojownik_first_defence_bonus;

    callback = function() {
      soldier.defence -= config.wojownik_first_defence_bonus;
      callback = null;
    };
    engine.timeout_callback(
      config.wojownik_first_timeout,
      callback
    );
  }

  function cooldown_coef() {
    var cooldown = config.wojownik_first_cooldown;
    var timeout = config.wojownik_first_timeout;

    var time = engine.frame - use_time;

    if (time > cooldown || time < timeout) {
      return 1;
    }
    var coef = (time - timeout)/(cooldown - timeout);
    return coef;
  }

  function active_coef() {
    var timeout = config.wojownik_first_timeout;

    var time = engine.frame - use_time;
    if (time > timeout) {
      return 1;
    }
    var coef = time/timeout;
    return coef;
  }
};

Skill_wojownik_second = function() {
  var config = global_config.skills;

  var soldier = null;

  var use_time = Number.min_value;

  var callback;

  that = {
    use: use,
    cooldown_coef: cooldown_coef,
    active_coef: active_coef,
    set_soldier: set_soldier,
    icon_src: config.wojownik_second_src,
    clear: clear,
  };

  return that;

  function set_soldier(setted) {
    soldier = setted;
  }

  function clear() {
    use_time = Number.min_value;
    if (callback) {
      callback();
      callback = null;
    }
  }
  
  function use(level) {
    if ( use_time + config.wojownik_second_cooldown > engine.frame) {
      return;
    }
    if (soldier.life <= 0) {
      return;
    }

    use_time = engine.frame;

    var weapon = soldier.weapon || soldier.natural_weapon;

    // look for ammo if weapon uses it
    if (weapon.ammo && weapon.ammo <= 0) {
      // nie ma amunicji - kreatura walczy naturalna bronia
      weapon = soldier.natural_weapon;
    }

    for (var i = 0; i < level.creatures.length; i++) {
      var creature = level.creatures[i];
      var dx = creature.x - soldier.x;
      var dy = creature.y - soldier.y;
      var r_square = config.wojownik_second_radius * config.wojownik_second_radius;
      if (dx * dx + dy * dy < r_square && !creature.friendly) {
        creature.set_life( creature.life - Math.floor( config.wojownik_second_attack_damage * (soldier.attack + weapon.attack)) );
        if (creature.life > 0) {
          creature.driver.freeze();
        }
      }
    }

    callback = function() {
      for (var i = 0; i < level.creatures.length; i++) {
        var creature = level.creatures[i];
        creature.driver.unfreeze();
      }
    };
    engine.timeout_callback(
      config.wojownik_second_timeout,
      callback
    );
  }

  function cooldown_coef() {
    var cooldown = config.wojownik_second_cooldown;
    var timeout = config.wojownik_second_timeout;

    var time = engine.frame - use_time;

    if (time > cooldown || time < timeout) {
      return 1;
    }
    var coef = (time - timeout)/(cooldown - timeout);
    return coef;
  }

  function active_coef() {
    var timeout = config.wojownik_second_timeout;

    var time = engine.frame - use_time;
    if (time > timeout) {
      return 1;
    }
    var coef = time/timeout;
    return coef;
  }
};

Skill_komandoska_first = function() {
  var config = global_config.skills;

  var soldier = null;

  var use_time = Number.min_value;

  var callback;

  that = {
    use: use,
    cooldown_coef: cooldown_coef,
    active_coef: active_coef,
    set_soldier: set_soldier,
    icon_src: config.komandoska_first_src,
    clear: clear,
  };

  return that;

  function set_soldier(setted) {
    soldier = setted;
  }

  function clear() {
    use_time = Number.min_value;
    if (callback) {
      callback();
      callback = null;
    }
  }
  
  function use(level) {
    if ( use_time + config.komandoska_first_cooldown > engine.frame) {
      return;
    }
    if (soldier.life <= 0) {
      return;
    }

    use_time = engine.frame;

    var weapon = soldier.weapon || soldier.natural_weapon;

    // look for ammo if weapon uses it
    if (weapon.ammo && weapon.ammo <= 0) {
      // nie ma amunicji - kreatura walczy naturalna bronia
      weapon = soldier.natural_weapon;
    }

    var speed_sub = weapon.speed * config.komandoska_first_speed_bonus;
    weapon.speed -= speed_sub;

    callback = function() {
      weapon.speed += speed_sub;
	  callback = null;
    };
    engine.timeout_callback(
      config.komandoska_first_timeout,
      callback
    );
  }

  function cooldown_coef() {
    var cooldown = config.komandoska_first_cooldown;
    var timeout = config.komandoska_first_timeout;

    var time = engine.frame - use_time;

    if (time > cooldown || time < timeout) {
      return 1;
    }
    var coef = (time - timeout)/(cooldown - timeout);
    return coef;
  }

  function active_coef() {
    var timeout = config.komandoska_first_timeout;

    var time = engine.frame - use_time;
    if (time > timeout) {
      return 1;
    }
    var coef = time/timeout;
    return coef;
  }
};

Skill_komandoska_second = function() {
  var config = global_config.skills;

  var soldier = null;

  var use_time = Number.min_value;

  var callback;

  that = {
    use: use,
    cooldown_coef: cooldown_coef,
    active_coef: active_coef,
    set_soldier: set_soldier,
    icon_src: config.komandoska_second_src,
    clear: clear,
  };

  return that;

  function set_soldier(setted) {
    soldier = setted;
  }

  function clear() {
    use_time = Number.min_value;
    if (callback) {
      callback();
      callback = null;
    }
  }
  
  function use(level) {
    if ( use_time + config.komandoska_second_cooldown > engine.frame) {
      return;
    }
    if (soldier.life <= 0) {
      return;
    }

    use_time = engine.frame;

    var r_square = config.komandoska_second_radius * config.komandoska_second_radius;

    var i, dx, dy;
    for (i = 0; i < level.creatures.length; i++) {
      var creature = level.creatures[i];
      dx = creature.x - soldier.x;
      dy = creature.y - soldier.y;
      if (dx * dx + dy * dy < r_square && creature.friendly) {
        creature.set_life( creature.life + Math.floor( creature.max_life * config.komandoska_second_health_recover) );
      }
    }
    for (i = 0; i < level.soldiers.length; i++) {
      var other = level.soldiers[i];
      dx = other.x - soldier.x;
      dy = other.y - soldier.y;

      if (dx * dx + dy * dy < r_square) {
        other.set_life( other.life + Math.floor( other.max_life * config.komandoska_second_health_recover) );
      }
    }

  }

  function cooldown_coef() {
    var cooldown = config.komandoska_second_cooldown;
    var timeout = config.komandoska_second_timeout;

    var time = engine.frame - use_time;

    if (time > cooldown || time < timeout) {
      return 1;
    }
    var coef = (time - timeout)/(cooldown - timeout);
    return coef;
  }

  function active_coef() {
    var timeout = config.komandoska_second_timeout;

    var time = engine.frame - use_time;
    if (time > timeout) {
      return 1;
    }
    var coef = time/timeout;
    return coef;
  }
};

