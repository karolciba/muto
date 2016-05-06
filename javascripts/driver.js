function Driver(creature, level) {
  this.creature = creature;
  this.level = level;
  this.target = null;
  this.destination = null;
  this.test_time_offset = Math.random_range(0,5);

  this.state = "";
  this.unfreeze_state = "";
  this.unfreeze_callback = null;
  this.unfreeze_speed = 0;

  this.max_rotation = Math.PI/4;
  this.ray_length = creature.radius * 1.2;

  this.leftmost_whisker_angle = Math.PI/3;
  this.leftmost_whisker_length = creature.radius * 1.2;

  this.left_whisker_angle = Math.PI/6;
  this.left_whisker_length = creature.radius * 1.2;

  this.right_whisker_angle = -Math.PI/6;
  this.right_whisker_length = creature.radius * 1.2;

  this.rightmost_whisker_angle = -Math.PI/3;
  this.rightmost_whisker_length = creature.radius * 1.2;

  this.looker_whisker_length = creature.radius * 1.2;
  this.looker_side_whiskers = 4;
  this.looker_whisker_angle = Math.PI/3;

  this.looker_whisker_radius_modifier = this.creature.radius;

  this.update = this.update_wanderer;

  this.bounce_angle = 0;
  this.bounce_damp = 0.95;
  this.bounce_delta = Math.PI/36;

  this.cruise_radius = 100;
}

Driver.prototype.set_level = function(level) { 
  this.level = level;
};

Driver.prototype.update_wanderer = function(frame) {
  // if ((frame + this.test_time_offset) %  6) return;
  var wanderer = this.wanderer();
  var avoidance = this.side_whiskers_avoidance(this.creature.a + wanderer);
  var bounce = this.bounce();
  this.creature.a = this.creature.a + wanderer + avoidance + bounce;

  if (debug.do_draw('steer')) {
    x = this.creature.x + Math.sin(this.creature.a) * 24 * 1;
    y = this.creature.y + Math.cos(this.creature.a) * 24 * 1;
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 3;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(this.creature.a + avoidance) * 24 * 1;
    y = this.creature.y + Math.cos(this.creature.a + avoidance) * 24 * 1;
    context.fillStyle = '#f00';
    context.strokeStyle = '#f00';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(this.creature.a + wanderer) * 24 * 1;
    y = this.creature.y + Math.cos(this.creature.a + wanderer) * 24 * 1;
    context.fillStyle = '#00f';
    context.strokeStyle = '#00f';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  }
};

Driver.prototype.update_seeker = function(frame) {
  // if ((frame + this.test_time_offset) %  6) return;
  var seeker = this.seeker();
  var avoidance = this.side_whiskers_avoidance(seeker, this.target);
  var bounce = this.bounce();
  this.creature.a = seeker + avoidance + bounce;

  if (debug.do_draw('steer')) {
    x = this.creature.x + Math.sin(this.creature.a) * 24 * 1;
    y = this.creature.y + Math.cos(this.creature.a) * 24 * 1;
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 3;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(seeker + avoidance) * 24 * 1;
    y = this.creature.y + Math.cos(seeker + avoidance) * 24 * 1;
    context.fillStyle = '#f00';
    context.strokeStyle = '#f00';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(seeker) * 24 * 1;
    y = this.creature.y + Math.cos(seeker) * 24 * 1;
    context.fillStyle = '#00f';
    context.strokeStyle = '#00f';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  }
};

Driver.prototype.update_walker = function(frame) {
  // if (frame %  6) return;
  var walker = this.walker();
  var bounce = this.bounce();
  var avoidance = this.walker_avoidance(walker + bounce, this.destination);
  this.creature.a = walker + avoidance + bounce;

  if (debug.do_draw('steer')) {
    x = this.creature.x + Math.sin(this.creature.a) * 24 * 1;
    y = this.creature.y + Math.cos(this.creature.a) * 24 * 1;
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 3;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(walker + avoidance) * 24 * 1;
    y = this.creature.y + Math.cos(walker + avoidance) * 24 * 1;
    context.fillStyle = '#f00';
    context.strokeStyle = '#f00';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(walker) * 24 * 1;
    y = this.creature.y + Math.cos(walker) * 24 * 1;
    context.fillStyle = '#00f';
    context.strokeStyle = '#00f';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  }
};

