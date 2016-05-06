function ItemsFactory() {
  this.weapons_definitions = {};
  this.armours_definitions = {};

  this.ammos_definitions = {};
  this.aids_definitions = {};

  this.natural_weapons_definitions = {};
  this.natural_armours_definitions = {};

  items_data(this);
}

ItemsFactory.prototype.define_weapon = function(key, params) {
  this.weapons_definitions[key] = params;
};

ItemsFactory.prototype.get_weapon = function(key) {
  var definition = this.weapons_definitions[key];
  if (definition) {
    return new Weapon(key, definition);
  }
};

ItemsFactory.prototype.define_armour = function(key, params) {
  this.armours_definitions[key] = params;
};

ItemsFactory.prototype.get_armour = function(key) {
  var definition = this.armours_definitions[key];
  if (definition) {
    return new Armour(key, definition);
  }
};

ItemsFactory.prototype.define_ammo = function(key, params) {
  this.ammos_definitions[key] = params;
};

ItemsFactory.prototype.get_ammo = function(key) {
  var definition = this.ammos_definitions[key];
  if (definition) {
    return new Ammo(key, definition);
  }
};

ItemsFactory.prototype.define_aid = function(key, params) {
  this.aids_definitions[key] = params;
};

ItemsFactory.prototype.get_aid = function(key) {
  var definition = this.aids_definitions[key];
  if (definition) {
    return new Aid(key, definition);
  }
};

ItemsFactory.prototype.get_item = function(key) {
  var definiton;

  definition = this.weapons_definitions[key];
  if (definition) { return new Weapon(key, definition); }

  definition = this.armours_definitions[key];
  if (definition) { return new Armour(key, definition); }

  definition = this.ammos_definitions[key];
  if (definition) { return new Ammo(key, definition); }

  definition = this.aids_definitions[key];
  if (definition) { return new Aid(key, definition); }
};

ItemsFactory.prototype.define_natural_weapon = function(key, params) {
  this.natural_weapons_definitions[key] = params;
};

ItemsFactory.prototype.get_natural_weapon = function(key) {
  var definition = this.natural_weapons_definitions[key];
  return new Weapon(key, definition);
};

ItemsFactory.prototype.define_natural_armour = function(key, params) {
  this.natural_armours_definitions[key] = params;
};

ItemsFactory.prototype.get_natural_armour = function(key) {
  var definition = this.natural_armours_definitions[key];
  return new Armour(key, definition);
};

ItemsFactory.prototype.get_white_items = function(levels) {
  var defs = [], key, def;
  for (key in this.weapons_definitions) {
    // var def = this.weapons_items[key];
    def = this.get_weapon(key);
    if (!def.ranged && (def.level === undefined || this.check_levels(levels,def.level))) {
      defs.push(def);
    }
  }
  return defs;
};

ItemsFactory.prototype.get_ranged_items = function(levels) {
  var defs = [];
  for (var key in this.weapons_definitions) {
    // var def = this.weapons_items[key];
    var def = this.get_weapon(key);
    if (def.ranged && (def.level === undefined || this.check_levels(levels,def.level))) {
      defs.push(def);
    }
  }
  return defs;
}
ItemsFactory.prototype.get_ammo_items = function(levels) {
  var defs = [];
  for (var key in this.ammos_definitions) {
    // var def = this.ammos_items[key];
    var def = this.get_ammo(key);
    if (def.level === undefined || this.check_levels(levels,def.level)) {
      defs.push(def);
    }
  }
  return defs;
}
ItemsFactory.prototype.get_armour_items = function(levels) {
  var defs = [];
  for (var key in this.armours_definitions) {
    // var def = this.armours_items[key];
    var def = this.get_armour(key);
    if (def.level === undefined || this.check_levels(levels,def.level)) {
      defs.push(def);
    }
  }
  return defs;
}

ItemsFactory.prototype.get_aids_items = function(levels) {
  var defs = [];
  for (var key in this.aids_definitions) {
    // var def = this.armours_items[key];
    var def = this.get_aid(key);
    if (def.level === undefined || this.check_levels(levels,def.level)) {
      defs.push(def);
    }
  }
  return defs;
}

ItemsFactory.prototype.check_levels = function(passed, available) {
  for (var key in available) {
    var checked = available[key];
    if (passed[checked]) {
      return true;
    }
  }
  return false;
};

ItemsFactory.prototype.deserialize = function(serialized) {
  switch (serialized.class) {
    case 'Weapon':
      var weapon = this.get_weapon(serialized.key);
      weapon.condition = serialized.condition;
      return weapon;
    case 'Armour':
      var armour = this.get_armour(serialized.key);
      armour.condition = serialized.condition;
      return armour;
    case 'Ammo':
      var ammo = this.get_ammo(serialized.key);
      ammo.quantity = serialized.quantity;
      return ammo;
    case 'Aid':
      var aid = this.get_aid(serialized.key);
      if (aid.max_quantity) {
        aid.quantity = serialized.quantity;
      }
      return aid;
  }
};

function Weapon(key, params) {
  this.key = key;
  for (var param in params) {
    if (param == 'icon') {
      this.icon = Image.from_src(params['icon']);
    } else {
      this[param] = params[param];
    }
  }
  this.timestamp = 0;
  this.condition = this.max_condition;
  this.condition_bar = new ConditionBar(this);
  this.ammo = this.max_ammo;
}

