function Level(view_min_x, view_min_y, view_max_x, view_max_y) {
  debug.trace("Creating new level");

  this.view_min_x = view_min_x;
  this.view_min_y = view_min_y;
  this.view_max_x = view_max_x;
  this.view_max_y = view_max_y;

  this.creatures = [];
  this.bodies = [];
  this.bot_start_points = [];
  this.bot_start_points_marks = [];
  this.soldier_start_points = [];
  this.droppings = [];
  this.dropping_points = [];

  this.mesh = new NavigationMesh();
  this.mechanics = new Mechanics();
  this.mover = new Mover(this);
  this.items_factory = new ItemsFactory();
  this.creatures_factory = new CreaturesFactory();
  this.creatures_factory.set_items_factory(this.items_factory);

  this.soldiers = [];

  this.frame = 0;
  this.wave = 0;
  this.waves = [];

  this.waves_definitions = [];
  this.waves_count = 0;
  this.wave_phase = -1;
  this.wave_phase_counter = 1;
  this.marks = [];

  this.creatures_queue = [];
  this.view_max_creatures = 10;

  this.wave_speeches = [];
  this.wave_tips = [];

  this.on_wave_end_callbacks = [];

  this.violki_prize = 0;
  this.violki_consolation_prize = 0;
  this.violki_bonus_prize = 0;
}

Level.prototype.on_start = function() {
  // this.map.get_pane().set_waves(this.waves.length);
  // var till = this.waves[this.wave] - this.frame;
  // this.map.get_pane().set_wave(this.wave, till/24);
  // this.map.get_pane().redraw_wave();
};

Level.prototype.set_id = function(id) {
  this.id = id;
};

Level.prototype.set_map = function(map) {
  this.map = map;
};

Level.prototype.set_max_creatures = function(max_creatures) {
  this.view_max_creatures = max_creatures;
};

Level.prototype.add_on_wave_end_callback = function(callback) {
  this.on_wave_end_callbacks.push(callback);
};

Level.prototype.run_on_wave_end_callbacks = function() {
  var callback;
  while (callback = this.on_wave_end_callbacks.pop()) {
    callback();
  }
};

Level.prototype.add_survivor = function(id, name, weapon, armour, item_0, item_1, item_2, item_3) {
  var account = this.map.account;
  var item;
  var soldier;

  if (! account.soldiers[id]) {
    soldier = account.soldiers_factory.get(name);
    soldier.life = soldier.max_life;
    if (weapon) {
      item = account.items_factory.get_weapon(weapon);
      item && soldier.set_weapon(item);
    }
    if (armour) {
      item = account.items_factory.get_armour(armour);
      item && soldier.set_armour(item);
    }
    if (item_0) {
      item = account.items_factory.get_item(item_0);
      soldier.set_item_0(item);
    }
    if (item_1) {
      item = account.items_factory.get_item(item_1);
      soldier.set_item_1(item);
    }
    if (item_2) {
      item = account.items_factory.get_item(item_2);
      soldier.set_item_2(item);
    }
    if (item_3) {
      item = account.items_factory.get_item(item_3);
      soldier.set_item_3(item);
    }
    account.soldiers[id] = soldier;
  }
};

Level.prototype.define_wave = function(frame, waves, mark) {
  var wave_obj = { frame: frame, waves: waves, mark: mark };
  this.waves.push(wave_obj);
};

Level.prototype.describe_wave = function(green, orange, red) {
  this.waves_definitions[this.waves_count++] = {
    0: green,
    1: orange,
    2: red,
  };
};

Level.prototype.define_speeches = function(speeches) {
  this.speeches = speeches;
};

Level.prototype.define_wave_speeches = function(wave, speeches) {
  this.wave_speeches[wave] = speeches;
};

Level.prototype.define_end_speeches = function(speeches) {
  this.end_speeches = speeches;
};

Level.prototype.define_end_tips = function(tips) {
  this.end_tips = tips;
};

Level.prototype.define_tips = function(tips) {
  this.tips = tips;
};

Level.prototype.define_wave_tips = function(wave, tips) {
  this.wave_tips[wave] = tips;
};