Driver.prototype.update_cruiser = function(frame) {
  var wanderer = this.wanderer();
  var bounce = this.bounce();
  var cruise = this.cruise( this.creature.a + wanderer);

  var avoidance = this.side_whiskers_avoidance(cruise);

  this.creature.a = cruise + avoidance;

  if (debug.do_draw('steer')) {
    x = this.creature.x + Math.sin(this.creature.a) * 24 * 1;
    y = this.creature.y + Math.cos(this.creature.a) * 24 * 1;
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 3;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(cruise) * 24 * 1;
    y = this.creature.y + Math.cos(cruise) * 24 * 1;
    context.fillStyle = '#f00';
    context.strokeStyle = '#f00';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;

    x = this.creature.x + Math.sin(avoidance) * 24 * 1;
    y = this.creature.y + Math.cos(avoidance) * 24 * 1;
    context.fillStyle = '#00f';
    context.strokeStyle = '#00f';
    context.beginPath();
    context.moveTo(this.creature.x, this.creature.y);
    context.lineTo(x, y);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;

    context.fillStyle = "#000";
    context.strokeStyle = "#f00";
    context.beginPath();
    context.dashedLine(this.creature.x, this.creature.y, this.destination[0], this.destination[1]);
    context.closePath();
    context.stroke();
  }
};

Driver.prototype.update_stander = function(frame) {
  // do nothing, just stand
};

// Stoi i rozglada sie czy ma kierunek w ktorym moze isc
Driver.prototype.update_looker = function(frame) {
  // if ((frame + this.test_time_offset) %  6) return;
  var looker = this.looker();
  // this.creature.a = looker;
};

Driver.prototype.freeze = function() {
  this.unfreeze_state = this.state;
  this.unfreeze_callback = this.update;
  this.unfreeze_speed = this.creature.speed;
  this.state = 'freeze';
  this.creature.speed = 0;
  this.update = function() {};
};

Driver.prototype.unfreeze = function() {
  if (this.state === 'freeze') {
    this.state = this.unfreeze_state;
    this.update = this.unfreeze_callback;
    this.creature.speed = this.unfreeze_speed;
  }
};

Driver.prototype.set_wanderer = function() {
  if (this.state === 'freeze') return;
  // console.log("Driver kreatury ustawiam wanderer", this.creature);
  this.target = null;
  this.bounce_angle = 0;
  this.creature.speed = this.creature.walk_speed;
  if (this.creature.speed == 0) {
    return this.set_stander();
  }
  this.update = this.update_wanderer;
  this.state = 'wanderer';
};

Driver.prototype.set_seeker = function(target) {
  if (this.state === 'freeze') return;
  this.target = target;
  this.bounce_angle = 0;
  this.collisions_counter = this.max_collisions;
  this.creature.speed = this.creature.run_speed;
  if (this.creature.speed == 0) {
    return this.set_stander();
  }
  // console.log("Driver kreatury ustawiam target", this.creature, this.target);
  this.update = this.update_seeker;
  this.state = 'seeker';
};

Driver.prototype.set_walker = function(destination) {
  if (this.state === 'freeze') return;
  this.destination = destination;
  this.bounce_angle = 0;
  this.collisions_counter = this.max_collisions;
  this.creature.speed = this.creature.walk_speed;
  if (this.creature.speed == 0) {
    return this.set_stander();
  }
  // console.log("Driver kreatury ustawiam destination", this.creature, this.destination);
  this.update = this.update_walker;
  this.update();
  this.state = 'walker';
};

Driver.prototype.set_runner = function(destination) {
  if (this.state === 'freeze') return;
  this.destination = destination;
  this.bounce_angle = 0;
  this.creature.speed = this.creature.run_speed;
  if (this.creature.speed == 0) {
    return this.set_stander();
  }
  this.update = this.update_walker;
  this.update();
  this.state = 'runner';
};

Driver.prototype.set_cruiser = function(destination, radius) {
  if (this.state === 'freeze') return;
  this.destination = destination;
  this.cruise_radius = radius;
  this.bounce_angle = 0;
  this.creature.speed = this.creature.walk_speed;
  if (this.creature.speed == 0) {
    return this.set_stander();
  }
  this.update = this.update_cruiser;
  // this.update();
  this.state = 'cruiser';
};

