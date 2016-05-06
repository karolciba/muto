// Klasa odpowiedzialna na wyzej-poziomowe AI
// szuka celu, przelacza drivera miedzy stanami
function Commander(creature,level) {
  this.creature = creature;
  this.level = level;

  this.target = null;
  this.state = 'commander';
  this.mode = '';

  this.max_collisions = 5;
  this.collisions_counter = this.max_collisions;

  this.path = [];
  this.path_step = 0;

  this.icon = Image.from_src(global_config.commander.mini_icon_src);
  this.offset_x = global_config.commander.map_offset_x;
  this.offset_y = global_config.commander.map_offset_y;
}

Commander.prototype.set_mode = function(mode,params) {
  this.mode = mode;
  this.creature.driver.set_wanderer();
  if (mode === 'cruiser') {
    this.creature.driver.set_cruiser( [params.x, params.y], params.r );
  } else if (mode === 'pathfinder') {
    this.on_arrived = this.pathfinder_on_arrived;
    this.path = params;
    var dest = [this.path[0].x, this.path[0].y];
    this.creature.driver.set_walker(dest);
  } else if (mode === 'amok') {
    this.creature.commander = this.creature.amok;
  } else if (mode === 'stander') {
    this.creature.walk_speed = 0;
    this.creature.run_speed = 0;
    this.creature.driver.set_stander();
  }
};

Commander.prototype.pathfinder_on_arrived = function() {
  if (this.path[this.path_step].next !== undefined) {
    this.path_step = this.path[this.path_step].next;
    var dest = [this.path[this.path_step].x, this.path[this.path_step].y];
    this.creature.driver.set_walker(dest);
  } else {
    var dest = [this.path[this.path_step].x, this.path[this.path_step].y];
    var radius = this.path[this.path_step].radius;
    this.creature.driver.set_cruiser( dest, radius );
  }
};

Commander.prototype.draw = function(context) {
  if (this.mode == 'pathfinder') {
    if (debug.do_draw('move')) {
      var prev = this.path[0];
      var step = 1;
      var visited = [];
      var next;
      while (next = this.path[step]) {
        context.fillStyle = "#000";
        context.strokeStyle = "#f00";
        context.beginPath();
        context.dashedLine(prev.x,prev.y,next.x,next.y);
        context.closePath();
        context.stroke();
        prev = next;
        if (next.next === undefined) {
          break;
        }
        if (!visited[step]){
          visited[step] = 0;
        }
        visited[step] += 1;
        if (visited[step] == 2) {
          break;
        }
        step = next.next;
      }
    }
  }
  if (debug.do_draw('move')) {
    context.fillText(this.state, this.creature.x - 15, this.creature.y + 25);
  }

  global_config.commander.display && context.drawImage(this.icon, this.creature.x + this.offset_x, this.creature.y + this.offset_y);
};

Commander.prototype.set_level = function(level) {
  this.level = level;
};

Commander.prototype.on_kill = function() {
  this.target = null;
};

Commander.prototype.on_not_in_range = function() {
  this.creature.driver.run();
};

Commander.prototype.clear = function() {
  this.target = null;
  this.destination = null;
};

// Check if divider'th frame
Commander.prototype.df = function(frame,divider) {
  return (frame % divider) === 0;
};

Commander.prototype.update = function(frame) {
  if (this.target && this.target.life <= 0) {
    this.target = null;
  }
  // search nearest bot
  // if found set as target
  if (this.df(frame, 12) && !this.target) {
    // console.log("Szukam celu",this.creature);
    this.target = this.level.nearest_opponent(this.creature.x,this.creature.y, 
      { only_visible: true, 
        skip: this.creature,
        max_distance: this.creature.sight,
        opponents: this.creature.opponents,
      }
    );
    // console.log("Znalazlem cel",this.target);
    if (this.target) {
      this.creature.driver.set_seeker(this.target);
    } else {
      // this.creature.driver.set_wanderer();
    }
  }

  // check if target still visible
  if (this.df(frame, 13) && this.target) {
    var in_line_of_view = this.level.creatures_visible(this.creature, this.target);
    var square_distance = Math.square_distance(this.creature.x, this.creature.y, this.target.x, this.target.y);
    var square_sight = Math.pow(this.creature.sight,2);
    if (square_distance > square_sight || !in_line_of_view) {
      this.destination = [this.target.x, this.target.y];
      this.target = null;
      this.creature.driver.set_runner(this.destination);
    }
  }
};

Commander.prototype.on_collisions = function() {
  this.clear();
  this.creature.a += Math.PI/2;
  this.collisions_counter--;
  if (!this.collisions_counter) {
    this.creature.driver.set_looker();
    this.collisions_counter = this.max_collisions;
  }
};

Commander.prototype.on_arrived = function() {
  this.destination = null;
  this.creature.driver.set_wanderer();
};