Level.prototype.define_bot_start_point = function(x,y) {
  this.bot_start_points.push ( [x,y] );
};

Level.prototype.define_soldier_start_point = function(x,y) {
  this.soldier_start_points.push ( [x,y] );
};

Level.prototype.define_dropping_point = function(x,y,interval, definition) {
  this.dropping_points.push(
    { x: x, y: y,
      interval: interval,
      definition: definition,
    }
  );
};

Level.prototype.define_prizes = function(prizes) {
  this.prizes = [];
  var prize;
  var i;
  var item;

  for (prize in prizes) {
    if (prizes.hasOwnProperty(prize)) {
      for (i = 0; i < prizes[prize]; i++) {
        item = this.items_factory.get_item(prize);
        this.prizes.push(item);
      }
    }
  }
};

Level.prototype.define_violki_prize = function(count) {
  this.violki_prize = count;
};

Level.prototype.define_violki_consolation_prize = function(count) {
  this.violki_consolation_prize = count;
};

Level.prototype.set_background_image = function(image_src) {
  debug.trace("Setting background image", image_src);
  this.background_image_src = image_src;// 'assets/img/level.png';
  this.background_image = Image.from_src(image_src);
};

Level.prototype.set_foreground_image = function(image_src) {
  debug.trace("Setting foreground image", image_src);
  this.foreground_image_src = image_src;// 'assets/img/level.png';
  this.foreground_image = Image.from_src(image_src);
};

Level.prototype.add = function(element) {
  debug.trace("Adding element", element);
  this.creatures.push(element);
};

Level.prototype.add_dropping = function(dropping) {
  if (dropping) {
    this.droppings.push(dropping);
  }
};

Level.prototype.generate_dropping = function(definition,x,y) {
  var rand = Math.random();
  var ammo = definition.ammo || 0;
  if (rand < ammo ) {
    return Dropping('ammo', x, y, definition);
  }
  rand -= ammo;
  var health = definition.health || 0;
  if (rand < health ) {
    return Dropping('health', x, y, definition);
  }
  rand -= health;
  var viols = definition.viols || 0;
  if (rand < viols ) {
    return Dropping('viols', x, y, definition);
  }
  rand -= viols;
  var attack = definition.attack || 0;
  if (rand < attack) {
    return Dropping('attack', x, y, definition);
  }
  rand -= attack;
  var defence = definition.defence || 0;
  if (rand < defence) {
    return Dropping('defence', x, y, definition);
  }
  rand -= defence;
  var speed = definition.speed || 0;
  if (rand < speed) {
    return Dropping('speed', x, y, definition);
  }
  rand -= speed;
  var slow = definition.slow || 0;
  if (rand < slow) {
    return Dropping('slow', x, y, definition);
  }
  rand -= slow;
  var injure = definition.injure || 0;
  if (rand < injure) {
    return Dropping('injure', x, y, definition);
  }
};

Level.prototype.add_soldier = function(soldier) {
  debug.debug("Adding soldier", soldier);
  var i, start_point, x, y;
  soldier.life = soldier.max_life;
  soldier.revive(this);

  for (i = 0; i < this.soldier_start_points.length; i++) {
    start_point = this.soldier_start_points[i];
    x = start_point[0];
    y = start_point[1];
    // mutant = new Mutant(this);
    if (this.is_position_clear(soldier, x, y)) {
      debug.debug("pozycja czysta dodaje", soldier, x, y);
      soldier.set(x,y);
      this.soldiers.push(soldier);
      break;
    } else {
      debug.debug("pozycja zajeta!!!! nie dodaje soldiera", soldier, x, y);
    }
  }
};

Level.prototype.draw_waves_marks = function(context) {
  for (var i = 0; i < this.marks.length; i++) {
    var mark = this.marks[i];
    context.drawImage(mark.image, mark.x, mark.y);
  }
};

