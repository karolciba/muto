function Map(canvas) {
  debug.trace("Creating map with canvas", canvas);
	this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.width = 1000;
  this.height = 600;
  this.x = 0;
  this.y = 0;

  this.mouse_last_click = Date.now();
  this.mouse_click_counter = 0;
  this.click_x = 0;
  this.click_y = 0;
  this.mouse_x = 0;
  this.mouse_y = 0;
  this.mouse_button_down = false;
  this.mouse_state = 'ready';
  this.drag_x = 0;
  this.drag_y = 0;

  // this.pane_offset = 800;
  // var pane = new Pane(canvas);
  // pane.set_map(this);
  // this.set_pane(pane);
  // this.pane.set_offset(this.pane_offset);

  this.pane = SidePanel(account.soldiers, this);
  this.pane.set_context(this.context);

  this.sprite = new Sprite();
  this.sprite.set_image_src(global_config.creatures.selected_src);
  this.sprite.set_size(global_config.creatures.selected_width, global_config.creatures.selected_height);
  this.sprite.define(0,'selected', global_config.creatures.selected_sprites);
  this.sprite.set('selected');

  this.desprites = [];
  
  var desprite = new Sprite();
  desprite.set_image_src(global_config.creatures.deselected_src);
  desprite.set_size(global_config.creatures.deselected_width, global_config.creatures.deselected_height);
  desprite.define(0,'selected', global_config.creatures.deselected_sprites);
  desprite.set('selected');
  this.desprites.push(desprite);

  desprite = new Sprite();
  desprite.set_image_src(global_config.creatures.deselected_src);
  desprite.set_size(global_config.creatures.deselected_width, global_config.creatures.deselected_height);
  desprite.define(0,'selected', global_config.creatures.deselected_sprites);
  desprite.set('selected');
  this.desprites.push(desprite);

  desprite = new Sprite();
  desprite.set_image_src(global_config.creatures.deselected_src);
  desprite.set_size(global_config.creatures.deselected_width, global_config.creatures.deselected_height);
  desprite.define(0,'selected', global_config.creatures.deselected_sprites);
  desprite.set('selected');
  this.desprites.push(desprite);

  desprite = new Sprite();
  desprite.set_image_src(global_config.creatures.deselected_src);
  desprite.set_size(global_config.creatures.deselected_width, global_config.creatures.deselected_height);
  desprite.define(0,'selected', global_config.creatures.deselected_sprites);
  desprite.set('selected');
  this.desprites.push(desprite);

  this.pause_mask = Image.from_src(global_config.pause.mask_src);

  this.attack_mark = Image.from_src(global_config.pause.attack_mark_src);
  this.attack_offset_x = Math.floor(global_config.pause.attack_mark_width / 2);
  this.attack_offset_y = Math.floor(global_config.pause.attack_mark_height / 2);

  this.move_mark = Image.from_src(global_config.pause.move_mark_src);
  this.move_offset_x = Math.floor(global_config.pause.move_mark_width / 2);
  this.move_offset_y = Math.floor(global_config.pause.move_mark_height / 2);

  this.flashes = [];

  // this.level = new Level(this.x, this.y, this.width, this.height);
  // level_data(this.level);
  // this.level.set_map(this);

	this.engine = new Engine(this);
}

Map.prototype.prepare_level = function(definition) {
  var level = new Level(this.x, this.y, this.width, this.height);
  this.set_level(level);
  definition.level_data(level);
  this.pane = SidePanel(account.soldiers, this);
  this.pane.set_context(this.context);
  level.on_start();
};

Map.prototype.set_level = function(level) {
  this.level = level;
  this.level.set_map(map);
};

// Map.prototype.set_account = function(account) {
  // this.pane.set_account(account);
// };

Map.prototype.set_pane = function(pane) {
  this.pane = pane;
};

Map.prototype.get_pane = function() {
  return this.pane;
};

Map.prototype.start = function() {
  this.level.draw(this.context);
  engine.clear_callbacks();
  this.start_0();
};

