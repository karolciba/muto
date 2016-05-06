function Debug(console) {
  this.console = console;

  // this.log_level = 4;
  // this.log_level = 3;
  // this.log_level = 2;
  this.log_level = 1;
  // this.log_level = 0;

  this.draw_options = [ 'draw', 'mesh', 'life', 'stats', 'radius', 'sight', 'range', 'hearing', 'state', 'move', 'steer', 'whiskers', 'items', 'panels', 'mouse' ];
  this.draw_states = [];

  this.load();

  this.debug_div_name = "debug";

  this.counters = [];

  this.timers = [];
  this.timers_temp = [];
  this.fps_temp = 0;
  this.fps_time = 0;
  this.fps = 0;
  this.frames_temp = 0;
  this.frames_time = 0;
  this.frames = 0;
}

Debug.prototype.set_draw_option = function(option, state) {
  var index = this.draw_options.indexOf(option);

  this.draw_states[index] = state;
  this.local_storage_set("debug",this.draw_states);
};

Debug.prototype.get_draw_option = function(option) {
  var index = this.draw_options.indexOf(option);
  return this.draw_states[index];
};

Debug.prototype.toggle_draw_option = function(option) {
  var state = this.get_draw_option(option);
  this.set_draw_option(option, !state);
};

Debug.prototype.do_draw = function(option) {
  var draw = this.get_draw_option('draw');
  var opt = this.get_draw_option(option);
  return draw && opt;
};

Debug.prototype.load = function() {
  if (!localStorage.debug) {
    this.local_storage_set("debug", []);
  }
  this.draw_states = this.local_storage_get("debug");
};

Debug.prototype.local_storage_get = function(key) {
  return JSON.parse(localStorage[key]);
};

Debug.prototype.local_storage_set = function(key,value) {
  localStorage[key] = JSON.stringify(value);
};

Debug.prototype.log = function() {
  this.console && this.console.log.apply(this.console, arguments);
};

Debug.prototype.trace = function() {
  this.log_level === 0 && this.log.apply(null, arguments);
};

Debug.prototype.debug = function() {
  this.log_level <= 1 && this.log.apply(null, arguments);
};

Debug.prototype.info = function() {
  this.log_level <= 2 && this.log.apply(null, arguments);
};

Debug.prototype.warn = function() {
  this.log_level <= 3 && this.log.apply(null, arguments);
};

Debug.prototype.error = function() {
  this.log_level <= 4 && this.log.apply(null, arguments);
};

Debug.prototype.tick = function(frame) {
  if (frame % 24 === 0) {
    this.clear();
    this.print();
  }
};

Debug.prototype.count = function(name, value) {
  if (!this.counters[name]) {
    this.counters[name] = 0;
  }
  this.counters[name] += value;
};

Debug.prototype.clear_counters = function() {
  this.counters = {};
};

Debug.prototype.get_count = function(name) {
  return this.counters[name] || 0;
};

Debug.prototype.clear = function() {
  var debug_div = document.getElementById(this.debug_div_name);
  debug_div.innerHTML = "";
};

Debug.prototype.timer_start = function(name) {
  this.timers_temp[name] = (new Date()).getTime();
};

Debug.prototype.timer_stop = function(name) {
  var now = (new Date()).getTime();
  var diff = now - this.timers_temp[name];
  this.timers[name] = diff;
};

Debug.prototype.fps_touch = function() {
  var now = (new Date()).getTime();
  if (now - this.fps_time > 999) {
    this.fps = this.fps_temp;
    this.fps_temp = 0;
    this.fps_time = now;
  } else {
    this.fps_temp += 1;
  }
};
Debug.prototype.frames_touch = function() {
  var now = (new Date()).getTime();
  if (now - this.frames_time > 999) {
    this.frames = this.frames_temp;
    this.frames_temp = 0;
    this.frames_time = now;
  } else {
    this.frames_temp += 1;
  }
};