Level.prototype.draw = function(context, redraw) {
  var i;

  debug.trace("Drawing background image",this.background_image);
  context.drawImage(this.background_image, this.view_min_x, this.view_min_y);

  debug.trace("Drawing bodies",this.bodies);
  for (i = 0; i < this.bodies.length; i++) {
    this.bodies[i].draw(context);
    // this.creatures[i].draw_lifebar(context);
  }

  debug.trace("Drawing droppings",this.droppings);
  for (i = 0; i < this.droppings.length; i++) {
    if (!this.droppings[i].draw(context)) {
      this.droppings[i].on_remove && this.droppings[i].on_remove();
      this.droppings.splice(i,1);
    }
    // this.creatures[i].draw_lifebar(context);
  }

  debug.trace("Drawing wave marks");
  this.draw_waves_marks(context);

  debug.trace("Drawing elements",this.creatures);
  for (i = 0; i < this.creatures.length; i++) {
    this.creatures[i].draw(context, redraw);
    // this.creatures[i].draw_lifebar(context);
  }

  debug.trace("Drawing soldiers",this.soldiers);
  for (i = 0; i < this.soldiers.length; i++) {
    this.soldiers[i].draw(context, redraw);
    // this.soldiers[i].draw_lifebar(context);
  }


  if (this.foreground_image) { context.drawImage(this.foreground_image, this.view_min_x, this.view_min_y); }

  if (debug.do_draw('draw')) {
    if (debug.do_draw('mesh')) {
      this.mesh.draw(context);
      context.fillStyle = "#f00";
      context.strokeStyle = "#f00";
      for (var i = 0; i < this.bot_start_points.length; i++) {
        var point = this.bot_start_points[i];
        context.fillText(i, point[0], point[1]);
      }
    }

    debug.trace("Drawing creatures waypoints");
    for (i = 0; i < this.creatures.length; i++) {
      this.creatures[i].draw_debug(context);
    }

    debug.trace("Drawing soldiers waypoints");
    for (i = 0; i < this.soldiers.length; i++) {
      this.soldiers[i].draw_debug(context);
    }
  }
};

Level.prototype.define_body = function(x,y, kind) {
  var bot = this.creatures_factory.get(kind, this);
  bot.life = 0;
  bot.x = x;
  bot.y = y;
  bot.on_dead();
  this.bodies.push(bot);
};

Level.prototype.influences_tick = function(frame) {
  if (frame % 24 > 0) return;

  var second = frame / 24;
  for (var i = 0; i < this.creatures.length; i++) {
    var creature = this.creatures[i];

    var keys = creature.influences.timed_keys();
    for (var id in keys) {
      var key = keys[id];
      var interval = creature.influences.get_timed(key);
      if (second % interval == 0) {
        creature.set_life( creature.life - 1 );
        map.add_flash( Flash("1", creature.x, creature.y - 20));
      }
    }
  }

  for (var i = 0; i < this.soldiers.length; i++) {
    var soldier = this.soldiers[i];

    var keys = soldier.influences.timed_keys();
    for (var id in keys) {
      var key = keys[id];
      var interval = soldier.influences.get_timed(key);
      if (second % interval == 0) {
        soldier.set_life( soldier.life - 1 );
        map.add_flash( Flash("1", soldier.x, soldier.y - 20));
      }
    }
  }
};

Level.prototype.remove_dead_creatures = function() {
  var i;

  for (i = this.creatures.length - 1; i >= 0; i--) {
    if (this.creatures[i].life <= 0) {
      debug.trace("Kreatura ma stracila zycie", this.creatures[i]);
      var creature = this.creatures[i];
      this.creatures.splice(i,1);
      this.bodies.push(creature);
      if (this.bodies.length > global_config.map.bodies_limit) {
        this.bodies.shift();
      }
      creature.on_dead();
      if (creature.droppings) {
        var dropping = this.generate_dropping(creature.droppings, creature.x, creature.y);
        if (dropping) {
          this.add_dropping(dropping);
        }
      }
    }
  }
  for (i = this.soldiers.length - 1; i >= 0; i--) {
    if (this.soldiers[i].life <= 0) {
      debug.trace("Kreatura ma stracila zycie", this.soldiers[i]);
      var soldier = this.soldiers[i];
      soldier.influences.clear_all();
      this.soldiers.splice(i,1);
      this.bodies.push(soldier);
      soldier.on_dead();
    }
  }

  if (this.soldiers.length === 0) {
    this.on_failure();
    // if (engine) engine.stop();
  }
};