Driver.prototype.set_stander = function() {
  if (this.state === 'freeze') return;
  this.creature.speed = 0;
  this.creature.a = Math.PI/2;
  this.update = this.update_stander;
  this.state = 'stander';
};

Driver.prototype.set_looker = function() {
  if (this.state === 'freeze') return;
  this.creature.speed = 0;
  this.bounce_angle = 0;
  this.update = this.update_looker;
  this.state = 'looker';
};

Driver.prototype.stop = function() {
  this.creature.speed = 0;
};

// ruszy sie jesli stal
Driver.prototype.go = function() {
  this.creature.speed = this.creature.walk_speed;
};

// ruszy sie jesli stal
Driver.prototype.run = function() {
  this.creature.speed = this.creature.run_speed;
};

Driver.prototype.bounce = function() {
  this.bounce_angle *= this.bounce_damp;
  if (Math.abs(this.bounce_angle) < this.bounce_delta) {
    this.bounce_angle = 0;
  }
  return this.bounce_angle;
};

// Logika podazania do celu
Driver.prototype.seeker = function() {
  var x = this.target.x - this.creature.x;
  var y = this.target.y - this.creature.y;

  var a = Math.atan2(x,y);

  var collision_distance = Math.sqrt( x * x + y * y ) - this.creature.radius - this.target.radius;
  if (collision_distance <= this.creature.speed) {
    this.creature.speed = collision_distance*0.95;
  }

  // console.log("Seeker "+x+","+y+" "+a);

  return a;
};

Driver.prototype.cruise = function(a) {
  var x = this.destination[0] - this.creature.x;
  var y = this.destination[1] - this.creature.y;

  var square_distance = x * x + y * y;
  var distance = Math.sqrt(square_distance);

  var alfa = Math.atan2(x,y);

  if (distance > this.cruise_radius) {
    return alfa;
  } else {
    return a;
  }

  // var coef = (distance - this.cruise_radius)/distance;
  // if (coef < 0) {
  //   coef = 0;
  // }

  return a * (1 - coef) + alfa * coef;
};

Driver.prototype.walker = function() {
  var x = this.destination[0] - this.creature.x;
  var y = this.destination[1] - this.creature.y;

  var square_distance = x * x + y * y;
  if ( square_distance < this.creature.speed * this.creature.speed) {
    this.creature.speed = Math.sqrt(square_distance);
    if ( square_distance < this.creature.radius * this.creature.radius) {
      this.creature.commander.on_arrived();
    }
  }

  var a = Math.atan2(x,y);

  // console.log("Seeker "+x+","+y+" "+a);

  return a;
};

// Logika poruszania sie bez celu - losowo modyfikuje wektor poruszania sie
Driver.prototype.wanderer = function() {
  return Math.birandom()*Math.birandom() * this.max_rotation;
};

Driver.prototype.whisker_collision = function(a, length, skip, radius_modifier) {
  var x0 = this.creature.x;
  var y0 = this.creature.y;
  var x1 = this.creature.x + Math.sin(a) * length;
  var y1 = this.creature.y + Math.cos(a) * length;

  var barrier_intersect = this.level.mesh.barrier_intersect(x0,y0,x1,y1);

  var creature_intersect = this.level.creature_intersect(this.creature, x0,y0,x1,y1, skip, radius_modifier);
  var intersect = barrier_intersect || creature_intersect;

  if (debug.do_draw('whiskers')) {
    var context = iface.context;
    context.fillStyle = intersect ? '#f00' : '#0f0';
    context.strokeStyle = intersect ? '#f00' : '#0f0';
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineWidth = 2;
    context.closePath();
    context.stroke();
    context.lineWidth = 1;
  }

  return intersect;
};