Weapon.prototype.touch = function() {
  this.timestamp = (new Date()).getTime();
}
Weapon.prototype.time = function() {
  return this.timestamp;
}
Weapon.prototype.is_ready = function() {
  return this.timestamp + this.speed * 1000 < Date.now();
}
Weapon.prototype.use = function() {
  this.timestamp = (new Date()).getTime();
}
Weapon.prototype.reload = function() {
  this.ammo = this.max_ammo;
}

Weapon.prototype.serialize = function() {
  var attrs = {};
  attrs.class = 'Weapon';
  attrs.key = this.key;
  attrs.condition = this.condition;
  return attrs;
}

function Ammo(key, params) {
  this.key = key;
  for (var param in params) {
    if (param == 'icon') {
      this.icon = Image.from_src(params['icon']);
    } else {
      this[param] = params[param];
    }
  }
  this.quantity = this.max_quantity;
}
Ammo.prototype.decrement = function() {
  this.quantity--;
  return this.quantity;
}
Ammo.prototype.serialize = function() {
  var attrs = {}
  attrs.class = 'Ammo';
  attrs.key = this.key;
  attrs.quantity = this.quantity;
  return attrs;
}

function Aid(key, params) {
  this.key = key;
  for (var param in params) {
    if (param == 'icon') {
      this.icon = Image.from_src(params['icon']);
    } else {
      this[param] = params[param];
    }
  }
  if (this.max_quantity) {
    this.quantity = this.max_quantity;
  }
}
Aid.prototype.serialize = function() {
  var attrs = {};
  attrs.class = 'Aid';
  attrs.key = this.key;
  if (this.max_quantity) {
    attrs.quantity = this.quantity;
  }
  return attrs;
};

Aid.prototype.action = function(target) {
  this.use(target);
  if (this.quantity) {
    return this.quantity-=1;
  } else {
    return 0;
  }
};

Aid.prototype.use = function(target) {

  switch(this.type) {
    case 'attack':
      target.attack += this.boost;
      break;
    case 'defence':
      target.defence += this.boost;
      if (target.defence > 100) {
        target.defence = 100;
      }
      break;
    case 'life':
      target.max_life += this.boost;
      break;
  }
};

function Armour(key, params) {
  this.key = key;
  for (var param in params) {
    if (param == 'icon') {
      this.icon = Image.from_src(params['icon']);
    } else {
      this[param] = params[param];
    }
  }
  this.condition = this.max_condition;
  this.condition_bar = new ConditionBar(this);
}

Armour.prototype.serialize = function() {
  var attrs = {};
  attrs.class = 'Armour';
  attrs.key = this.key;
  attrs.condition = this.condition;
  return attrs;
}

Armour.prototype.draw = function(context, x, y) {
    // this.context.fillText(this.name, x, y + 10);
    try {
      context.drawImage(this.icon, x, y);
    } catch (e) {
      debug.warn("Nie udalo sie narysowac itemu", this);
    }
    // if (this.condition) this.condition_bar.draw(context, x + global_config.items.condition_ofset_x , y + global_config.items.condition_ofset_y);
    debug.do_draw('items') && context.fillText(this.name, x + 0, y - 10); 
};
Weapon.prototype.draw = function(context, x, y) {
    // this.context.fillText(this.name, x, y + 10);
    try {
      context.drawImage(this.icon, x, y);
    } catch (e) {
      debug.warn("Nie udalo sie narysowac itemu", this);
    }
    if (this.max_ammo) context.fillText(this.ammo, x + global_config.items.quantity_ofset_x, y + global_config.items.quantity_ofset_y);
    // if (this.condition) this.condition_bar.draw(context, x + global_config.items.condition_ofset_x , y + global_config.items.condition_ofset_y);
    debug.do_draw('items') && context.fillText(this.name, x + 0, y - 10); 
};
Aid.prototype.draw = function(context, x, y) {
    // this.context.fillText(this.name, x, y + 10);
    try {
      context.drawImage(this.icon, x, y);
    } catch (e) {
      debug.warn("Nie udalo sie narysowac itemu", this);
    }
    if (this.max_quantity) context.fillText(this.quantity, x + global_config.items.quantity_ofset_x, y + global_config.items.quantity_ofset_y);
    debug.do_draw('items') && context.fillText(this.name, x + 0, y - 10); 
};
Ammo.prototype.draw = function(context, x, y) {
    // this.context.fillText(this.name, x, y + 10);
    try {
      context.drawImage(this.icon, x, y);
    } catch (e) {
      debug.warn("Nie udalo sie narysowac itemu", this);
    }
    if (this.max_quantity) context.fillText(this.quantity, x + global_config.items.quantity_ofset_x, y + global_config.items.quantity_ofset_y);
    debug.do_draw('items') && context.fillText(this.name, x + 0, y - 10); 
};

function ConditionBar(item) {
  debug.trace("Tworze conditionbar dla itemu", item);

  this.item = item;

  this.bars = global_config.items.condition_sprites;

  this.sprite = new Sprite();
  this.sprite.set_image_src(global_config.items.condition_src);
  this.sprite.set_size(global_config.items.condition_width, global_config.items.condition_height);
  this.sprite.define(0,'condition', this.bars);
  this.sprite.set('condition');
}

ConditionBar.prototype.draw = function(context, x, y) {
  var frame = Math.floor((1 - this.item.condition/this.item.max_condition) * this.bars);
  this.sprite.draw_frame(context, x, y, frame);
}

