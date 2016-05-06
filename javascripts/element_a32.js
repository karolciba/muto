function Element(level, x, y) {
  debug.trace("Creating new mutant");

  // {{ TU DEFINIUJEMY PARAMETRY BOTA
  this.name = "Mutant";

  this.radius = 20;

  // }} TU DEFINIUJEMY PARAMETRY BOTA
  
  this.level = level;
  this.healthbar = new HealthBar(this);

  this.waypoints = [];
  this.destination = [x, y];

  this.abilities = new Abilities(0);
  this.influences = Influences();

  this.state = 'stand';
  this.sub_state = 'down';
  this.attack_type = 'natural';
  this.damaged = false;

  this.opponents = null;
  this.commander = new Commander(this,level);
  this.driver = new Driver(this,level);
  this.gunner = new Gunner(this,level);
  this.speed = 0;
  this.x = x; // pozycja x
  this.y = y; // pozycja y
  this.a = 0; // kat obrotu
}

setter(Element, 'opponents');
setter(Element, 'hearing');
setter(Element, 'droppings');
setter(Element, 'natural_range');
setter(Element, 'hammer_range');
setter(Element, 'sword_range');
setter(Element, 'pole_range');

Element.prototype.set_name = function(name) {
  this.name = name;
};

Element.prototype.set_agility = function(agility) {
  this.agility = agility;
  this.recalculate_speed();
};

Element.prototype.recalculate_speed = function() {
  this.run_speed = (new Mechanics()).run(Math.floor(this.get_agility()));
  this.walk_speed = (new Mechanics()).speed(Math.floor(this.get_agility()));
  this.speed = this.walk_speed;
};

Element.prototype.get_walk_speed = function() {
  this.walk_speed = (new Mechanics()).speed(Math.floor(this.get_agility()));
  return this.walk_speed;
};

Element.prototype.get_run_speed = function() {
  this.run_speed = (new Mechanics()).run(Math.floor(this.get_agility()));
  return this.run_speed;
};

Element.prototype.get_agility = function() {
  var base = this.agility;
  
  var armour = this.armour || this.natural_armour;
  // leci wyjatek o braku armour - nie mam czasu szukac
  // czemu postac nie ma armour
  if (armour) {
    var test_vigour = Math.floor(this.get_vigour() - armour.min_vigour);
    base += armour.vigour_modifier[test_vigour + 31];
  }

  return base;
};

Element.prototype.set_vigour = function(vigour) {
  this.vigour = vigour;
  this.max_life = (new Mechanics()).life( Math.floor(this.get_vigour()));
  if (this.life === undefined) {
    this.life = this.max_life;
  }
};

Element.prototype.recalculate_life = function() {
  var max_life = (new Mechanics()).life( Math.floor(this.get_vigour()) );

  if (max_life != this.max_life) {
    this.life = Math.floor( max_life * this.life / this.max_life);
    this.max_life = max_life;
  }
};

Element.prototype.get_vigour = function() {
  return this.vigour;
};

Element.prototype.set_perception = function(perception) {
  this.perception = perception;
};

Element.prototype.get_perception = function() {
  return this.perception;
};

Element.prototype.set_intelligence = function(intelligence) {
  this.intelligence = intelligence;
};

Element.prototype.get_intelligence = function() {
  return this.intelligence;
};

Element.prototype.set_natural_weapon = function(weapon) {
  this.natural_weapon = weapon;
};
Element.prototype.set_natural_armour = function(armour) {
  this.natural_armour = armour;
};

Element.prototype.set_hit_modifier = function(hit_modifier) {
  this.hit_modifier = hit_modifier;
};

Element.prototype.set_abilities = function(abilities) {
  var ability;
  for (ability in abilities) {
    if (abilities.hasOwnProperty(ability)) {
      this.abilities[ability] = abilities[ability];
    }
  }
};

Element.prototype.set_sprite = function(sprite) {
  this.sprite = sprite.get_clone();
  this.damage_sprite = sprite.get_clone();
};

Element.prototype.set_radius = function(radius) {
  this.radius = radius;
};

Element.prototype.set_sight = function(sight) {
  this.sight = sight;
};

Element.prototype.inside = function(x,y, r) {
  r = r || this.radius;
  debug.trace("Checking if point is inside",this.x,this.y,x,y);
  var dist = Math.distance(this.x, this.y, x, y);
  var collision = ( r > dist );

  return collision;
};

Element.prototype.set = function(x,y) {
  this.x = x;
  this.y = y;
};