Level.prototype.on_success = function() {
  var i;

  this.run_on_wave_end_callbacks();

  window.engine.stop();

  for (var i = 0; i < account.soldiers.length; i++) {
    var soldier = account.soldiers[i];
    if (soldier) {
      soldier.revive();
    }
  }

  iface.account.pass_level(this.id);
  // for (i = 0; i < this.prizes.length; i++) {
  //   var prize = this.prizes[i];
  //   iface.account["set_item_"+(i+25)](prize);
  // }

  for (i = 0; i < this.soldiers.length; i++) {
    this.soldiers[i].influences.clear_all();
  }

  if (this.end_speeches) {
    var speech_panel = SpeechPanel(this.end_speeches);
    speech_panel.on_close = function(level) {
      return function() {
        debug.debug("EndSpeechPanel#on_close");
        if (level.end_tips) {
          var tip_panel = TipPanel(level.end_tips);
          tip_panel.on_close = function() {
            debug.debug("EndTipsPanel#on_close");
            level.show_success_panel();
          };
          iface.show(tip_panel);
        } else {
          level.show_success_panel();
        }
        // brzydka lata to czasu pelnego refaktoru okienek
      };
    }(this);
    iface.show(speech_panel);
  } else {
    if (this.end_tips) {
      var tip_panel = TipPanel(this.end_tips);
      tip_panel.on_close = function(level) {
        return function() {
          debug.debug("EndTipsPanel#on_close");
          level.show_success_panel();
        };
      }(this);
      iface.show(tip_panel);
    } else {
      this.show_success_panel();
    }
  }
};

Level.prototype.show_end_panel = function() {
  var end_panel = EndPanel();
  end_panel.on_close = function() {
    window.iface.show_menu();
  };

  iface.show(end_panel);
};

Level.prototype.show_success_panel = function() {
  var success_panel = SuccessPanel(account.items, this.prizes, this.violki_prize, this.violki_bonus_prize );
  success_panel.on_close = function () {
    if (map.level.id === global_config.end_panel.display_after_level) {
      map.level.show_end_panel();
    } else {
      window.iface.show_menu();
    }
  };

  iface.show(success_panel);
};

Level.prototype.on_exit = function() {
  this.run_on_wave_end_callbacks();

  for (var i = 0; i < account.soldiers.length; i++) {
    var soldier = account.soldiers[i];
    if (soldier) {
      soldier.revive();
    }
  }
};

Level.prototype.on_failure = function() {
  this.run_on_wave_end_callbacks();
  for (var i = 0; i < account.soldiers.length; i++) {
    var soldier = account.soldiers[i];
    if (soldier) {
      soldier.revive();
    }
  }

  engine.stop();

  var failure_panel = FailurePanel(this.violki_consolation_prize, this.violki_bonus_prize);
  failure_panel.on_close = function() {
    window.iface.show_menu();
  };

  iface.show(failure_panel);
};

Level.prototype.move = function(frame) {
  var i;

  for (i = 0; i < this.creatures.length; i++) {
    this.mover.move(this.creatures[i]);
  }

  for (i = 0; i < this.soldiers.length; i++) { 
    this.mover.move(this.soldiers[i]); 
  }
};


Level.prototype.place_bot = function(x, y, kind, def) {
  var ai = def.ai || 'wanderer';
  var params = def.params || {};
  var on_dead = def.on_dead;
  var health_draw = def.health_draw || false;

  var bot = this.creatures_factory.get(kind, this);
  bot.x = x;
  bot.y = y;
  bot.life = bot.max_life;
  bot.commander.set_mode(ai, params);
  if (on_dead) {
    bot.add_on_dead_callback(on_dead);
  }
  if (health_draw) {
    bot.health_draw = true;
  }
  bot.set(x,y);
  this.add(bot);
};

