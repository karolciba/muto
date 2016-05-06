function SoldiersFactory() {
  this.soldiers_definitions = {};
  
  this.items_factory = null;

  soldiers_data(this);
}

SoldiersFactory.prototype.set_items_factory = function(items_factory) {
  this.items_factory = items_factory;
}

SoldiersFactory.prototype.define = function(name, params) {
  params['name'] = name;
  this.soldiers_definitions[name] = params
}
SoldiersFactory.prototype.get = function(name, level) {
  var definition = this.soldiers_definitions[name];
  var soldier = new Soldier(level);

  try {
    for (var param in definition) {
      // debug.debug("Definiuje parametr "+param+" o wart. "+definition[param]+" dla soldiera "+name);
      // if (param == 'sprite') {
        // var sprite = definition[param];
        // soldier.set_sprite(sprite.get_clone());
      // } else if (param == 'weapon') {
      //   var item = this.items_factory.get_weapon(definition[param]);
      //   soldier.set_weapon(item);
      // } else if (param == 'armour') {
      //   var item = this.items_factory.get_armour(definition[param]);
      //   soldier.set_armour(item);
      // } else if (param == 'item_0') {
      //   var item = this.items_factory.get_item(definition[param]);
      //   soldier.set_item_0(item);
      // } else if (param == 'item_1') {
      //   var item = this.items_factory.get_item(definition[param]);
      //   soldier.set_item_1(item);
      // } else if (param == 'item_2') {
      //   var item = this.items_factory.get_item(definition[param]);
      //   soldier.set_item_2(item);
      // } else if (param == 'item_3') {
      //   var item = this.items_factory.get_item(definition[param]);
      //   soldier.set_item_3(item);
      // } else {
      if (param == 'natural_weapon') {
        soldier.set_natural_weapon( this.items_factory.get_natural_weapon( definition[param] ) );
      } else if (param == 'natural_armour') {
        soldier.set_natural_armour( this.items_factory.get_natural_armour( definition[param] ) );
      } else {
        soldier["set_"+param](definition[param]);
      }
    }
  } catch (err) {
    debug.error("Nie udalo sie ustawic parametru "+param+" o wartosci dla", definition[param], soldier);
  }

  return soldier;
}
SoldiersFactory.prototype.deserialize = function(serialized) {
  var soldier = this.get(serialized.name);
  soldier.set_max_life(serialized.max_life);
  soldier.set_attack(serialized.attack);
  soldier.set_min_attack(serialized.min_attack);
  soldier.set_defence(serialized.defence);
  soldier.set_walk_speed(serialized.walk_speed);
  soldier.set_run_speed(serialized.run_speed);

  soldier.abilities = Abilities.from_hash(serialized.abilities);

  if (serialized.weapon) {
    soldier.weapon = this.items_factory.deserialize(serialized.weapon);
  }
  if (serialized.armour) {
    soldier.armour = this.items_factory.deserialize(serialized.armour);
  }
  if (serialized.item_0) {
    soldier.item_0 = this.items_factory.deserialize(serialized.item_0);
  }
  if (serialized.item_1) {
    soldier.item_1 = this.items_factory.deserialize(serialized.item_1);
  }
  if (serialized.item_2) {
    soldier.item_2 = this.items_factory.deserialize(serialized.item_2);
  }
  if (serialized.item_3) {
    soldier.item_3 = this.items_factory.deserialize(serialized.item_3);
  }

  return soldier;
}
