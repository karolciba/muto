SidePanel = function(soldiers, map) {
  var active_soldier = soldiers[0];

  var config = global_config.side_panel;

  var panel = PanelFromSrc(config.x, config.y, config.width, config.height, config.background_src);

  var wave = TextArea(config.wave_x, config.wave_y, []);
  wave.set_font(config.wave_font);
  wave.set_color(config.wave_color);
  panel.add_element(wave);

  var time = TextArea(config.time_x, config.time_y, []);
  time.set_font(config.time_font);
  time.set_color(config.time_green_color);
  panel.add_element(time);

  var next_handler;
  var next_button = StateButtonFromSrc(
      config.next_button_x,
      config.next_button_y,
      config.next_button_width,
      config.next_button_height,
      config.next_button_active_src,
      config.next_button_inactive_src
  );
  next_button.on_active = function() {
    debug.debug("next button - first click");
    next_handler = setTimeout(function() {
      debug.debug("next button - timeout");
      next_button.deactivate();
    }, 3000);
    return true;
  };
  next_button.on_inactive = function() {
    debug.debug("Next button inactive");
    // var wave_info = map.level.waves[map.level.wave];
    // if (wave_info) {
      // var next_in = wave_info.frame;
      // console.log("next wave at "+next_in);
      // engine.frame = next_in - 1;
    // }
    map.level.wave_phase_counter = 1;
    window.clearTimeout(next_handler);
    next_button.activate();
    return true;
  };
  next_button.deactivate();
  panel.add_element(next_button);

  var pause_button = StateButtonFromSrc(
      config.pause_button_x,
      config.pause_button_y,
      config.pause_button_width,
      config.pause_button_height,
      config.pause_button_active_src,
      config.pause_button_inactive_src
  );
  pause_button.on_active = function() {
    if (engine.running) {
      console.log("pause active");
      map.paused = true;
      map.draw_pause();
      engine.stop();
      return true;
    }
  };
  pause_button.on_inactive = function() {
    if (!engine.running) {
      console.log("pause inactive");
      map.paused = false;
      engine.start();
      return true;
    }
  };
  panel.add_element(pause_button);

  var exit_button = StateButtonFromSrc(
      config.exit_button_x,
      config.exit_button_y,
      config.exit_button_width,
      config.exit_button_height,
      config.exit_button_active_src,
      config.exit_button_inactive_src
  );
  exit_button.on_active = function() {
    debug.debug("exit button - first click");
    setTimeout(function() {
      debug.debug("exit button - timeout");
      exit_button.deactivate();
    }, 3000);
    return true;
  };
  exit_button.on_inactive = function() {
    debug.debug("exit button - second click");
    engine.stop();
    map.level.on_exit();
    window.iface.show_menu();
    window.iface.active.draw();
  };
  panel.add_element(exit_button);

  helper_button = ButtonFromSrc(
      config.helper_button_x,
      config.helper_button_y,
      config.helper_button_width,
      config.helper_button_height,
      config.helper_button_src
  );
  helper_button.mouse_down = function() {
    var helper_panel = HelperSidePanel(config.helper_background_src);
    helper_panel.on_close = function() {
      iface.active = iface.map;
      engine.start();
    };
    iface.show(helper_panel);
    engine.stop();
  };
  panel.add_element(helper_button);

  var dot = Image.from_src(global_config.dot_src);
  var boost = Image.from_src(config.boost_src);

  var stats_0 = SourcedText(config.image_0_x, config.image_0_y, function() {
    if (debug.do_draw('stats')) {
      var weapon = soldiers[0].weapon || soldiers[0].natural_weapon;
      var attack = soldiers[0].attack;
      var attack_sum = soldiers[0].attack + weapon.attack;
      var armour = soldiers[0].armour || soldiers[0].natural_armour;
      var defence = soldiers[0].defence;
      var defence_sum = soldiers[0].defence + armour.defence;
      return "A: "+attack_sum+" = "+attack+" + "+weapon.attack+" D: "+defence_sum+" = "+defence+" + "+armour.defence;
    }
    return '';
  });
  panel.add_element(stats_0);
  var image_0 = Img(config.image_0_x, config.image_0_y, config.image_0_width, config.image_0_height, soldiers[0].panel);
  image_0.mouse_down = function() {
    map.set_active_soldier(soldiers[0]);
  };
  panel.add_element(image_0);
  var damage_0 = DamageBar(config.image_0_x, config.image_0_y, soldiers[0]);
  panel.add_element(damage_0);
  var boost_0 = Img(config.boost_0_x, config.boost_0_y, 1, 1, boost);
  panel.add_element(boost_0);
  var weapon_0 = SourcedSlot(
      config.weapon_0_x, 
      config.weapon_0_y, 
      config.weapon_0_width, 
      config.weapon_0_height,
      function() { return soldiers[0].get_weapon(); },
      function(item) { return soldiers[0].set_weapon(item); }
  );
  panel.add_element(weapon_0);

  var armour_0 = SourcedSlot(
      config.armour_0_x,
      config.armour_0_y,
      config.armour_0_width,
      config.armour_0_height,
      function() { return soldiers[0].get_armour(); },
      function(item) { return soldiers[0].set_armour(item); }
  );
  panel.add_element(armour_0);

  var first_skill_0 = SkillButton(
      config.first_skill_0_x, 
      config.first_skill_0_y, 
      config.first_skill_0_width, 
      config.first_skill_0_height,
      soldiers[0].first_skill
  );
  panel.add_element(first_skill_0);
  var second_skill_0 = SkillButton(
      config.second_skill_0_x, 
      config.second_skill_0_y, 
      config.second_skill_0_width,
      config.second_skill_0_height,
      soldiers[0].second_skill
  );
  panel.add_element(second_skill_0);

  if (soldiers[1]) {
    var stats_1 = SourcedText(config.image_1_x, config.image_1_y, function() {
      if (debug.do_draw('stats')) {
        var weapon = soldiers[1].weapon || soldiers[1].natural_weapon;
        var attack = soldiers[1].attack;
        var attack_sum = soldiers[1].attack + weapon.attack;
        var armour = soldiers[1].armour || soldiers[1].natural_armour;
        var defence = soldiers[1].defence;
        var defence_sum = soldiers[1].defence + armour.defence;
        return "A: "+attack_sum+" = "+attack+" + "+weapon.attack+" D: "+defence_sum+" = "+defence+" + "+armour.defence;
      }
      return '';
    });
    panel.add_element(stats_1);
    var image_1 = Img(config.image_1_x, config.image_1_y, config.image_1_width, config.image_1_height, soldiers[1].panel);
    image_1.mouse_down = function() {
      map.set_active_soldier(soldiers[1]);
    };
    panel.add_element(image_1);
    var damage_1 = DamageBar(config.image_1_x, config.image_1_y, soldiers[1]);
    panel.add_element(damage_1);
    var boost_1 = Img(config.boost_1_x, config.boost_1_y, 1, 1, boost);
    panel.add_element(boost_1);
    var weapon_1 = SourcedSlot(
        config.weapon_1_x, 
        config.weapon_1_y, 
        config.weapon_1_width, 
        config.weapon_1_height,
        function() { return soldiers[1].get_weapon(); },
        function(item) { return soldiers[1].set_weapon(item); }
    );
    panel.add_element(weapon_1);

    var armour_1 = SourcedSlot(
        config.armour_1_x,
        config.armour_1_y,
        config.armour_1_width,
        config.armour_1_height,
        function() { return soldiers[1].get_armour(); },
        function(item) { return soldiers[1].set_armour(item); }
    );
    panel.add_element(armour_1);

    var first_skill_1 = SkillButton(
        config.first_skill_1_x, 
        config.first_skill_1_y, 
        config.first_skill_1_width, 
        config.first_skill_1_height,
        soldiers[1].first_skill
    );
    panel.add_element(first_skill_1);
    var second_skill_1 = SkillButton(
        config.second_skill_1_x, 
        config.second_skill_1_y, 
        config.second_skill_1_width,
        config.second_skill_1_height,
        soldiers[1].second_skill
    );
    panel.add_element(second_skill_1);
  }

  if (soldiers[2]) {
    var image_2 = Img(config.image_2_x, config.image_2_y, config.image_2_width, config.image_2_height, soldiers[2].panel);
    image_2.mouse_down = function() {
      map.set_active_soldier(soldiers[2]);
    };
    panel.add_element(image_2);
    var damage_2 = DamageBar(config.image_2_x, config.image_2_y, soldiers[2]);
    panel.add_element(damage_2);
    var boost_2 = Img(config.boost_2_x, config.boost_2_y, 1, 1, boost);
    panel.add_element(boost_2);
    var weapon_2 = SourcedSlot(
        config.weapon_2_x, 
        config.weapon_2_y, 
        config.weapon_2_width, 
        config.weapon_2_height,
        function() { return soldiers[2].get_weapon(); },
        function(item) { return soldiers[2].set_weapon(item); }
    );
    panel.add_element(weapon_2);

    var armour_2 = SourcedSlot(
        config.armour_2_x,
        config.armour_2_y,
        config.armour_2_width,
        config.armour_2_height,
        function() { return soldiers[2].get_armour(); },
        function(item) { return soldiers[2].set_armour(item); }
    );
    panel.add_element(armour_2);
    
    var first_skill_2 = SkillButton(
        config.first_skill_2_x, 
        config.first_skill_2_y, 
        config.first_skill_2_width, 
        config.first_skill_2_height,
        soldiers[2].first_skill
    );
    panel.add_element(first_skill_2);
    var second_skill_2 = SkillButton(
        config.second_skill_2_x, 
        config.second_skill_2_y, 
        config.second_skill_2_width,
        config.second_skill_2_height,
        soldiers[2].second_skill
    );
    panel.add_element(second_skill_2);
  }
  
  if (soldiers[3]) {
    var image_3 = Img(config.image_3_x, config.image_3_y, config.image_3_width, config.image_3_height, soldiers[3].panel);
    image_3.mouse_down = function() {
      map.set_active_soldier(soldiers[3]);
    };
    panel.add_element(image_3);
    var damage_3 = DamageBar(config.image_3_x, config.image_3_y, soldiers[3]);
    panel.add_element(damage_3);
    var boost_3 = Img(config.boost_3_x, config.boost_3_y, 1, 1, boost);
    panel.add_element(boost_3);
    var weapon_3 = SourcedSlot(
        config.weapon_3_x, 
        config.weapon_3_y, 
        config.weapon_3_width, 
        config.weapon_3_height,
        function() { return soldiers[3].get_weapon(); },
        function(item) { return soldiers[3].set_weapon(item); }
    );
    panel.add_element(weapon_3);
    var armour_3 = SourcedSlot(
        config.armour_3_x,
        config.armour_3_y,
        config.armour_3_width,
        config.armour_3_height,
        function() { return soldiers[3].get_armour(); },
        function(item) { return soldiers[3].set_armour(item); }
    );
    panel.add_element(armour_3);
  }

  var dead_image = Image.from_src(config.image_dead_src);

  panel.set_on_draw( function() {
    var kind, count;
    var phase = 'green';

    var wave_text = Lang.get('wave_desc');
    var wave_no = map.level.wave + 1;
    var waves_count = map.level.waves_count;
    if (wave_no > waves_count) wave_no = waves_count;
    wave_text = wave_text.replace("{wave}", wave_no);
    wave_text = wave_text.replace("{waves}", waves_count);

    wave.set_text(wave_text.split('\n'));

    if (soldiers[0].life <= 0) image_0.set_background(dead_image);
    if (soldiers[1] && soldiers[1].life <= 0) image_1.set_background(dead_image);
    if (soldiers[2] && soldiers[2].life <= 0) image_2.set_background(dead_image);
    if (soldiers[3] && soldiers[3].life <= 0) image_3.set_background(dead_image);

    if (map.level.wave_phase == 1) {
      // phase = 'orange';
      time.set_color(config.time_orange_color);
    } else if (map.level.wave_phase == 2) {
      // phase = 'red';
      time.set_color(config.time_red_color);
    } else {
      // phase = 'green';
      time.set_color(config.time_green_color);
    }
    // lines.push("Phase "+phase+"  end: "+ map.level.wave_phase_counter);
    var timer = map.level.wave_phase_counter;
    if (timer < 0) timer = 0;
    time.set_text( [ timer ] );

    var s0 = soldiers[0];
    if (s0 && (s0.influences.get('attack_boost') || s0.influences.get('defence_boost') || s0.influences.get('speed_boost'))) {
      boost_0.set_background(boost);
    } else {
      boost_0.set_background(dot);
    }
    var s1 = soldiers[1];
    if (s1 && (s1.influences.get('attack_boost') || s1.influences.get('defence_boost') || s1.influences.get('speed_boost'))) {
      boost_1.set_background(boost);
    } else {
      boost_1 && boost_1.set_background(dot);
    }
    var s2 = soldiers[2];
    if (s2 && (s2.influences.get('attack_boost') || s2.influences.get('defence_boost') || s2.influences.get('speed_boost'))) {
      boost_2.set_background(boost);
    } else {
      boost_2 && boost_2.set_background(dot);
    }
    var s3 = soldiers[3];
    if (s3 && (s3.influences.get('attack_boost') || s3.influences.get('defence_boost') || s3.influences.get('speed_boost'))) {
      boost_3.set_background(boost);
    } else {
      boost_3 && boost_3.set_background(dot);
    }

  } );

  return panel;
};