Level.prototype.tick = function(frame) {
  var kind;
  var i;
  var bot;

  this.frame = frame;

  this.influences_tick(frame);
  this.remove_dead_creatures();

  debug.trace("Adding creatures from queue");
  if (frame % 13 === 0 && this.creatures.length < this.view_max_creatures) {
    // takes on left side
    bot = this.creatures_queue.shift();
    if (bot) {
      // mutant = new Mutant(this);
      if (this.is_position_clear(bot, bot.x, bot.y)) {
        debug.trace("pozycja czysta dodaje", bot, bot.x, bot.y);
        bot.set(bot.x,bot.y);
        this.add(bot);
      } else {
        // push on right - to prevent situation when one invalid bot disables whole queue
        this.creatures_queue.push(bot);
        debug.trace("pozycja zajeta. wracam do kolejki", bot, bot.x, bot.y);
      }
    }
  }

  for (i = 0; i < this.creatures.length; i++) {
    this.creatures[i].tick(frame);
  }

  for (i = 0; i < this.soldiers.length; i++) {
    var soldier = this.soldiers[i];
    soldier.tick(frame);
    for (var j = 0; j < this.droppings.length; j++) {
      var dropping = this.droppings[j];
      if (Math.circle_collision(soldier.x, soldier.y, soldier.radius, dropping.x, dropping.y, dropping.radius)) {
        if (dropping.use(soldier, this)) {
          this.droppings[j].on_remove && this.droppings[j].on_remove();
          this.droppings.splice(j,1);
        }
      }
    }
  }

  // reszta tylko co sekunde
  if (frame % 24) return;

  this.wave_phase_counter--;

  if (this.wave_phase_counter === 0) {
    this.wave_phase++;

    if (this.wave_phase == 3) {
      this.run_on_wave_end_callbacks();
      this.wave++;
      this.mid_level_panels();
      this.wave_phase = 0;
    }

    var definition = this.waves_definitions[this.wave];

    if (definition) {
      var phase = definition[this.wave_phase];
      if (!phase) {
        this.wave_phase_counter = 1;
      } else {
        this.wave_phase_counter = phase.timeout;

        var droppings = phase.droppings;
        for (var i = 0; i < droppings.length; i++) {
          var def = droppings[i];
          var dropping = this.generate_dropping(def, def.x, def.y);
          this.add_dropping(dropping);
        }

        var bots = phase.bots;
        for (var i = 0; i < bots.length; i++) {
          var def = bots[i];
          for (var y = 0; y < def.count; y++ ) {
            bot = this.creatures_factory.get(def.kind, this);
            bot.x = def.x;
            bot.y = def.y;
            bot.life = bot.max_life;
            bot.commander.set_mode(def.ai, def.params);
            if (def.on_dead) {
              bot.add_on_dead_callback(def.on_dead);
            }
            if (def.health_draw) {
              bot.health_draw = true;
            }
            this.creatures_queue.push(bot);
          }
        }

        if (this.wave_phase == 2) {
          for (var i = 0; i < this.creatures.length; i++) {
            this.creatures[i].switch_amok();
          }
          for (var i = 0; i < this.creatures_queue.length; i++) {
            this.creatures_queue[i].switch_amok();
          }
        }

        var marks = phase.marks;
        this.marks = [];
        for (var i = 0; i < marks.length; i++) {
          var mark = {
            x: marks[i].x,
            y: marks[i].y,
            image: Image.from_src(marks[i].src)
          };
          this.marks.push(mark);
        }
      }
    }
  }

  if (this.wave === this.waves_count && this.creatures_queue.length === 0) {
    var end = true;
    for (var i = 0; i < this.creatures.length; i++) {
      if (!this.creatures[i].friendly) {
        end = false;
        break;
      }
    }
    if (end) {
      this.on_success();
      return;
    }
  }


};