// Callback na bycie zaatakowanym
Commander.prototype.on_attacked = function(attacker) {
  if (!this.target) {
    this.target = attacker;
    this.creature.driver.set_seeker(attacker);
  }
};

// Callback na uslyszenie halasu
Commander.prototype.on_noise = function(x,y) {
  if (!this.target) {
    this.destination = [x, y];
    this.creature.driver.set_runner(this.destination);
  }
};

// Klasa odpowiedzialna na wyzej-poziomowe AI
// szuka celu, przelacza drivera miedzy stanami
function Amok(creature,level) {
  this.creature = creature;
  this.level = level;

  this.target = null;
  this.state = 'amok';

  this.max_collisions = 5;
  this.collisions_counter = this.max_collisions;

  this.icon = Image.from_src(global_config.amok.mini_icon_src);
  this.offset_x = global_config.amok.map_offset_x;
  this.offset_y = global_config.amok.map_offset_y;
}

Amok.prototype.set_mode = function(mode,params) {
};

Amok.prototype.draw = function(context) {
  if (debug.do_draw('move')) {
    context.fillText(this.state, this.creature.x - 15, this.creature.y + 25);
  }

  global_config.amok.display && context.drawImage(this.icon, this.creature.x + this.offset_x, this.creature.y + this.offset_y);
};

Amok.prototype.set_level = function(level) {
  this.level = level;
};

Amok.prototype.on_kill = function() {
  this.target = null;
};

Amok.prototype.on_not_in_range = function() {
  this.creature.driver.run();
};

Amok.prototype.clear = function() {
  this.target = null;
  this.destination = null;
};

// Check if divider'th frame
Amok.prototype.df = function(frame,divider) {
  return (frame % divider) === 0;
};

Amok.prototype.update = function(frame) {
  if (this.target && this.target.life <= 0) {
    this.target = null;
  }
  // search nearest bot
  // if found set as target
  if (this.df(frame, 12) && !this.target) {
    // console.log("Szukam celu",this.creature);
    this.target = this.level.nearest_soldier(this.creature.x,this.creature.y, 
      { 
        // only_visible: true, 
        // skip: this.creature,
        // max_distance: this.creature.sight,
        // opponents: this.creature.opponents,
      }
    );
    // console.log("Znalazlem cel",this.target);
    if (this.target) {
      this.creature.driver.set_seeker(this.target);
    } else {
      // this.creature.driver.set_wanderer();
    }
  }

  // check if target still visible
  if (this.df(frame, 13) && this.target) {
    var in_line_of_view = this.level.creatures_visible(this.creature, this.target);
    var square_distance = Math.square_distance(this.creature.x, this.creature.y, this.target.x, this.target.y);
    var square_sight = Math.pow(this.creature.sight,2);
    if (square_distance > square_sight || !in_line_of_view) {
      this.destination = [this.target.x, this.target.y];
      this.target = null;
      this.creature.driver.set_runner(this.destination);
    }
  }
};

Amok.prototype.on_collisions = function() {
  this.clear();
  this.creature.a += Math.PI/2;
  this.collisions_counter--;
  if (!this.collisions_counter) {
    this.creature.driver.set_looker();
    this.collisions_counter = this.max_collisions;
  }
};

Amok.prototype.on_arrived = function() {
  this.destination = null;
  this.creature.driver.set_wanderer();
};

// Callback na bycie zaatakowanym
Amok.prototype.on_attacked = function(attacker) {
  if (!this.target) {
    this.target = attacker;
    this.creature.driver.set_seeker(attacker);
  }
};

// Callback na uslyszenie halasu
Amok.prototype.on_noise = function(x,y) {
  if (!this.target) {
    this.destination = [x, y];
    this.creature.driver.set_runner(this.destination);
  }
};

// Klasa odpowiedzialna na wyzej-poziomowe AI
// Przyjacielski - tj. nie atakuje gracza
function Friendly(creature,level) {
  this.creature = creature;
  this.level = level;

  this.target = null;
  this.state = 'friendly';
  this.mode = '';

  this.max_collisions = 5;
  this.collisions_counter = this.max_collisions;
  this.path = [];
  this.path_step = 0;

  this.icon = Image.from_src(global_config.friendly.mini_icon_src);
  this.offset_x = global_config.friendly.map_offset_x;
  this.offset_y = global_config.friendly.map_offset_y;
}

Friendly.prototype.set_mode = function(mode,params) {
  this.mode = mode;
  this.creature.driver.set_wanderer();
  if (mode === 'cruiser') {
    this.creature.driver.set_cruiser( [params.x, params.y], params.r );
  } else if (mode === 'pathfinder') {
    this.on_arrived = this.pathfinder_on_arrived;
    this.path = params;
    var dest = [this.path[0].x, this.path[0].y];
    this.creature.driver.set_walker(dest);
  } else if (mode === 'amok') {
    this.creature.commander = this.creature.amok;
  } else if (mode === 'stander') {
    this.creature.walk_speed = 0;
    this.creature.run_speed = 0;
    this.creature.driver.set_stander();
  }
};

