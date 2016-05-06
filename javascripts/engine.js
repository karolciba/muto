function Engine(map) {
  this.map = map;
  this.framerate = 1;//24;
  this.framerate = 24;//24;
  this.interval = 1000/this.framerate;
  this.running = false;
  this.next_loop = (new Date()).getTime();
  this.next_draw = (new Date()).getTime();
  this.frame = 0;
  this.thread_id = null;
  this.cyclic_index = 0;

  this.callbacks_at = [];
}

Engine.prototype.start = function() {
  debug.debug("Engine.start");
  if (this.running === false) {
    debug.debug("Engine.start is stopped - running");
    this.running = true;
    this.tick();
    // this.draw();
  }
};

Engine.prototype.stop = function() {
  debug.debug("Engine.stop");
  if (this.running === true) {
    this.running = false;
  }
};

Engine.prototype.next = function() {
  this.tick();
  // this.draw();
};

Engine.prototype.draw = function() {
  if (!this.running) { return; }
  
    now = (new Date()).getTime();
    if (now > this.next_draw) {
      debug.trace("Frame " + this.frame);
      // skipujemy w rownych ocinkach czasu
      while ((this.next_draw += this.interval) < now) {
        debug.trace("Skip frame");
      }

      debug.fps_touch();

      // stats_ms_draw.begin();
      debug.timer_start('draw');
      // rysowanie mapy
      this.map.draw();
      debug.timer_stop('draw');
      // stats_ms_draw.end();
  }

  requestAnimationFrame( (function(engine) {
    return function() {
      engine.draw();
    };
  }(this)), 10);
};

Engine.prototype.has_time = function() {
  return engine.stepped || Date.now() < this.next_loop;
};

Engine.prototype.add_callback_at = function(frame, callback) {
  if (!this.callbacks_at[frame]) {
    this.callbacks_at[frame] = [];
  }
  this.callbacks_at[frame].push(callback);
};

Engine.prototype.timeout_callback = function(frames, callback) {
  var frame = this.frame + frames;
  if (!this.callbacks_at[frame]) {
    this.callbacks_at[frame] = [];
  }
  this.callbacks_at[frame].push(callback);
};

Engine.prototype.run_callbacks_at_frame = function(frame) {
  var callbacks = this.callbacks_at[frame];
  if (callbacks) {
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i](); // run callback
    }
    this.callbacks_at[frame] = null;
  }
};

Engine.prototype.clear_callbacks = function() {
  this.callbacks_at = [];
};

Engine.prototype.tick = function() {
  // debug.log("Engine.tick");
  
  if (!this.running) { return; }

  // try {
    var now = Date.now();
    if (now > this.next_loop) {
      debug.trace("Frame " + this.frame);
      // skipujemy w rownych ocinkach czasu
      while ((this.next_loop += this.interval) < now) {
        debug.trace("Skip frame");
      }

      debug.frames_touch();

      // stats_fps.begin();
      debug.tick(this.frame);
      // podbijamy licznik klatek
      this.frame += 1;

      this.run_callbacks_at_frame(this.frame);

      // stats_ms_draw.begin();
      debug.timer_start('draw');
      // rysowanie mapy
      this.map.draw();
      debug.timer_stop('draw');
      // stats_ms_draw.end();

      // stats_ms_tick.begin();
      debug.timer_start('tick'); 
      // ticki przeliczajace stan
      this.map.tick(this.frame);
      debug.timer_stop('tick');
      // stats_ms_tick.end();
      
      debug.timer_start('move');
      // przesuwanie obiektow
      this.map.move();
      debug.timer_stop('move');

      debug.timer_start('steer');
      // przesuwanie obiektow
      // this.map.level.soldiers
      for (var i = 0; i < this.map.level.soldiers.length; i++) {
        this.map.level.soldiers[i].steering(this.frame);
      }
      var count = this.map.level.creatures.length;
      for (var i = 0; i < count; i++) {
        if (!engine.stepped && Date.now() > this.next_loop) {
          debug.count('sc',1);
          break;
        }
        if (this.cyclic_index >= count) {
          this.cyclic_index = 0;
        }
        this.map.level.creatures[this.cyclic_index].steering(this.frame);
        this.cyclic_index++;
      }
      debug.timer_stop('steer');

      // stats_fps.end();

      debug.count("Mean loop time", (new Date()).getTime() - now);
    }
  // } catch (err) {
  //   console.log("Z petli loopa", err);
  // }


  requestAnimationFrame( (function(engine) {
    return function() {
      engine.tick();
    };
  }(this)), 10);
};

requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func) { setTimeout(func, 10); };
requestTick = function(func) { setTimeout(func, 10); };