Debug.prototype.print = function(text) {
  this.clear();
  var key;
  var debug_div = document.getElementById(this.debug_div_name);
  for (key in this.counters) {
    debug_div.innerHTML += key + ": " + this.counters[key] + "<br/>";
  }

  var frames_text = "TPS [1/s]: " +debug.frames;
  var tick_text = "Tick [ms]: " +debug.timers.tick;
  var fps_text = "FPS [1/s]: " +debug.fps;
  var draw_text = "Draw [ms]: " +debug.timers.draw;
  var steer_text = "Steer [ms]: " +debug.timers.steer;
  var bots = "Bots: "+map.level.creatures.length;
  var sc = "SC: "+debug.get_count('sc'); // licznik zeskipowanych kolicji

  debug_div.innerHTML = frames_text + "<br/>" + tick_text + "</br>" + steer_text + "<br/>" + fps_text  + "<br/>" + draw_text + "<br/>" + bots + "<br/>" + sc;
  // this.clear_counters();

  if (this.do_draw('mouse')) {
    var mouse_state_text = "m_state: "+map.mouse_state;
    var mouse_pos_text = "m: "+map.mouse_x+" , "+map.mouse_y;
    var click_pos_text = "c: "+map.click_x+" , "+map.click_y;
    debug_div.innerHTML += "<br/>" + mouse_state_text + "<br/>" + mouse_pos_text + "<br/>" + click_pos_text;
  }
};

debug = new Debug(console);


window.addEventListener('load', function() {
  var debug_option = document.getElementById('debug_options');

  for (var i = 0; i< debug.draw_options.length; i++) {
    var option = debug.draw_options[i];
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "draw_"+option;
    checkbox.checked = debug.get_draw_option(option);
    checkbox.id = "draw_"+option;

    checkbox.addEventListener('click', 
      function(opt) {
        return function() {
          debug.toggle_draw_option(opt);
        }
      }(option)
    );

    var label = document.createElement('label');
    label.htmlFor = "draw_debug";
    label.appendChild(document.createTextNode(option+"?"));

    debug_option.appendChild(checkbox);
    debug_option.appendChild(label);

    var br = document.createElement('br');
    debug_option.appendChild(br);
  }

  var next_button = document.createElement('input');
  next_button.setAttribute('type','button');
  next_button.setAttribute('name','sal');
  next_button.setAttribute("value", ">>");
  next_button.addEventListener('click', function() {
    engine.running = true;
    engine.stepped = true;
    engine.next();
    engine.stepped = false;
    engine.running = false;
  });
  debug_option.appendChild(next_button);

        document.addEventListener("keydown", function(e) {
            if (e.keyCode === 188) {
              if (engine.running) {
                engine.stop();
              } else {
                engine.start();
              }
            } else if (e.keyCode === 190) {
              engine.running = true;
              engine.stepped = true;
              engine.next();
              engine.stepped = false;
              engine.running = false;
            }
          }, false);

  var pause_button = document.createElement('input');
  pause_button.setAttribute('type','button');
  pause_button.setAttribute('name','sal');
  pause_button.setAttribute("value", "||");
  pause_button.addEventListener('click', function() {
    if (engine.running) {
      engine.stop();
    } else {
      engine.start();
    }
  });
  debug_option.appendChild(pause_button);
  
  var clear_button = document.createElement('input');
  clear_button.setAttribute('type','button');
  clear_button.setAttribute('name','sal');
  clear_button.setAttribute("value", "delete savegame");
  clear_button.addEventListener('click', function() {
    delete localStorage.save;
  });
  debug_option.appendChild(clear_button);

  var kill_bots_button = document.createElement('input');
  kill_bots_button.setAttribute('type','button');
  kill_bots_button.setAttribute('name','sal');
  kill_bots_button.setAttribute("value", "kill bots");
  kill_bots_button.addEventListener('click', function() {
    var creatures = map.level.creatures;
    for (var i = 0; i < creatures.length; i++) {
      creatures[i].life = 0;
    }
  });
  debug_option.appendChild(kill_bots_button);

  var kill_soldiers_button = document.createElement('input');
  kill_soldiers_button.setAttribute('type','button');
  kill_soldiers_button.setAttribute('name','sal');
  kill_soldiers_button.setAttribute("value", "kill soldiers");
  kill_soldiers_button.addEventListener('click', function() {
    var soldiers = map.level.soldiers;
    for (var i = 0; i < soldiers.length; i++) {
      soldiers[i].life = 0;
    }
  });
  debug_option.appendChild(kill_soldiers_button);

  var next_wave_button = document.createElement('input');
  next_wave_button.setAttribute('type','button');
  next_wave_button.setAttribute('name','sal');
  next_wave_button.setAttribute("value", "next wave");
  next_wave_button.addEventListener('click', function() {
    map.level.wave_phase_counter = 1;
  });
  debug_option.appendChild(next_wave_button);
}, false);