// Speeches
Map.prototype.start_0 = function() {
  if (this.level.speeches) {
    var speech_panel = SpeechPanel(this.level.speeches);
    speech_panel.on_close = function(map) {
      return function() {
        debug.debug("SpeechPanel#on_close");
        map.start_1();
        // brzydka lata to czasu pelnego refaktoru okienek
      };
    }(this);
    iface.show(speech_panel);
  } else {
    debug.debug("Map#start_0 no speeches starting tips");
    this.start_1();
  }
};

// Speeches
Map.prototype.start_1 = function() {
  if (this.level.tips) {
    var tip_panel = TipPanel(this.level.tips);
    tip_panel.on_close = function(map) {
      return function() {
        debug.debug("TipPanel#on_close");
        map.start_2();
        // brzydka lata to czasu pelnego refaktoru okienek
      };
    }(this);
    iface.show(tip_panel);
  } else {
    debug.debug("Map#start_0 no tips, starting engine");
    this.start_2();
  }
};

Map.prototype.start_2 = function() {
  this.level.draw(this.context);
  this.engine.frame = 0;
  this.engine.start();
  iface.active = map;
};

Map.prototype.stop = function() {
  this.engine.stop();
};

Map.prototype.add_soldier = function(soldier) {
  soldier.set_level(this.level);
  this.level.add_soldier(soldier);
};

Map.prototype.set_active_soldier = function(soldier) {
  this.active_soldier = soldier;
  // this.pane.set_active_soldier(soldier);
  this.pane.draw();
};

Map.prototype.get_active_soldier = function() {
  return this.active_soldier;
};

Map.prototype.map_command_soldier = function(x,y) {
  debug.debug("Map#map_command_soldier",x,y);
    if (this.drag_x && this.drag_y) {
      return; // zaznaczamy boxem - ignorujemy to jako komunikat rozkazu ruchu
    }

    var now = Date.now();
    debug.trace("Map#mouse_down",now, this.mouse_last_click);
    if (now < this.mouse_last_click + global_config.map.double_click_interval){
      this.mouse_last_click = now;
      if (Math.abs(x - this.click_x) < global_config.map.double_click_delta && Math.abs(y - this.click_y) < global_config.map.double_click_delta) {
        this.mouse_multiple(x,y);

        this.click_x = x;
        this.click_y = y;
        return;
      }
    }

    this.click_x = x;
    this.click_y = y;
    this.mouse_click_counter = 0;
    this.mouse_last_click = now;
    
    var soldier = this.level.soldier_in(x,y, global_config.map.click_radius);
    var creature = this.level.creature_in(x,y, global_config.map.click_radius);

    if (!soldier && !creature) {
        this.active_soldier.set_commander('defender');
        this.active_soldier.commander.set_destination(x,y);
        return;
    }

    if (soldier && !creature) {
      if (this.active_soldier === soldier) {
        this.active_soldier.set_commander('defender');
        this.active_soldier.commander.set_destination(x,y);
        // this.active_soldier.commander.stop();
      } else {
        // this.active_soldier = soldier;
        this.set_active_soldier(soldier);
      }
      return;
    }

    // if (soldier && creature)
    this.active_soldier.set_commander('defender');
    if (creature.commander.state != 'friendly') {
      this.active_soldier.commander.set_target(creature);
    }

};

Map.prototype.box_selection = function(x0,y0, x1,y1) {
  // sorts => x0 -------- x1, no other way around
  var tmp;
  if (x0 > x1) {
    tmp = x0;
    x0 = x1;
    x1 = tmp;
  }
  if (y0 > y1) {
    tmp = y0;
    y0 = y1;
    y1 = tmp;
  }

  // select soldiers in box
  var soldiers_in_box = [];
  for (var i = 0; i< this.level.soldiers.length; i++) {
    var soldier = this.level.soldiers[i];
    var sx = soldier.x;
    var sy = soldier.y;
    if ( x0 < sx && sx < x1 && y0 < sy && sy < y1) {
      soldiers_in_box.push(soldier);
    }
  }

  var selected = null;
  // select nearest
  if (soldiers_in_box.length > 1) {
    var nearest;
    var nearest_distance = Number.MAX_VALUE;
    for (var i = 0; i < soldiers_in_box.length; i++) {
      var soldier = soldiers_in_box[i];
      var dx = soldier.x - x0;
      var dy = soldier.y - y0;
      var sq_distance = dx * dx + dy * dy;
      if (sq_distance < nearest_distance) {
        nearest = soldier;
        nearest_distance = sq_distance;
      }
    }
    selected = nearest;
  } else {
    selected = soldiers_in_box[0];
  }

  if (selected) {
    this.set_active_soldier(selected);
  }
};

