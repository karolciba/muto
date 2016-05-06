function Sprite() {
  this.state = 0;
  this.frame = 0;
  this.step = 1;

  this.image_src = null;
  this.image = null;

  this.states = [];
  this.states_map = [];
  this.states_map_x = [];
  this.states_map_y = [];
  this.states_map_ox = [];
  this.states_map_oy = [];
  this.states_steps = [];
}

Sprite.prototype.set_image_src = function(image_src) {
  if (image_src && image_src !== "") {
    this.image_src = image_src;
    this.image = Image.from_src(image_src);
  }
};

Sprite.prototype.set_size = function(width, height) {
  this.width = width;
  this.height = height;
  this.width_offset = width/2;
  this.height_offset = height/2;
};

Sprite.prototype.fps = function(fps) {
  this.step = fps/24;
};

Sprite.prototype.define = function(row, name, frames, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || row * this.height;
  var ox = options.ox || 0;
  var oy = options.oy || 0;
  
  if (options.fps) {
    this.states_steps[row] = options.fps/24;
  }

  debug.trace("Sprite - define new state", this, name, frames, x, y, ox, oy);

  this.states_map[name] = row;
  this.states_map[row] = name;
  this.states_map_x[row] = x;
  this.states_map_y[row] = y;
  this.states_map_ox[row] = ox;
  this.states_map_oy[row] = oy;
  this.states[row] = frames;
};

Sprite.prototype.get_clone = function() {
  var sprite = new Sprite();
  sprite.image = this.image;
  sprite.set_size(this.width, this.height);
  sprite.states = this.states;
  sprite.states_map = this.states_map;
  sprite.states_map_x = this.states_map_x;
  sprite.states_map_y = this.states_map_y;
  sprite.states_map_ox = this.states_map_ox;
  sprite.states_map_oy = this.states_map_oy;
  sprite.states_steps = this.states_steps;
  sprite.step = this.step;
  return sprite;
};

Sprite.prototype.set = function(state) {
  debug.trace("Setting new state", this, state);
  this.state = this.states_map[state];
  if (this.state === void 0 || !state) {
    console.log("Proba ustawienia blednego state: "+state, this);
    var states = "";
    for (var i = 0; i < this.states_map.length; i++) {
      states = states + " " + this.states_map[i];
    }
    console.warn(printStackTrace());
    alert("Proba ustawienia blednego state: "+state+" sprawdz w konsoli o jaki sprite chodzi " + states);
  }
  this.frame = 0;
};

// Tries to preserve frame
Sprite.prototype.change = function(state) {
  this.state = this.states_map[state];
};

Sprite.prototype.rewind = function() {
  debug.trace("Rewind", this);
  this.frame = 0;
};

Sprite.prototype.draw_frame = function(context, x, y, frame) {
  if (!this.image) {
    return;
  }

  x = x - this.width_offset;
  x = Math.round(x);
  y = y - this.height_offset;
  y = Math.round(y);

  var frame_x = frame * this.width;// + this.states_map_x[this.state] + this.states_map_ox[this.state];
  var frame_y = this.states_map_y[this.state];// + this.states_map_oy[this.state];

  try {
    context.drawImage(this.image, 
      frame_x, frame_y, 
      this.width, this.height, 
      x - this.states_map_ox[this.state], y - this.states_map_oy[this.state], 
      this.width, this.height);
  } catch (e) {
    console.log(e,this.image, 
      frame_x, frame_y, 
      this.width, this.height, 
      x, y, 
      this.width, this.height);
  }

  return true;
};

Sprite.prototype.draw_cycle = function(context, x, y) {
  ret = this.draw(context, x, y);
  if (!ret) {
    this.rewind();
  }
};

Sprite.prototype.redraw = function(context, x, y) {
  if (!this.image) {
    return;
  }

  if (debug.do_draw('state')) {
    context.fillStyle = '#fff';
    context.strokeStyle = '#000';
    var frame = Math.floor(this.frame);
    var frames = this.states[this.state];
    context.fillText( this.states_map[this.state] + "(" + frame +"/" + frames + ")", x - 15, y - 10);
  }

  debug.trace("Drawing sprite", this, x, y);
  if (this.frame >= this.states[this.state]) {
    this.frame = this.states[this.state] - 1;
  }

  x = x - this.width_offset;
  x = Math.round(x);
  y = y - this.height_offset;
  y = Math.round(y);

  // var frame_x = this.frame * this.width;
  // var frame_y = this.state * this.height;
  // var frame_x = Math.floor(this.frame) * this.width + this.states_map_x[this.state] + this.states_map_ox[this.state];
  // var frame_y = this.states_map_y[this.state] + this.states_map_oy[this.state];
  var frame_x = Math.floor(this.frame) * this.width + this.states_map_x[this.state];
  var frame_y = this.states_map_y[this.state];

    context.drawImage(this.image, 
        frame_x, frame_y, 
        this.width, this.height, 
        x - this.states_map_ox[this.state], y - this.states_map_oy[this.state], 
        this.width, this.height);

  // var step;
  // if (step = this.states_steps[this.state]) {
  //   this.frame += step;
  // } else {
  //   this.frame += this.step;
  // }
  // // zwraca liczbe pozostalych klatek do konca
  // // na tej podstawie kontroler moze dowiedziec sie
  // // ze sekwencja sie skonczyla i nalezy zaczac inna
  // return this.states[this.state] - this.frame;
};
Sprite.prototype.draw = function(context, x, y) {
  if (!this.image) {
    return;
  }

  if (debug.do_draw('state')) {
    context.fillStyle = '#fff';
    context.strokeStyle = '#000';
    var frame = Math.floor(this.frame);
    var frames = this.states[this.state];
    context.fillText( this.states_map[this.state] + "(" + frame +"/" + frames + ")", x - 15, y - 10);
  }

  debug.trace("Drawing sprite", this, x, y);
  if (this.frame >= this.states[this.state]) {
    this.frame = this.states[this.state] - 1;
  }

  x = x - this.width_offset;
  x = Math.round(x);
  y = y - this.height_offset;
  y = Math.round(y);

  // var frame_x = this.frame * this.width;
  // var frame_y = this.state * this.height;
  // var frame_x = Math.floor(this.frame) * this.width + this.states_map_x[this.state] + this.states_map_ox[this.state];
  // var frame_y = this.states_map_y[this.state] + this.states_map_oy[this.state];
  var frame_x = Math.floor(this.frame) * this.width + this.states_map_x[this.state];
  var frame_y = this.states_map_y[this.state];

    context.drawImage(this.image, 
        frame_x, frame_y, 
        this.width, this.height, 
        x - this.states_map_ox[this.state], y - this.states_map_oy[this.state], 
        this.width, this.height);

  var step;
  if (step = this.states_steps[this.state]) {
    this.frame += step;
  } else {
    this.frame += this.step;
  }
  // zwraca liczbe pozostalych klatek do konca
  // na tej podstawie kontroler moze dowiedziec sie
  // ze sekwencja sie skonczyla i nalezy zaczac inna
  return this.states[this.state] - this.frame;
};

