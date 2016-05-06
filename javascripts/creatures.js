function CreaturesFactory() {
  this.creatures_definitions = {};
  this.items_factory = null;

  creatures_data(this);
}

CreaturesFactory.prototype.set_items_factory = function(items_factory) {
  this.items_factory = items_factory;
}

CreaturesFactory.prototype.define = function(name, params) {
  params['name'] = name;
  this.creatures_definitions[name] = params
}
CreaturesFactory.prototype.get = function(name, level) {
  var definition = this.creatures_definitions[name];
  var creature = new Element(level);

  try {
    for (var param in definition) {
      if (param == 'natural_weapon') {
        creature.set_natural_weapon( this.items_factory.get_natural_weapon( definition[param] ) );
      } else if (param == 'natural_armour') {
        creature.set_natural_armour( this.items_factory.get_natural_armour( definition[param] ) );
      } else {
        // debug.debug("Definiuje parametr "+param+" o wart. "+definition[param]+" dla bota "+name);
        creature["set_"+param](definition[param]);
      }
    }
  } catch (err) {
    debug.error("Nie udalo sie ustawic parametru "+param+" o wartosci dla", definition[param], creature, err);
  }

  return creature;
}