Map.prototype.mouse_out = function() {
  this.mouse_state = 'ready';
};

Map.prototype.mouse_up = function(x,y) {
  debug.debug("Map#mouse_up",x,y);
  this.mouse_button_down = false;

  if (x > global_config.side_panel.x) {
    this.pane.mouse_up(x,y);
    this.mouse_state = 'ready';
    return;
  }

  if (this.mouse_state === 'box') {
    debug.debug("mouse state box", this.click_x - this.mouse_x, this.click_y - this.mouse_y);
    this.mouse_state = 'ready';
    this.box_selection(this.click_x, this.click_y, this.mouse_x, this.mouse_y);
  }

  if (this.mouse_state === 'click') {
    debug.debug("mouse state click");
    this.map_command_soldier(this.click_x, this.click_y);
  }

  this.mouse_state = 'ready';
  clearTimeout(this.mouse_timeout_handler);

  if (this.paused) {
    this.draw_pause();
  }
};

Map.prototype.mouse_down = function(x,y) {
  debug.debug("Map#mouse_down",x,y);
  this.mouse_button_down = true;
  this.mouse_state = 'click';
  this.click_x = x;
  this.click_y = y;

  if (x > global_config.side_panel.x) {
    this.pane.mouse_down(x,y);
    return;
  }

  if (!this.mouse_timeout_handler) {
    this.mouse_timeout_handler = setTimeout(function(map) {
      return function() {
        console.log("Timeout fired");
        if (map.mouse_state === 'click') {
          console.log("Nie bylo przesuniecia");
          map.map_command_soldier(x,y);
          map.mouse_state = 'ready';
          if (this.paused) {
            this.draw_pause();
          }
        }
        // console.log("Timeout fired");
        // var dx = Math.abs(x - map.mouse_x);
        // var dy = Math.abs(y - map.mouse_y);
        // if (map.mouse_button_down && dx < global_config.map.click_delta && dy < global_config.map.click_delta) {
        //   console.log("Timeout minal, nie bylo przesuniecia - znaczy klikniecie",x,y);
        //   map.map_command_soldier(x,y);
        // } else {
        //   console.log("Bylo przesuniecie, ignorujemy");
        // }
      };
    }(this), global_config.map.click_timeout);
  }

  if (this.paused) {
    this.draw_pause();
  }
  // this.map_command_soldier(x,y);
};

Map.prototype.mouse_double = function(x,y) {
  debug.debug("Map#mouse_double",x,y);
  if (x > global_config.side_panel.x) {
    this.pane.mouse_double(x,y);
  } else {
    this.mouse_down(x,y);
  }
};

Map.prototype.mouse_multiple = function(x,y) {
  debug.debug("Map#mouse_multiple",x,y);
  if (x > global_config.side_panel.x) {
    this.pane.mouse_double(x,y);
  } else {
    this.active_soldier.set_commander('executor');
    this.active_soldier.commander.set_destination(x,y);
  }
};

// Map.prototype.on_drag = function(x,y) {
//   debug.debug("Map#mouse_drag",x,y);
//   if (x > global_config.side_panel.x) {
//     this.pane.on_drag(x,y);
//     return;
//   }
// 
//   this.drag_x = x;
//   this.drag_y = y;
// };
// 
// Map.prototype.on_drop = function(x,y) {
//   debug.debug("Map#mouse_drop",x,y);
//   if (x > global_config.side_panel.x) {
//     this.pane.on_drop(x,y);
//     return;
//   }
// 
//   this.drag_x = 0;
//   this.drag_y = 0;
// };