Level.prototype.mid_level_panels = function() {
  if (this.wave_speeches[this.wave+1]) {
    var speech_panel = SpeechPanel(this.wave_speeches[this.wave+1]);
    speech_panel.on_close = function(map) {
      return function() {
        debug.debug("SpeechPanel#on_close");
        if (map.wave_tips[map.wave+1]) {
          var tip_panel = TipPanel(map.wave_tips[map.wave+1]);
          tip_panel.on_close = function() {
            debug.debug("TipPanel#on_close");
            iface.active = iface.map;
            engine.start();
          };
          iface.show(tip_panel);
        } else {
          iface.active = iface.map;
          engine.start();
        }
      };
    }(this);
    iface.show(speech_panel);
    engine.stop();
    // return;
  }

  if (this.wave_tips[this.wave+1]) {
    var tip_panel = TipPanel(this.wave_tips[this.wave+1]);
    tip_panel.on_close = function(map) {
      return function() {
        debug.debug("TipPanel#on_close");
        iface.active = iface.map;
        engine.start();
      };
    }(this);
    iface.show(tip_panel);
    engine.stop();
  }
};

Level.prototype.soldier_in = function(x,y,r) {
  var i;

  debug.trace("Mouse down, szukam soldiera",x,y,r);
  var found = null;
  var sq_distance = Number.MAX_VALUE;
  var soldier = null;
  for (i = 0; i < this.soldiers.length; i++) {
    soldier = this.soldiers[i];
    if (soldier.inside(x,y,r)) {
      debug.trace("Znalazlem soldiera", found);
      var dx = soldier.x - x;
      var dy = soldier.y - y;
      if (dx * dx + dy * dy < sq_distance) {
        found = soldier;
      }
    }
  }

  return found;
};

Level.prototype.creature_in = function(x,y,r) {
  var i;

  debug.trace("Mouse down, szukam kreatury",x,y,r);
  var found = null;
  var sq_distance = Number.MAX_VALUE;
  var creature = null;
  for (i = 0; i < this.creatures.length; i++) {
    creature = this.creatures[i];
    if (creature.inside(x,y,r)) {
      debug.trace("Znalazlem creaturea", found);
      var dx = creature.x - x;
      var dy = creature.y - y;
      if (dx * dx + dy * dy < sq_distance) {
        found = creature;
      }
    }
  }

  return found;
};

Level.prototype.is_position_clear = function(who, x, y) {
  var i;

  debug.trace("Sprawdzamy czy pozycja dostepna", who, x, y);

  for (i = 0; i < this.creatures.length; i++) {
    var creature = this.creatures[i];
    if (creature !== who && who.circle_collision(creature, x, y)) { return false; }
  }

  for (i = 0; i < this.soldiers.length; i++) {
    var soldier = this.soldiers[i];
    if (soldier !== who && who.circle_collision(soldier, x, y)) { return false; }
  }

  return true;
};

Level.prototype.collision_in_position = function (who, x, y) {
  var i;
  debug.trace("Sprawdzamy kolizje w punkcie", who, x, y);

  for (i = 0; i < this.creatures.length; i++) {
    var creature = this.creatures[i];
    if (creature !== who && who.circle_collision(creature, x, y)) { return creature; }
  }

  for (i = 0; i < this.soldiers.length; i++) {
    var soldier = this.soldiers[i];
    if (soldier !== who && who.circle_collision(soldier, x, y)) { return soldier; }
  }
};

Level.prototype.creature_intersect = function(who, x0,y0,x1,y1, skip, radius_modifier) {
  var i;
  debug.trace("Sprawdzamy kolizje wasa", who, x0, y0, x1, y1);
  radius_modifier = radius_modifier || 0;

  // if (!engine.has_time()) {
  //   debug.count('sc',1);
  //   return;
  // }

  var f = Math.line_circle_intersect;

  var count = this.creatures.length;
  for (i = 0; i < count; i++) {
    var creature = this.creatures[i];
    if (f(x0,y0,x1,y1, creature.x, creature.y, creature.radius + radius_modifier) && creature !== skip && creature !== who) { return creature; }
  }

  count = this.soldiers.length;
  for (i = 0; i < count; i++) {
    var soldier = this.soldiers[i];
    if (f(x0,y0,x1,y1, soldier.x, soldier.y, soldier.radius + radius_modifier) && soldier !== skip && soldier !== who) { return soldier; }
  }

  return false;
};