DamageBar = function(x,y, creature) {

  var ofsetted_x = x;
  var ofsetted_y = y;

  var bars = global_config.side_panel.damage_bar_sprites;
  var width = global_config.side_panel.damage_bar_width;
  var height = global_config.side_panel.damage_bar_height;
  var half_width = Math.floor(width/2);
  var half_height = Math.floor(height/2);

  var sprite = new Sprite();
  sprite.set_image_src(global_config.side_panel.damage_bar_src);
  sprite.set_size(width, height);
  sprite.define(0,'health', this.bars);
  sprite.set('health');

  return {
    draw: draw,
    mouse_down: mouse_down,
    inside: inside,
    ofset: ofset,
  };

  // just for the interface's sake
  function draw(context) {
    var frame = Math.floor((1 - creature.life/creature.max_life) * bars);
    sprite.draw_frame(context, ofsetted_x + half_width, ofsetted_y + half_height, frame);
    debug.do_draw('panels') && draw_debug(context);
  } 

  function draw_debug(context) {
    context.fillText("D"+x+"x"+y, ofsetted_x, ofsetted_y);
  }
  
  // nie chcemy aby bylo klikalne
  function inside() {
    return false;
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function mouse_down(x,y) {
    console.log("Virtual button mouse_down", this, x, y);
  }

};

SkillButton = function(x,y, width, height, skill) {
  var ofsetted_x = x;
  var ofsetted_y = y;

  var background = Image.from_src(skill.icon_src);

  var cooldown_bars = global_config.skills.cooldown_bar_sprites;
  var cooldown_width = global_config.skills.cooldown_bar_width;
  var cooldown_height = global_config.skills.cooldown_bar_height;
  var cooldown_half_width = Math.floor(width/2);
  var cooldown_half_height = Math.floor(height/2);

  var cooldown = new Sprite();
  cooldown.set_image_src(global_config.skills.cooldown_bar_src);
  cooldown.set_size(cooldown_width, cooldown_height);
  cooldown.define(0,'cool', this.cooldown_bars);
  cooldown.set('cool');

  var active_bars = global_config.skills.active_bar_sprites;
  var active_width = global_config.skills.active_bar_width;
  var active_height = global_config.skills.active_bar_height;
  var active_half_width = Math.floor(width/2);
  var active_half_height = Math.floor(height/2);

  var active = new Sprite();
  active.set_image_src(global_config.skills.active_bar_src);
  active.set_size(active_width, active_height);
  active.define(0,'cool', this.active_bars);
  active.set('cool');

  return {
    draw: draw,
    mouse_down: mouse_down,
    inside: inside,
    ofset: ofset,
  };

  // just for the interface's sake
  function draw(context) {
    context.drawImage(background, ofsetted_x, ofsetted_y);

    var frame = Math.floor( skill.active_coef() * active_bars);
    active.draw_frame(context, ofsetted_x + active_half_width, ofsetted_y + active_half_height, frame);

    frame = Math.floor( skill.cooldown_coef() * cooldown_bars);
    cooldown.draw_frame(context, ofsetted_x + cooldown_half_width, ofsetted_y + cooldown_half_height, frame);

    debug.do_draw('panels') && draw_debug(context);
  } 

  function draw_debug(context) {
    context.fillStyle = '#f00';
    context.strokeStyle = '#f00';
    context.beginPath();
    context.moveTo(ofsetted_x, ofsetted_y);
    context.lineTo(ofsetted_x + width, ofsetted_y);
    context.lineTo(ofsetted_x + width, ofsetted_y + height);
    context.lineTo(ofsetted_x, ofsetted_y + height);
    context.lineTo(ofsetted_x, ofsetted_y);
    context.closePath();
    context.stroke();
    context.fillText("Skill"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function inside(test_x, test_y) {
    if (test_x > ofsetted_x && test_x < ofsetted_x + width &&
        test_y > ofsetted_y && test_y < ofsetted_y + height) {
      return true;
    } else {
      return false;
    }
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function mouse_down(x,y) {
    skill.use(map.level);
  }

};

HelperSidePanel = function(background_src) {
  var config = global_config.side_panel; 

  var panel = PanelFromSrc(0, 0, 1000, 600, background_src);

  var close_button = VirtualButton(0, 0, 1000, 600);
  close_button.mouse_down = function() { 
    debug.debug("helper_close#mouse_down");
    panel.on_close();
  };
  panel.add_element(close_button);

  return panel;
};