Map.prototype.mouse_move = function(x,y) {
  // debug.trace("Map#mouse_move",x,y,this.drag_x,this.drag_y);
  if (x > global_config.side_panel.x) {
    this.pane.mouse_move(x,y);
    return;
  }

  if (this.mouse_state === 'click') {
    var dx = x - map.click_x;
    var dy = y - map.click_y;
    var adx = Math.abs(dx);
    var ady = Math.abs(dy);
    var delta = global_config.map.box_delta;
    if (adx > delta && ady > delta) {
      this.mouse_state = 'box';
      this.mouse_x = x;
      this.mouse_y = y;
    }
  } else if (this.mouse_state === 'box') {
    this.mouse_x = x;
    this.mouse_y = y;
  }
};

Map.prototype.draw_box = function() {
  if (this.mouse_state === 'box') {
    context.fillStyle = global_config.map.box_color;
    context.strokeStyle = global_config.map.box_color;
    context.beginPath();
    context.moveTo(this.click_x, this.click_y);
    context.lineTo(this.click_x, this.click_y);
    context.lineTo(this.mouse_x, this.click_y);
    context.lineTo(this.mouse_x, this.mouse_y);
    context.lineTo(this.click_x, this.mouse_y);
    context.lineTo(this.click_x, this.click_y);
    context.closePath();
    context.stroke();
  }
    context.beginPath();
    context.closePath();
};

Map.prototype.key_down = function(code) {
  switch(code) {
    case 49: // 1
      this.account.soldiers[0] && this.set_active_soldier(this.account.soldiers[0]);
      break;
    case 50: // 2
      this.account.soldiers[1] && this.set_active_soldier(this.account.soldiers[1]);
      break;
    case 51: // 3
      this.account.soldiers[2] && this.set_active_soldier(this.account.soldiers[2]);
      break;
    case 52: // 4
      this.account.soldiers[3] && this.set_active_soldier(this.account.soldiers[3]);
      break;
    case 81: //q
      this.account.soldiers[0] && this.account.soldiers[0].first_skill.use(map.level);
      break;
    case 87: //w
      this.account.soldiers[0] && this.account.soldiers[0].second_skill.use(map.level);
      break;
    case 69: //e
      this.account.soldiers[1] && this.account.soldiers[1].first_skill.use(map.level);
      break;
    case 82: //r
      this.account.soldiers[1] && this.account.soldiers[1].second_skill.use(map.level);
      break;
    case 65: //a
      this.account.soldiers[2] && this.account.soldiers[2].first_skill.use(map.level);
      break;
    case 83: //s
      this.account.soldiers[2] && this.account.soldiers[2].second_skill.use(map.level);
      break;
    case 68: //d
      this.account.soldiers[3] && this.account.soldiers[3].first_skill.use(map.level);
      break;
    case 70: //f
      this.account.soldiers[3] && this.account.soldiers[3].second_skill.use(map.level);
      break;
    case 32: // space
      if (engine.running) {
        this.paused = true;
        engine.stop();
        this.draw_pause();
      } else {
        this.paused = false;
        engine.start();
      }
      break;
  }
};

Map.prototype.clear = function() {
  // Store the current transformation matrix
  var context = this.canvas.getContext("2d");
  context.save();
  
  // Use the identity matrix while clearing the canvas
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // Restore the transform
  context.restore();
};

Map.prototype.fillWindow = function() {
  debug.trace("Filling window");
	// this.canvas.width = window.innerWidth;
  // this.canvas.height = window.innerHeight;
	this.canvas.width = this.width;
  this.canvas.height = this.height;
};

Map.prototype.add = function(element) {
  debug.trace("Adding element", element);
  this.elements.push(element);
};

Map.prototype.add_flash = function(flash) {
  this.flashes.push(flash);
};

Map.prototype.remove_flash = function(flash) {
  var index = this.flashes.indexOf(flash);
  if (index > -1) {
    this.flashes.splice(index,1);
  }
};

