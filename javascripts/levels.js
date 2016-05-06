function Levels() {
  this.definitions = [];
  this.replay_definitions = [];

  levels_data(this);
}

Levels.prototype.define_level = function(id) {
  var definition = new LevelDefinition();
  definition.set_id(id);
  this.definitions[id] = definition;
  return definition;
};
Levels.prototype.define_replay_level = function(id) {
  var definition = new LevelDefinition();
  definition.replay = true;
  definition.set_id(id);
  this.replay_definitions[id] = definition;
  return definition;
};
Levels.prototype.get_level = function(id) {
  var definition = this.definitions[id];
  return definition;
};
Levels.prototype.get_replay_level = function(id) {
  var definition = this.replay_definitions[id];
  return definition;
};
// passed tablica z oznaczonymi przeszlymi poziomami
// [ ] - zaden poziom
// [ true, true ] - zerowy i pierwszy
// [ true, , true ] - zerowy i drugi
Levels.prototype.get_available_levels = function(passed) {
  var levels = [];
  var level;

  if (passed.length === 0) {
    levels.push( this.get_level(0) );
    return levels;
  }

  for (var i = 0; i < this.definitions.length; i++) {
    if (passed[i]) {
      if (this.replay_definitions[i]) { // zwracamy poziom replayowy
        levels.push( this.replay_definitions[i] );
      } else { // a jesli go nie ma to zwykly
        levels.push( this.definitions[i] );
      }
    } else { // poziom nie wykonany - sprawdzamhy czy poprzedzajacy wykonany
      level = this.definitions[i];
      if (passed[ level.previous ]) {
        levels.push(level);
      }
    }
  }

  return levels;
};

function LevelDefinition() {
  this.name = "New Level";
  this.id = 0;
  this.map_x = 0;
  this.map_y = 0;
  this.clickable_x = 0;
  this.clickable_y = 0;
  this.description = [];
  this.desc = "";
  this.level_data = null;
  this.previous = null;
  this.replay = false;
}

LevelDefinition.prototype.set_id = function(id) {
  this.id = id;
}
LevelDefinition.prototype.set_name = function(name) {
  this.name = name;
}
LevelDefinition.prototype.set_map_position = function(x,y) {
  this.map_x = x;
  this.map_y = y;
}
LevelDefinition.prototype.set_map_clickable = function(x,y) {
  this.clickable_x = x;
  this.clickable_y = y;
}
LevelDefinition.prototype.set_description_line = function(desc) {
  this.description.push(desc);
}
LevelDefinition.prototype.set_desc = function(desc) {
  this.desc = desc;
}
LevelDefinition.prototype.set_previous = function(id) {
  this.previous = id;
}
LevelDefinition.prototype.set_level_data = function(data) {
  this.level_data = data;
}