Element.prototype.draw_debug = function (context) {
  context.fillStyle = '#fff';
  context.strokeStyle = '#000';
  
  // name
  if (debug.do_draw('state')) {
    context.fillText(this.name, this.x - 15, this.y - 20);
  }

  // life
  context.fillStyle = '#f00';
  debug.do_draw('life') && context.fillText(this.life + "/" + this.max_life, this.x - 30, this.y-30);

  // vector
  if (debug.do_draw('move')) {
    context.fillStyle = '#00f';
    context.strokeStyle = '#00f';
    context.beginPath();
    context.moveTo(this.x, this.y);
    var x = this.x + Math.sin(this.a) * 24 * this.speed;
    var y = this.y + Math.cos(this.a) * 24 * this.speed;
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 3;
    context.stroke();
    context.lineWidth = 1;
  }

  if (debug.do_draw('steer')) {
    context.fillText(this.driver.state, this.x - 15, this.y + 20);
  }

  if (debug.do_draw('move')) {
    // target
    if (this.commander.target) {
      context.fillStyle = '#ff0';
      context.strokeStyle = '#ff0';
      context.beginPath();
      // context.moveTo(this.x, this.y);
      // context.lineTo(this.commander.target.x,this.commander.target.y);
      context.dashedLine(this.x, this.y, this.commander.target.x,this.commander.target.y);
      context.closePath();
      context.stroke();
    }

    // destination
    if (this.commander.destination) {
      context.fillStyle = '#0f0';
      context.strokeStyle = '#0f0';
      context.beginPath();
      // context.moveTo(this.x, this.y);
      // context.lineTo(this.commander.destination[0],this.commander.destination[1]);
      context.dashedLine(this.x, this.y, this.commander.destination[0],this.commander.destination[1]);
      context.closePath();
      context.stroke();
    }
  }

  if (debug.do_draw('radius')) {
    // collision circle
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.strokeStyle = 'yellow';
    context.stroke();
  }

  if (debug.do_draw('sight')) {
    // sight circle
    context.beginPath();
    context.arc(this.x, this.y, this.sight, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.strokeStyle = 'yellow';
    context.stroke();
  }

  if (debug.do_draw('hearing')) {
    // sight circle
    context.beginPath();
    context.arc(this.x, this.y, this.hearing, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.strokeStyle = 'blue';
    context.stroke();
  }

  if (debug.do_draw('range')) {
    // weapon range
    var weapon = this.weapon || this.natural_weapon;
    var range;
    if (weapon.ranged) {
      range = weapon.range;
    } else {
      range = this[ weapon.animation + "_range" ];
    }
    context.beginPath();
    context.arc(this.x, this.y, range, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.stroke();
  }

  if (debug.do_draw('hearing')) {
    // weapon range
    var weapon = this.weapon || this.natural_weapon;
    context.beginPath();
    context.arc(this.x, this.y, weapon.noise, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.strokeStyle = 'orange';
    context.stroke();
  }
};

Element.prototype.get_direction = function() {
  var a = this.a % ( 2 * Math.PI);
  var qart = Math.round( 4 * a / Math.PI );

  // console.log(a);
  // console.log(qart);

  switch (qart) {
    case 0: return 'down';
    case 1: return 'downright';
    case 2: return 'right';
    case 3: return 'upright';
    case 4: return 'up';
    case 5: return 'upleft';
    case 6: return 'left';
    case 7: return 'downleft';
    case 8: return 'down';
    case -1: return 'downleft';
    case -2: return 'left';
    case -3: return 'upleft';
    case -4: return 'up';
    case -5: return 'upright';
    case -6: return 'right';
    case -7: return 'downright';
    case -8: return 'down';
    default: return 'down';
  }
};

Element.prototype.get_direction_to_target = function(target) {
  var x = target.x - this.x;
  var y = target.y - this.y;

  var a = Math.atan2(x,y);

  var qart = Math.round( 4 * a / Math.PI );

  // console.log(a);
  // console.log(qart);

  switch (qart) {
    case 0: return 'down';
    case 1: return 'downright';
    case 2: return 'right';
    case 3: return 'upright';
    case 4: return 'up';
    case 5: return 'upleft';
    case 6: return 'left';
    case 7: return 'downleft';
    case 8: return 'down';
    case -1: return 'downleft';
    case -2: return 'left';
    case -3: return 'upleft';
    case -4: return 'up';
    case -5: return 'upright';
    case -6: return 'right';
    case -7: return 'downright';
    case -8: return 'down';
    default: return 'down';
  }
};

Element.prototype.draw_move = function (context) {
  debug.trace("Drawing move", this);

  var sub_state = this.get_direction();
  // console.log(sub_state);

  if (this.speed > 0) {
    this.sprite.change( "walk_" + sub_state);
  } else {
    this.sprite.change( "stand_" + sub_state );
  }

  ret = this.sprite.draw(context, this.x, this.y);
  if (ret <= 0) {
    // this.sprite.rewind();
    sub_state = this.get_direction();
    this.sprite.set( "walk_" + sub_state);
    this.sprite.rewind();
  }
  this.healthbar.draw(context);
  this.draw_influences(context);
  this.draw_damage(context);
};

Element.prototype.draw = Element.prototype.draw_move;

Element.prototype.draw_attack = function(context) {
  debug.trace("Drawing attack", this);

  // var sub_state = this.get_direction();
  if (this.commander.target) {
    var sub_state = this.get_direction_to_target(this.commander.target);
    this.sub_state = sub_state;
  }
  // console.log(sub_state);
  this.sprite.change( this.attack_type+"_attack_" + this.sub_state);

  ret = this.sprite.draw(context, this.x, this.y);
  // skonczylismy atak - wracamy do movea
  if (ret <= 0) {
    this.state = 'walk';
    this.gunner.attacking = false;
    this.draw = this.draw_move;
  }
  this.healthbar.draw(context);
  this.draw_influences(context);
  this.draw_damage(context);
};

Element.prototype.draw_influences = function(context) {
  var keys = this.influences.timed_keys();
  var base_x = this.x + global_config.influences.map_offset_x;

  for (var i in keys) {
    var key = keys[i];
    var image = Image.from_src( global_config.influences[key + "_mini_icon_src"] );
    context.drawImage(image, base_x , this.y + global_config.influences.map_offset_y);
    base_x += global_config.influences.mini_icon_width;
  }
};

Element.prototype.draw_damage = function(context) {
  if (this.damaged) {
    ret = this.damage_sprite.draw(context, this.x, this.y);
    if (!ret) {
      this.damaged = false;
    }
  }
};

Element.prototype.on_damage = function() {
  this.damaged = true;
  // this.damage_sprite.set("damage_" + this.sub_state);
  this.damage_sprite.set("damage_down");
};

Element.prototype.draw_dead = function(context) {
  debug.trace("Drawing dead", this);
  this.sprite.draw(context, this.x, this.y);
};

Element.prototype.on_dead = function() {
  this.state = 'dead';
  this.sub_state = 'down';
  this.sub_state = this.get_direction();
  this.sprite.set(this.state + "_" + this.sub_state);
  this.draw = this.draw_dead;
  // this.tick = function() {};
};

Element.prototype.on_attack = function(target) {
  this.state = 'attack';

  this.sprite.set(this.attack_type + '_' + this.state + "_" + this.sub_state);
  this.sprite.rewind();

  this.draw = this.draw_attack;
};


Element.prototype.get_bounds = function(x, y) {
  var wo = this.sprite.width_offset;
  var ho = this.sprite.height_offset;
  if (!x) { x = this.x; }
  if (!y) { y = this.y; }

  return [x - wo, y - ho, x + wo, y + ho];
};

Element.prototype.circle_collision = function(other, x, y) {
  var dx = other.x - x;
  var dy = other.y - y;
  var sum = this.radius + other.radius; 
  // test separation
  if (dx > sum && dy > sum) {
    return false;
  }

  var sq_dist = dx * dx + dy * dy;
  var collision = ( sum * sum > sq_dist );

  return collision;
};

Element.prototype.get_unique_id = function() {
  if (!this.unique_id) {
    var unique_id = (new Date()).getTime();
    this.unique_id = unique_id + "_" +  Math.random();
  }
  return this.unique_id;
};

Element.prototype.set_life = function(life) {
  if (this.life > life) {
    this.on_damage();
  }
  if (life >= this.max_life) {
    this.life = this.max_life;
  } else {
    this.life = life;
  }
};

Element.prototype.is_alive = function() {
  return this.life > 0;
};

// {{ ITEMS
Element.prototype.set_weapon = function(weapon) {
  if (weapon && !(weapon instanceof Weapon)) return null;

  if (weapon && weapon.classes && weapon.classes.indexOf(this.name) === -1) return null;

  if (this.weapon) this.weapon.owner = null;
  this.weapon = weapon;
  return true;
};
Element.prototype.get_weapon = function() {
  return this.weapon;
};
Element.prototype.set_armour = function(armour) {
  if (armour && !(armour instanceof Armour)) return null;

  if (this.armour) this.armour.owner = null;
  this.armour = armour;
  return true;
};
Element.prototype.get_armour = function() {
  return this.armour;
};
// }} ITEMS

Element.prototype.tick = function (frame) {
  this.commander.update(frame);
  this.gunner.attack();
};

Element.prototype.steering = function(frame) {
  this.driver.update(frame);
};

function Soldier(level, x,y) {
  debug.trace("Creating new soldier");
  
  // {{ TU DEFINIUJEMY PARAMETRY BOTA
  this.name = "Soldier";

  this.radius = 32;
  // }} TU DEFINIUJEMY PARAMETRY BOTA
  
  this.level = level;
  this.healthbar = new HealthBar(this);

  this.abilities = new Abilities(0);
  this.influences = Influences();

  this.waypoints = [];
  this.destination = [x, y];

  this.state = 'stand';
  this.sub_state = 'down';
  this.attack_type = 'natural';
  this.damaged = false;

  this.steps = 0;
  this.x_step = 0;
  this.y_step = 0;

  this.commander = new Executor(this,level);
  this.driver = new Driver(this,level);
  this.gunner = new Gunner(this,level);
  this.speed = 0;
  this.x = x; // pozycja x
  this.y = y; // pozycja y
  this.a = -Math.PI/4; // kat obrotu
}

setter(Soldier, 'natural_range');
setter(Soldier, 'hammer_range');
setter(Soldier, 'sword_range');
setter(Soldier, 'pole_range');

Soldier.prototype.set_level = function(level) {
  this.level = level;
  this.commander.set_level(level);
  this.driver.set_level(level);
  this.gunner.set_level(level);
};

Soldier.prototype.set_icon = function(icon_src) {
  this.icon = new Image.from_src(icon_src);
};
Soldier.prototype.set_mini_icon = function(icon_src) {
  this.mini_icon = new Image.from_src(icon_src);
};

Soldier.prototype.get_unique_id = Element.prototype.get_unique_id;

Soldier.prototype.inside = Element.prototype.inside;

Soldier.prototype.get_direction = Element.prototype.get_direction;
Soldier.prototype.get_direction_to_target = Element.prototype.get_direction_to_target;
Soldier.prototype.draw = Element.prototype.draw;
Soldier.prototype.draw_move = Element.prototype.draw_move;
Soldier.prototype.draw_attack = Element.prototype.draw_attack;
Soldier.prototype.draw_damage = Element.prototype.draw_damage;
Soldier.prototype.draw_influences = Element.prototype.draw_influences;
Soldier.prototype.draw_dead = Element.prototype.draw_dead;
// Soldier.prototype.draw_lifebar = Element.prototype.draw_lifebar;

Soldier.prototype.set = Element.prototype.set;
Soldier.prototype.get_bounds = Element.prototype.get_bounds;
Soldier.prototype.circle_collision = Element.prototype.circle_collision;

Soldier.prototype.set_name = Element.prototype.set_name;
Soldier.prototype.set_agility = Element.prototype.set_agility;
Soldier.prototype.recalculate_speed = Element.prototype.recalculate_speed;
Soldier.prototype.get_walk_speed = Element.prototype.get_walk_speed;
Soldier.prototype.get_run_speed = Element.prototype.get_run_speed;
Soldier.prototype.set_vigour = Element.prototype.set_vigour;
Soldier.prototype.set_perception = Element.prototype.set_perception;
Soldier.prototype.set_intelligence = Element.prototype.set_intelligence;
Soldier.prototype.set_hit_modifier = Element.prototype.set_hit_modifier;
// Soldier.prototype.max_life = Element.prototype.max_life;
Soldier.prototype.recalculate_life = Element.prototype.recalculate_life;

Soldier.prototype.get_agility = function() {
  var base = this.agility;
  
  var armour = this.armour || this.natural_armour;
  // leci wyjatek o braku armour - nie mam czasu szukac
  // czemu postac nie ma armour
  if (armour) {
    var test_vigour = Math.floor(this.get_vigour() - armour.min_vigour);
    base += armour.vigour_modifier[test_vigour + 31];
  }

  if (this.influences.get('puma')) {
    base += 3;
  }

  if (this.influences.get('ghost')) {
    base += 10;
  }

  if (base > 32) {
    base = 32;
  }

  return base;
};

Soldier.prototype.get_vigour = function() {
  var base = this.vigour;
  var booster = this.influences.get('booster');

  if (booster) {
    base += booster;
  }

  if (this.influences.get('ghost')) {
    base += 1;
  }

  if (base > 23) {
    base = 32;
  }

  return base;
};

Soldier.prototype.get_perception = function() {
  var base = this.perception;
  var falcon = this.influences.get('falcon');

  if (falcon) {
    base += falcon;
  }

  if (this.influences.get('ghost')) {
    base += 1;
  }

  if (base > 32) {
    base = 32;
  }

  return base;
};

Soldier.prototype.get_intelligence = function() {
  var base = this.intelligence;

  if (this.influences.get('enlightenment')) {
    base += 1;
  }

  if (this.influences.get('ghost')) {
    base += 1;
  }

  if (base > 32) {
    base = 32;
  }
  
  return base;
};

Soldier.prototype.draw_debug = Element.prototype.draw_debug;
Soldier.prototype.set_sprite = Element.prototype.set_sprite;
Soldier.prototype.set_radius = Element.prototype.set_radius;
Soldier.prototype.set_sight = Element.prototype.set_sight;

Soldier.prototype.on_attack = Element.prototype.on_attack;
Soldier.prototype.on_damage = Element.prototype.on_damage;
Soldier.prototype.on_dead = Element.prototype.on_dead;
Soldier.prototype.revive = function() {
  this.state = 'stand';
  this.sub_state = 'down';
  this.sprite.set(this.state + "_" + this.sub_state);
  this.draw = this.draw_move;
  this.life = this.max_life;
  this.gunner.attacking = false;
};

Soldier.prototype.set_natural_weapon = Element.prototype.set_natural_weapon;
Soldier.prototype.set_natural_armour = Element.prototype.set_natural_armour;

Soldier.prototype.set_weapon = Element.prototype.set_weapon;
Soldier.prototype.get_weapon = Element.prototype.get_weapon;
Soldier.prototype.set_armour = Element.prototype.set_armour;
Soldier.prototype.get_armour = Element.prototype.get_armour;

Soldier.prototype.set_item_0 = function(item) {
  this.item_0 = item;
  return true;
};
Soldier.prototype.get_item_0 = function() {
  return this.item_0;
};
Soldier.prototype.set_item_1 = function(item) {
  this.item_1 = item;
  return true;
};
Soldier.prototype.get_item_1 = function() {
  return this.item_1;
};
Soldier.prototype.set_item_2 = function(item) {
  this.item_2 = item;
  return true;
};
Soldier.prototype.get_item_2 = function() {
  return this.item_2;
};
Soldier.prototype.set_item_3 = function(item) {
  this.item_3 = item;
  return true;
};
Soldier.prototype.get_item_3 = function() {
  return this.item_3;
};

Soldier.prototype.set_abilities = Element.prototype.set_abilities;

Soldier.prototype.set_pane_callback = function(callback) {
  this.pane_callback = callback;
};
Soldier.prototype.clear_pane_callback = function() {
  this.pane_callback = null;
};
Soldier.prototype.call_pane_callback = function() {
  if (this.pane_callback) this.pane_callback();
};

Soldier.prototype.set_life = function(life) {
  this.call_pane_callback();
  if (this.life > life) {
    this.on_damage();
  }
  if (life >= this.max_life) {
    this.life = this.max_life;
  } else {
    this.life = life;
  }
};

Soldier.prototype.tick = function (frame) {
  this.commander.update(frame);
  this.gunner.attack();
};

Soldier.prototype.steering = function(frame) {
  this.driver.update(frame);
};

Soldier.prototype.serialize = function() {
  var attrs = {};
  attrs.name = this.name;
  attrs.agility = this.agility;
  attrs.vigour = this.vigour;
  attrs.perception = this.perception;
  attrs.intelligence = this.intelligence;

  attrs.abilities = this.abilities;

  if (this.weapon) attrs.weapon = this.weapon.serialize();
  if (this.armour) attrs.armour = this.armour.serialize();

  if (this.item_0) attrs.item_0 = this.item_0.serialize();
  if (this.item_1) attrs.item_1 = this.item_1.serialize();
  if (this.item_2) attrs.item_2 = this.item_2.serialize();
  if (this.item_3) attrs.item_3 = this.item_3.serialize();

  return attrs;
};

function HealthBar(creature) {
  debug.trace("Tworze healthbar dla kreatury", creature);
  this.creature = creature;

  this.bars = global_config.creatures.health_sprites;

  this.sprite = new Sprite();
  this.sprite.set_image_src(global_config.creatures.health_src);
  this.sprite.set_size(global_config.creatures.health_width, global_config.creatures.health_height);
  this.sprite.define(0,'health', this.bars);
  this.sprite.set('health');
}

HealthBar.prototype.draw = function(context) {
  debug.trace("Rysuje healthbar dla kreatury", this.creature);
  var frame = Math.floor((1 - this.creature.life/this.creature.max_life) * this.bars);
  this.sprite.draw_frame(context, this.creature.x + global_config.creatures.health_ofset_x, this.creature.y + global_config.creatures.health_ofset_y, frame);
};