Map.prototype.draw_flashes = function() {
  context = this.canvas.getContext("2d");
  for (var i = 0; i < this.flashes.length; i++) {
    var flash = this.flashes[i];
    if (flash.draw(context) <= 0) {
      this.remove_flash(flash);
    }
  }
};

Map.prototype.draw = function(redraw) {
  context = this.canvas.getContext("2d");
  // this.clear();
  debug.trace("Drawing level", this.level);
  this.level.draw(context);
  for (var i = 0; i < this.level.soldiers.length; i++) {
    var soldier = this.level.soldiers[i];
    if (soldier !== this.active_soldier) {
      this.desprites[i].draw_cycle(context,soldier.x + global_config.creatures.deselected_ofset_x, soldier.y + global_config.creatures.deselected_ofset_y);
    }
  }
  if (this.active_soldier) {
    this.sprite.draw_cycle(context,this.active_soldier.x + global_config.creatures.selected_ofset_x, this.active_soldier.y + global_config.creatures.selected_ofset_y);
  }
  this.draw_flashes();
  this.pane.draw();
  this.draw_box();
};

Map.prototype.redraw = function() {
  context = this.canvas.getContext("2d");
  // this.clear();
  this.level.draw(context, true);
  for (var i = 0; i < this.level.soldiers.length; i++) {
    var soldier = this.level.soldiers[i];
    if (soldier !== this.active_soldier) {
      this.desprites[i].draw_frame(context,soldier.x + global_config.creatures.deselected_ofset_x, soldier.y + global_config.creatures.deselected_ofset_y, 0);
    }
  }
  if (this.active_soldier) {
    this.sprite.draw_frame(context,this.active_soldier.x + global_config.creatures.selected_ofset_x, this.active_soldier.y + global_config.creatures.selected_ofset_y, 0);
  }
};

Map.prototype.draw_pause = function() {
  context = this.canvas.getContext("2d");
  // this.clear();
  debug.trace("Drawing level", this.level);
  this.level.draw(context, true);
  for (var i = 0; i < this.level.soldiers.length; i++) {
    var soldier = this.level.soldiers[i];
    if (soldier !== this.active_soldier) {
      this.desprites[i].draw_frame(context,soldier.x + global_config.creatures.deselected_ofset_x, soldier.y + global_config.creatures.deselected_ofset_y, 0);
    }
  }
  if (this.active_soldier) {
    this.sprite.draw_frame(context,this.active_soldier.x + global_config.creatures.selected_ofset_x, this.active_soldier.y + global_config.creatures.selected_ofset_y, 0);
  }
  this.draw_flashes();
  this.pane.draw();
  this.draw_box();

  var context = this.canvas.getContext("2d");

  context.drawImage(this.pause_mask,0,0);
  for (var i = 0; i < this.level.soldiers.length; i++) {
    var soldier = this.level.soldiers[i];
    if (soldier.commander.destination) {
      context.fillStyle = global_config.pause.move_color;
      context.strokeStyle = global_config.pause.move_color;
      context.beginPath();
      var dest_x = soldier.commander.destination[0];
      var dest_y = soldier.commander.destination[1];
      context.dashedLine(soldier.x, soldier.y, dest_x, dest_y);
      context.closePath();
      context.stroke();
      context.drawImage(this.move_mark,dest_x - this.move_offset_x, dest_y - this.move_offset_y);
    }
    if (soldier.commander.target) {
      context.fillStyle = global_config.pause.attack_color;
      context.strokeStyle = global_config.pause.attack_color;
      context.beginPath();
      var dest_x = soldier.commander.target.x;
      var dest_y = soldier.commander.target.y;
      context.dashedLine(soldier.x, soldier.y, dest_x, dest_y);
      context.closePath();
      context.stroke();
      context.drawImage(this.attack_mark,dest_x - this.attack_offset_x, dest_y - this.attack_offset_y);
    }
  }
      context.beginPath();
      context.closePath();
};

Map.prototype.tick = function(frame) {
  this.level.tick(frame);
};

Map.prototype.move = function(frame) {
  this.level.move(frame);
};