Driver.prototype.left_side_whisker_collision = function(a, length, skip, radius_modifier) {
  var dx = Math.sin(a + Math.PI/2) * this.creature.radius;
  var dy = Math.cos(a + Math.PI/2) * this.creature.radius;
  var x0 = this.creature.x + dx;
  var y0 = this.creature.y + dy;
  var x1 = this.creature.x + Math.sin(a) * length + dx;
  var y1 = this.creature.y + Math.cos(a) * length + dy;

  var barrier_intersect = this.level.mesh.barrier_intersect(x0,y0,x1,y1);
  var creature_intersect = this.level.creature_intersect(this.creature, x0,y0,x1,y1, skip, radius_modifier);
  var intersect = barrier_intersect || creature_intersect;

  if (debug.do_draw('whiskers')) {
    var context = iface.context;
    context.fillStyle = intersect ? '#f00' : '#0f0';
    context.strokeStyle = intersect ? '#f00' : '#0f0';
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineWidth = 2;
    context.closePath();
    context.stroke();
    context.lineWidth = 1;
  }

  return intersect;
};

Driver.prototype.right_side_whisker_collision = function(a, length, skip, radius_modifier) {
  var dx = Math.sin(a - Math.PI/2) * this.creature.radius;
  var dy = Math.cos(a - Math.PI/2) * this.creature.radius;
  var x0 = this.creature.x + dx;
  var y0 = this.creature.y + dy;
  var x1 = this.creature.x + Math.sin(a) * length + dx;
  var y1 = this.creature.y + Math.cos(a) * length + dy;

  var barrier_intersect = this.level.mesh.barrier_intersect(x0,y0,x1,y1);
  var creature_intersect = this.level.creature_intersect(this.creature, x0,y0,x1,y1, skip, radius_modifier);
  var intersect = barrier_intersect || creature_intersect;

  if (debug.do_draw('whiskers')) {
    var context = iface.context;
    context.fillStyle = intersect ? '#f00' : '#0f0';
    context.strokeStyle = intersect ? '#f00' : '#0f0';
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineWidth = 2;
    context.closePath();
    context.stroke();
    context.lineWidth = 1;
  }

  return intersect;
};

Driver.prototype.looker = function() {
  // this.looker_whisker_angle = -Math.PI/3;
  // this.looker_whisker_length = creature.radius * 1.2;
  
  // var test_angle = this.creature.a + i * this.looker_whisker_angle;
  var test_angle = this.creature.a;
  var bounce = this.bounce();

  test_angle += bounce;
  var start_angle = test_angle;

  var i = 0;
  while ( i <= this.looker_side_whiskers ) {

    // var collision = this.whisker_collision( test_angle, this.looker_whisker_length, null,  this.looker_whisker_radius_modifier );
    // if (!collision) {
    //   this.creature.a = test_angle;
    //   this.set_wanderer();
    //   return;
    // }

    if (!this.side_whiskers_avoidance(test_angle)) {
      this.creature.a = test_angle;
      this.set_wanderer();
      return;
    }

    i *= -1;
    if (i >= 0) {
      test_angle = start_angle + i * this.looker_whisker_angle;
      i++;
    } else {
      test_angle = start_angle + i * this.looker_whisker_angle;
    }

  }
};

Driver.prototype.side_whiskers_avoidance = function(a, skip) {
  var direct, left, right, leftmost, rightmost;

  direct = this.whisker_collision(a,this.ray_length, skip);
  left = this.left_side_whisker_collision(a, this.left_whisker_length, skip, 5);
  right = this.right_side_whisker_collision(a, this.right_whisker_length, skip, 5);

  if (
      !direct && !left && !right
     ) {
    return 0;
  }

  if (left) {
    return this.rightmost_whisker_angle;
  }

  if (right) {
    return this.leftmost_whisker_angle;
  }

  if (direct) {
    if (!this.avoidance_direction) {
      this.avoidance_direction = Math.random_range(0,1);
    }
    return this.avoidance_direction ? this.leftmost_whisker_angle : this.rightmost_whisker_angle;
  }

  this.avoidance_direction = null;

  // test against creatures
  return 0;
};


// Logika omijania przeszkod
Driver.prototype.walker_avoidance = function(a, destination){

  var dx = destination[0] - this.creature.x;
  var dy = destination[1] - this.creature.y;
  var sq_distance = dx * dx + dy * dy;
  if (this.ray_length * this.ray_length >= sq_distance) {
    return 0;
  }

  return this.side_whiskers_avoidance(a,destination);
};
