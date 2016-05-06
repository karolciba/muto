MenuPanel = function() {
  var config = global_config.menu_panel;

  var panel = PanelFromSrc(config.x, config.y, config.width, config.height, config.background_src);

  for (var i = 0; i < account.soldiers.length; i++) {
    var soldier = account.soldiers[i];
    var soldier_x = config.soldiers_x + i * config.soldiers_width;
    var soldier_y = config.soldiers_y;

    var soldier_panel = SoldierMenuPanel(soldier, soldier_x, soldier_y);
  }

  var helper_background_src = config.helper_map_background_src;
  helper_button = ButtonFromSrc(
      config.helper_button_x,
      config.helper_button_y,
      config.helper_button_width,
      config.helper_button_height,
      config.helper_button_src
  );
  helper_button.mouse_down = function() {
    var helper_panel = HelperSidePanel(helper_background_src);
    helper_panel.on_close = function() {
      iface.active = panel;
      panel.draw();
    }
    iface.show(helper_panel);
  };
  panel.add_element(helper_button);
  
  var map_panel = MapPanel();
  panel.add_element(map_panel);
  var shop_panel = ShopPanel();
  panel.add_element(shop_panel);
  var options_panel = OptionsPanel();
  panel.add_element(options_panel);

  var map_button = StateButtonFromSrc(
      config.map_button_x,
      config.map_button_y,
      config.map_button_width,
      config.map_button_height,
      config.map_button_active_src,
      config.map_button_inactive_src
  );
  map_button.activate();
  panel.add_element(map_button);
  var shop_button = StateButtonFromSrc(
      config.shop_button_x,
      config.shop_button_y,
      config.shop_button_width,
      config.shop_button_height,
      config.shop_button_active_src,
      config.shop_button_inactive_src
  );
  panel.add_element(shop_button);
  var options_button = StateButtonFromSrc(
      config.options_button_x,
      config.options_button_y,
      config.options_button_width,
      config.options_button_height,
      config.options_button_active_src,
      config.options_button_inactive_src
  );
  panel.add_element(options_button);
  var credits_button = ButtonFromSrc(
      config.credits_button_x,
      config.credits_button_y,
      config.credits_button_width,
      config.credits_button_height,
      config.credits_button_active_src
  );
  panel.add_element(credits_button);
  credits_button.mouse_down = function() {
    window.open(Lang.get(config.credits_button_link),'_blank');
  };
  var support_button = ButtonFromSrc(
      config.support_button_x,
      config.support_button_y,
      config.support_button_width,
      config.support_button_height,
      config.support_button_active_src
  );
  panel.add_element(support_button);
  support_button.mouse_down = function() {
    window.open(Lang.get(config.support_button_link),'_blank');
  };

  map_button.on_active = function() {
    debug.debug("MapButton#on_active");
    map_panel.show();
    map_button.activate();
    shop_panel.hide();
    shop_button.deactivate();
    options_panel.hide();
    options_button.deactivate();
    helper_background_src = config.helper_map_background_src;
    panel.draw();
  };
  shop_button.on_active = function() {
    debug.debug("ShopButton#on_active");
    map_panel.hide();
    map_button.deactivate();
    shop_panel.show();
    shop_button.activate();
    options_panel.hide();
    options_button.deactivate();
    helper_background_src = config.helper_shop_background_src;
    panel.draw();
  };
  options_button.on_active = function() {
    debug.debug("OptionsButton#on_active");
    map_panel.hide();
    map_button.deactivate();
    shop_panel.hide();
    shop_button.deactivate();
    options_panel.show();
    options_button.activate();
    helper_background_src = config.helper_options_background_src;
    panel.draw();
  };
  map_panel.show();
  map_button.activate();
  shop_panel.hide();
  shop_button.deactivate();
  options_panel.hide();
  options_button.deactivate();

  var version = TextArea(config.version_x, config.version_y, [ Lang.get('menu_version_number') ] );
  panel.add_element(version);

  return panel;

  function MapPanel() {
    var config = global_config.menu_panel;

    var map_panel = SubPanelFromSrc(config.map_x, config.map_y, config.map_width, config.map_height, config.map_background_src);

    var levels = new Levels();
    var available_levels = levels.get_available_levels(account.passed_levels);
    var selected = available_levels[available_levels.length - 1];

    var info = SourcedTextArea(
        config.map_info_x, 
        config.map_info_y,
        function() {
          if (selected) {
            return Lang.get(selected.desc).split('\n');
          } else {
            return [];
          }
        }
    );
    info.set_font(config.map_info_font);
    info.set_interline(config.map_info_interline);
    info.set_color(config.map_info_color);
    map_panel.add_element(info);

    var name = SourcedText(
        config.map_name_x, 
        config.map_name_y,
        function() {
          if (selected) {
            return Lang.get(selected.name);
          } else {
            return [];
          }
        }
    );
    name.set_font(config.map_name_font);
    name.set_color(config.map_name_color);
    map_panel.add_element(name);

    var start_button = StateButtonFromSrc(
        config.map_start_button_x,
        config.map_start_button_y,
        config.map_start_button_width,
        config.map_start_button_height,
        config.map_start_button_active_src,
        config.map_start_button_inactive_src
    );
    start_button.mouse_down = function(x,y) {
      debug.debug("StartButton#on_active", selected);
      // if (account.level_passed(selected.id) || selected.previous == null || account.level_passed(selected.previous)) {
        debug.debug("Startuje poziom", selected);
        iface.start_level(selected);
      // } else {
        // debug.debug("Poziom niedostepny", selected);
      // }
    };
    if (account.level_passed(selected.id) || selected.previous == null || account.level_passed(selected.previous)) {
      start_button.activate();
    } else {
      start_button.deactivate();
    }
    map_panel.add_element(start_button);


    for (var i = 0; i < available_levels.length; i++) {
      var def = available_levels[i];
      // var level_text = TextArea(config.map_levels_x + def.map_x, config.map_levels_y + def.map_y, [ "X" ]);
      // map_panel.add_element(level_text);
      var level_button = StateButtonFromSrc(
          config.map_levels_x + def.map_x,
          config.map_levels_y + def.map_y,
          config.map_levels_button_width,
          config.map_levels_button_height,
          config.map_levels_button_active_src,
          config.map_levels_button_inactive_src
      );

      // if (account.level_passed(def.id) || def.previous == null || account.level_passed(def.previous)) {
        map_panel.add_element(level_button);
      // }

      // if (account.level_passed(def.id)) {
      if (def.replay) {
        level_button.activate();
      }

      level_button.mouse_down = function(def) {
        return function() {
          debug.debug("LevelButton#mouse_down");
          selected = def;

          if (account.level_passed(def.id) || def.previous == null || account.level_passed(def.previous)) {
            start_button.activate();
          } else {
            start_button.deactivate();
          }

          panel.draw();
        };
      }(def);

    }

    return map_panel;
  }

  function ShopPanel() {
    var config = global_config.menu_panel;

    var shop_panel = SubPanelFromSrc(config.shop_x, config.shop_y, config.shop_width, config.shop_height, config.shop_background_src);
    var active;

    var white_button = StateButtonFromSrc(
        config.shop_white_button_x,
        config.shop_white_button_y,
        config.shop_white_button_width,
        config.shop_white_button_height,
        config.shop_white_button_active_src,
        config.shop_white_button_inactive_src
    );
    white_button.on_active = function() {
      items = account.items_factory.get_white_items(account.passed_levels);
      white_button.activate();
      ranged_button.deactivate();
      armour_button.deactivate();
      aids_button.deactivate();
      active = white_button;
      panel.draw();
    };
    white_button.activate();
    shop_panel.add_element(white_button);
    var ranged_button = StateButtonFromSrc(
        config.shop_ranged_button_x,
        config.shop_ranged_button_y,
        config.shop_ranged_button_width,
        config.shop_ranged_button_height,
        config.shop_ranged_button_active_src,
        config.shop_ranged_button_inactive_src
    );
    ranged_button.on_active = function() {
      items = account.items_factory.get_ranged_items(account.passed_levels);
      white_button.deactivate();
      ranged_button.activate();
      armour_button.deactivate();
      aids_button.deactivate();
      active = ranged_button;
      panel.draw();
    };
    shop_panel.add_element(ranged_button);
    var armour_button = StateButtonFromSrc(
        config.shop_armour_button_x,
        config.shop_armour_button_y,
        config.shop_armour_button_width,
        config.shop_armour_button_height,
        config.shop_armour_button_active_src,
        config.shop_armour_button_inactive_src
    );
    armour_button.on_active = function() {
      items = account.items_factory.get_armour_items(account.passed_levels);
      panel.draw();
      white_button.deactivate();
      ranged_button.deactivate();
      armour_button.activate();
      aids_button.deactivate();
      active = armour_button;
      panel.draw();
    };
    shop_panel.add_element(armour_button);
    var aids_button = StateButtonFromSrc(
        config.shop_aids_button_x,
        config.shop_aids_button_y,
        config.shop_aids_button_width,
        config.shop_aids_button_height,
        config.shop_aids_button_active_src,
        config.shop_aids_button_inactive_src
    );
    aids_button.on_active = function() {
      items = account.items_factory.get_aids_items(account.passed_levels);
      white_button.deactivate();
      ranged_button.deactivate();
      armour_button.deactivate();
      aids_button.activate();
      active = aids_button;
      panel.draw();
    };
    shop_panel.add_element(aids_button);

    var items = account.items_factory.get_white_items(account.passed_levels);
    var selected;

    for (var row = 0; row < config.shop_slots_rows; row++) {
      for (var col = 0; col < config.shop_slots_cols; col++) {
        var slot_x = config.shop_slots_x + col * config.shop_slots_slot_width;
        var slot_y = config.shop_slots_y + row * config.shop_slots_slot_height;
        var slot = SourcedShopSlot(
            slot_x,
            slot_y,
            config.shop_slots_slot_width,
            config.shop_slots_slot_height,
            function(row,col) { return function() { return items[ col + row * config.shop_slots_cols ]; }; }(row,col),
            function(row,col) { return function(item) { return items[ col + row * config.shop_slots_cols ] = item; }; }(row,col),
            'shop'
        );
        slot.mouse_down = function(slot) {
          return function() {
            debug.debug("shopSlot#mouse_down");
            selected = slot.get_item();
            panel.draw();
          };
        }(slot);
        shop_panel.add_element(slot);
      }
    }
    
    var desc = SourcedTextArea(
        config.shop_info_x,
        config.shop_info_y,
        function() {
          if (selected) {
            return Lang.get(selected.desc).split('\n');
          } else {
            return [];
          }
        }
    );
    desc.set_font(config.shop_info_font);
    desc.set_interline(config.shop_info_interline);
    desc.set_color(config.shop_info_color);
    desc.hide();
    shop_panel.add_element(desc);

    var info = SourcedTextArea(
        config.shop_info_x,
        config.shop_info_y,
        function() {
          if (selected && selected.info) {

            var value = selected.base_price;
            if (selected.quantity) {
              value = value * selected.quantity;
            }
            if (selected.condition) {
              value = Math.floor(value * selected.condition / selected.max_condition);
            }

            var translated = Lang.get(selected.info);
            translated = translated.replace("{price}", value);
            translated = translated.replace("{condition}", selected.condition);

            return translated.split('\n');
          } else {
            return [];
          }
        }
    );
    info.set_font(config.shop_info_font);
    info.set_interline(config.shop_info_interline);
    info.set_color(config.shop_info_color);
    shop_panel.add_element(info);

    var page_button = StateButtonFromSrc(
        config.shop_page_button_x,
        config.shop_page_button_y,
        config.shop_page_button_width,
        config.shop_page_button_height,
        config.shop_page_button_front_src,
        config.shop_page_button_back_src
    );
    page_button.on_active = function() {
      console.log("on active");
      info.hide();
      desc.show();
      panel.draw();
      return true;
    };
    page_button.on_inactive = function() {
      console.log("on inactive");
      desc.hide();
      info.show();
      panel.draw();
      return true;
    };
    shop_panel.add_element(page_button);

    var violki = SourcedText(config.shop_violki_x, config.shop_violki_y, function() { return account.violki; });
    violki.set_font(config.shop_violki_font);
    shop_panel.add_element(violki);

    return shop_panel;
  }

  function SoldierMenuPanel(soldier, x, y) {
    var config = global_config.menu_panel;

    var image = Img(x + config.soldiers_image_x, y + config.soldiers_image_y, config.soldiers_image_width, config.soldiers_image_height, soldier.icon);
    panel.add_element(image);
    image.on_drop = function(x,y, dropped) {
      if (dropped) {
        var source = dropped.get_source();
        var item = source.get_item();
        if (item && item instanceof Aid) {
          item.use(soldier);
          account.violki -= item.base_price;
        }
      }
    };


    var info = SourcedTextArea(x + config.soldiers_info_x, y + config.soldiers_info_y, function() {
      var text = Lang.get('menu_soldier_info');
      var weapon = soldier.weapon || soldier.natural_weapon;
      var armour = soldier.armour || soldier.natural_armour;
      text = text.replace('{name}', Lang.get(soldier.name));
      text = text.replace('{life}', soldier.max_life);
      text = text.replace('{attack}', soldier.attack);
      text = text.replace('{weapon}', weapon.attack);
      text = text.replace('{attack_sum}', soldier.attack + weapon.attack);
      text = text.replace('{defence}', soldier.defence);
      text = text.replace('{armour}', armour.defence);
      text = text.replace('{defence_sum}', soldier.defence + armour.defence);

      return text.split('\n');
    });
    info.set_font(config.soldiers_info_font);
    info.set_color(config.soldiers_info_color);
    info.set_interline(config.soldiers_info_interline);
    panel.add_element(info);

    var weapon = SourcedSlot(
        x + config.soldiers_weapon_x, 
        y + config.soldiers_weapon_y, 
        config.soldiers_weapon_width, 
        config.soldiers_weapon_height,
        function() { return soldier.get_weapon(); },
        function(item) { return soldier.set_weapon(item); },
        'panel'
    );
    panel.add_element(weapon);

    var armour = SourcedSlot(
        x + config.soldiers_armour_x,
        y + config.soldiers_armour_y,
        config.soldiers_armour_width,
        config.soldiers_armour_height,
        function() { return soldier.get_armour(); },
        function(item) { return soldier.set_armour(item); },
        'panel'
    );
    panel.add_element(armour);

  }

  function OptionsPanel() {
    var config = global_config.menu_panel;

    var options_panel = SubPanelFromSrc(config.options_x, config.options_y, config.options_width, config.options_height, config.options_background_src);

    var en_button = StateButtonFromSrc(
      config.options_en_button_x,
      config.options_en_button_y,
      config.options_en_button_width,
      config.options_en_button_height,
      config.options_en_button_active_src,
      config.options_en_button_inactive_src
    );
    options_panel.add_element(en_button);
    if (localStorage.lang == 'en') {
      en_button.activate();
    }

    var pl_button = StateButtonFromSrc(
      config.options_pl_button_x,
      config.options_pl_button_y,
      config.options_pl_button_width,
      config.options_pl_button_height,
      config.options_pl_button_active_src,
      config.options_pl_button_inactive_src
    );
    options_panel.add_element(pl_button);
    if (localStorage.lang == 'pl') {
      pl_button.activate();
    }

    en_button.on_active = function() {
      localStorage.lang = 'en';
      pl_button.deactivate();
      en_button.activate();
      location.reload();
      panel.draw();
      return true;
    };
    pl_button.on_active = function() {
      localStorage.lang = 'pl';
      en_button.deactivate();
      pl_button.activate();
      location.reload();
      panel.draw();
      return true;
    };

    var music_button = StateButtonFromSrc(
      config.options_music_button_x,
      config.options_music_button_y,
      config.options_music_button_width,
      config.options_music_button_height,
      config.options_music_button_active_src,
      config.options_music_button_inactive_src
    );
    options_panel.add_element(music_button);
    if (iface.audio.is_music_on()) {
      music_button.activate();
    }
    music_button.on_active = function() {
      iface.audio.music_on();
      music_button.activate();
      panel.draw();
      return false;
    };
    music_button.on_inactive = function() {
      iface.audio.music_off();
      music_button.deactivate();
      panel.draw();
      return false;
    };

    var sound_button = StateButtonFromSrc(
      config.options_sound_button_x,
      config.options_sound_button_y,
      config.options_sound_button_width,
      config.options_sound_button_height,
      config.options_sound_button_active_src,
      config.options_sound_button_inactive_src
    );
    options_panel.add_element(sound_button);
    if (iface.audio.is_sound_on()) {
      sound_button.activate();
    }
    sound_button.on_active = function() {
      iface.audio.sound_on();
      sound_button.activate();
      panel.draw();
      return false;
    };
    sound_button.on_inactive = function() {
      iface.audio.sound_off();
      sound_button.deactivate();
      panel.draw();
      return false;
    };

    return options_panel;
  }
};