Friendly.prototype.pathfinder_on_arrived = function() {
  if (this.path[this.path_step].next !== undefined) {
    this.path_step = this.path[this.path_step].next;
    var dest = [this.path[this.path_step].x, this.path[this.path_step].y];
    this.creature.driver.set_walker(dest);
  } else {
    var dest = [this.path[this.path_step].x, this.path[this.path_step].y];
    var radius = this.path[this.path_step];
    this.creature.driver.set_cruiser( dest, radius );
  }
};

Friendly.prototype.draw = function(context) {
  if (this.mode == 'pathfinder') {
    if (debug.do_draw('move')) {
      var prev = this.path[0];
      var step = 1;
      var visited = [];
      var next;
      while (next = this.path[step]) {
        context.fillStyle = "#000";
        context.strokeStyle = "#f00";
        context.beginPath();
        context.dashedLine(prev.x,prev.y,next.x,next.y);
        context.closePath();
        context.stroke();
        prev = next;
        if (next.next === undefined) {
          break;
        }
        if (!visited[step]){
          visited[step] = 0;
        }
        visited[step] += 1;
        if (visited[step] == 2) {
          break;
        }
        step = next.next;
      }
    }
  }
  if (debug.do_draw('move')) {
    context.fillText(this.state, this.creature.x - 15, this.creature.y + 25);
  }

  global_config.friendly.display && context.drawImage(this.icon, this.creature.x + this.offset_x, this.creature.y + this.offset_y);
};

Friendly.prototype.set_level = function(level) {
  this.level = level;
};

Friendly.prototype.on_kill = function() {
  this.target = null;
};

Friendly.prototype.on_not_in_range = function() {
  this.creature.driver.run();
};

Friendly.prototype.clear = function() {
  this.target = null;
  this.destination = null;
};

// Check if divider'th frame
Friendly.prototype.df = function(frame,divider) {
  return (frame % divider) === 0;
};

Friendly.prototype.update = function(frame) {
  if (this.target && this.target.life <= 0) {
    this.target = null;
  }
  // search nearest bot
  // if found set as target
  if (this.df(frame, 12) && !this.target) {
    // console.log("Szukam celu",this.creature);
    this.target = this.level.nearest_creature(this.creature.x,this.creature.y, 
      { only_visible: true, 
        skip: this.creature,
        max_distance: this.creature.sight,
        opponents: this.creature.opponents,
      }
    );

    // console.log("Znalazlem cel",this.target);
    if (this.target) {
      this.creature.driver.set_seeker(this.target);
    } else {
      // this.creature.driver.set_wanderer();
    }
  }

  // check if target still visible
  if (this.df(frame, 13) && this.target) {
    var in_line_of_view = this.level.creatures_visible(this.creature, this.target);
    var square_distance = Math.square_distance(this.creature.x, this.creature.y, this.target.x, this.target.y);
    var square_sight = Math.pow(this.creature.sight,2);
    if (square_distance > square_sight || !in_line_of_view) {
      this.destination = [this.target.x, this.target.y];
      this.target = null;
      this.creature.driver.set_runner(this.destination);
    }
  }
};

Friendly.prototype.on_collisions = function() {
  this.clear();
  this.creature.a += Math.PI/2;
  this.collisions_counter--;
  if (!this.collisions_counter) {
    this.creature.driver.set_looker();
    this.collisions_counter = this.max_collisions;
  }
};

Friendly.prototype.on_arrived = function() {
  this.destination = null;
  this.creature.driver.set_wanderer();
};

// Callback na bycie zaatakowanym
Friendly.prototype.on_attacked = function(attacker) {
  if (!this.target && !(attacker instanceof Soldier) ) {
    this.target = attacker;
    this.creature.driver.set_seeker(attacker);
  }
};

// Callback na uslyszenie halasu
Friendly.prototype.on_noise = function(x,y) {
  if (!this.target) {
    this.destination = [x, y];
    this.creature.driver.set_runner(this.destination);
  }
};

// Klasa odpowiedzialna na za sterowanie zolnierzami zgodnie z zyczeniami gracza
// ma mniej logiki niz klasa Commander'a
function Executor(creature,level) {
  this.creature = creature;
  this.level = level;

  this.target = null;
  this.destination = null;
  this.state = 'executor';

  this.icon = Image.from_src(global_config.executor.mini_icon_src);
  this.offset_x = global_config.executor.map_offset_x;
  this.offset_y = global_config.executor.map_offset_y;
}