Level.prototype.creature_inside = function(who, x, y, skip) {
  var i;
  debug.trace("Sprawdzamy kolizje tipa wasa", who, x, y);

  for (i = 0; i < this.creatures.length; i++) {
    var creature = this.creatures[i];
    if (creature !== skip && creature !== who && Math.point_in_circle(x,y, creature.x, creature.y, creature.radius)) { return creature; }
  }

  for (i = 0; i < this.soldiers.length; i++) {
    var soldier = this.soldiers[i];
    if (soldier !== skip && soldier !== who && Math.point_in_circle(x,y, soldier.x, soldier.y, soldier.radius)) { return soldier; }
  }

  return false;
};

Level.prototype.attack = function(victim, attacker) {
  // check if opponent
  if (!victim) {
    debug.trace("Atak przez "+attacker.name+" nie ma przeciwnika");
    return Mechanics.enums.NOT_IN_RANGE;
  } 

  if (!this.mesh.line_of_view(victim.x, victim.y, attacker.x, attacker.y)) {
    return Mechanics.enums.NOT_IN_VIEW;
  } 

  return this.mechanics.attack(victim, attacker);
};

Level.prototype.get_waypoints = function(x0, y0, x1, y1, displacement) {
  return this.mesh.get_waypoints(x0, y0, x1, y1, displacement);
};

// SEEKING AND FINDING
Level.prototype.nearest_soldier = function(x,y, params) {
  return this.nearest(this.soldiers, x, y, params);
};

Level.prototype.nearest_creature = function(x,y, params) {
  return this.nearest(this.creatures, x, y, params);
};

Level.prototype.nearest_opponent = function(x,y, params) {
  var opponents = params.opponents;
  params.opponents = null;

  var soldier = this.nearest_soldier(x,y, params);

  if (!opponents) {
    return soldier;
  }

  params.opponents = opponents;
  var opponent = this.nearest_creature(x,y, params);

  var soldier_distance = (soldier) ? Math.distance(x,y, soldier.x, soldier.y) : Number.MAX_VALUE;
  var opponent_distance = (opponent) ? Math.distance(x,y, opponent.x, opponent.y) : Number.MAX_VALUE;

  if (opponent_distance < soldier_distance) {
    return opponent;
  } else {
    return soldier;
  }

}

Level.prototype.nearest = function(creatures, x, y, params) {
  var i;
  // var only_visible = params;
  var only_visible = params && params.only_visible ? true : false;
  var skip = params && params.skip ? params.skip : null;
  var max_distance = params && params.max_distance ? params.max_distance : Number.MAX_VALUE;

  var nearest = null;
  var nearest_distance = Number.MAX_VALUE;
  for (i =0; i < creatures.length; i++) {
    var creature = creatures[i];
    if (skip && creature === skip) {
      continue;
    }

    if (params.opponents && params.opponents.indexOf(creature.name) === -1 ) {
      continue;
    }

    if (only_visible && !this.mesh.line_of_view(x,y, creature.x, creature.y)) {
      continue;
    }

    var creature_distance = Math.distance(x,y, creature.x, creature.y);

    if ( creature_distance > max_distance ) {
      continue;
    }

    if ( creature_distance < nearest_distance ) {
      nearest = creature;
      nearest_distance = creature_distance;
    }
  }

  return nearest;
};

Level.prototype.creatures_notify_noise = function(x, y, noise, params) {
  var skip = params && params.skip ? params.skip : null;

  for (var i = 0; i < this.creatures.length; i++) {
    var creature = this.creatures[i];
    if (skip && creature === skip) {
      continue;
    }

    var creature_distance = Math.distance(x,y, creature.x, creature.y);

    if ( creature_distance < noise + creature.hearing ) {
      creature.commander.on_noise(x, y);
    }

  }
}

Level.prototype.creatures_visible = function(from, to) {
  return this.mesh.line_of_view(from.x, from.y, to.x, to.y);
}