Executor.prototype.draw = function(context) {
  // name
  if (debug.do_draw('move')) {
    context.fillText(this.state, this.creature.x - 15, this.creature.y + 25);
  }

  global_config.executor.display && context.drawImage(this.icon, this.creature.x + this.offset_x, this.creature.y + this.offset_y);
};

Executor.prototype.set_level = function(level) {
  this.level = level;
};

Executor.prototype.on_kill = function() {
  this.target = null;
  if (this.destination) {
    this.creature.driver.set_runner(this.destination);
  }
};

Executor.prototype.on_not_in_range = function() {
  this.target = null;
};

Executor.prototype.clear = function() {
  this.target = null;
  this.destination = null;
};

Executor.prototype.update = function(frame) {
  if (this.target && this.target.life <= 0) {
    this.target = null;
  }
  if (!(this.target || this.destination)) {
    this.clear();
    this.creature.driver.set_stander();
  }
};

Executor.prototype.set_target = function(target) {
  if (target instanceof Soldier || target.commander.state == 'friendly') {
  } else {
    this.target = target;
    this.destination = null;
    this.creature.driver.set_seeker(this.target);
  }
};

Executor.prototype.stop = function() {
  this.clear();
  this.creature.driver.set_stander();
};

Executor.prototype.set_destination = function(x,y) {
  // sprawdzamy czy punkt jest dostepny
  this.destination = [x, y];
  this.target = null;
  this.creature.driver.set_runner(this.destination);
};

Executor.prototype.on_arrived = function() {
  this.clear();
  this.creature.driver.set_stander();
};

Executor.prototype.on_collisions = function(type, creature) {
  // this.clear();
  if (type === 2) {
    if (creature instanceof Soldier || creature.commander.state == 'friendly' ) {
    } else {
      this.target = creature;
    }
  }
  if (type === 1) {
    this.stop();
  }
  // this.creature.driver.set_stander();
};

// Callback na bycie zaatakowanym
Executor.prototype.on_attacked = function(attacker) {
  if (!this.target && !this.destination) {
    if (attacker instanceof Soldier || attacker.commander.state == 'friendly') {
    } else {
      this.target = attacker;
    }
  }
};

// Klasa odpowiedzialna na za sterowanie zolnierzami zgodnie z zyczeniami gracza
// ma mniej logiki niz klasa Commander'a
function Defender(creature,level) {
  this.creature = creature;
  this.level = level;

  this.target = null;
  this.destination = null;
  this.state = 'defender';

  this.icon = Image.from_src(global_config.defender.mini_icon_src);
  this.offset_x = global_config.defender.map_offset_x;
  this.offset_y = global_config.defender.map_offset_y;
}

Defender.prototype.draw = function(context) {
  // name
  if (debug.do_draw('move')) {
    context.fillText(this.state, this.creature.x - 15, this.creature.y + 25);
  }

  global_config.defender.display && context.drawImage(this.icon, this.creature.x + this.offset_x, this.creature.y + this.offset_y);
};

Defender.prototype.set_level = function(level) {
  this.level = level;
};

Defender.prototype.on_kill = function() {
  this.target = null;
  this.destination && this.set_destination(this.destination[0],this.destination[1]);
};

Defender.prototype.on_not_in_range = function() {
  this.target = null;
};

Defender.prototype.clear = function() {
  this.target = null;
};

Defender.prototype.update = function(frame) {
  if (this.target && this.target.life <= 0) {
    this.target = null;
  }
  var weapon = this.creature.natural_weapon || this.creature.weapon;
  if (!this.target) {
    var target = this.level.nearest_creature(this.creature.x,this.creature.y, 
        { only_visible: true, 
          skip: this.creature,
          max_distance: weapon.range,
        }
    );
    this.target = target; // may be null
  }
};

Defender.prototype.set_target = function(target) {
  if (target instanceof Soldier || target.commander.state == 'friendly') {
  } else {
    this.target = target;
    this.creature.driver.set_seeker(this.target);
  }
};

Defender.prototype.stop = function() {
  this.creature.driver.stop();
};

Defender.prototype.set_destination = function(x,y) {
  // sprawdzamy czy punkt jest dostepny
  this.destination = [x, y];
  this.creature.driver.set_runner(this.destination);
};

Defender.prototype.on_arrived = function() {
  this.destination = null;
  this.creature.driver.set_stander();
};

Defender.prototype.on_collisions = function(type) {
  this.clear();
  if (type === 1) {
    this.creature.driver.set_stander();
  }
};

// Callback na bycie zaatakowanym
Defender.prototype.on_attacked = function(attacker) {
  if (!this.target && !this.destination) {
    if (attacker instanceof Soldier || attacker.commander.state == 'friendly') {
    } else {
      this.target = attacker;
      this.destination = null;
      this.creature.driver.set_seeker(attacker);
    }
  }
};
