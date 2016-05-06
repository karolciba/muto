function Interface() {
  this.key_left = 37;
  this.key_up = 38;
  this.key_right = 39;
  this.key_down = 40;

  this.last_click_time = 0;
  this.mouse_down = false;
  this.drag = false;
  this.mouse_down_x = 0;
  this.mouse_down_y = 0;

  if (!localStorage.lang) {
    localStorage.lang = 'en';
  }

  this.theCanvas = document.getElementById("canvas");
  this.context = this.theCanvas.getContext("2d");

  // account = new Account();
  // this.account = account;

  this.preloader = new Preloader(this, this.context);
  this.preloader.draw();
  this.preloader.preload();

  this.audio = AudioController();
}

Interface.prototype.start = function() {
  var canvasDiv = document.getElementById("mapPanel");

  account = new Account();
  this.account = account;

  map = new Map(this.theCanvas);
  map.fillWindow(window);
  // map.set_account(account);

  this.map = map;

  // menu = new Menu(theCanvas);
  // menu.set_account(account);
  // menu.draw();
  var menu_panel = MenuPanel();
  
  this.show(menu_panel);
  // this.menu = menu;
  // this.active = menu;

  canvasDiv.addEventListener("mousedown", this.getMouseDownListener(), false);
  canvasDiv.addEventListener("mouseup", this.getMouseUpListener(), false);
  canvasDiv.addEventListener("mousemove", this.getMouseMoveListener(), false);
  canvasDiv.addEventListener("mouseout", this.getMouseOutListener(), false);
  canvasDiv.addEventListener("touchstart", this.getMouseDownListener(), false);
  canvasDiv.addEventListener("touchend", this.getMouseUpListener(), false);
  canvasDiv.addEventListener("touchmove", this.getMouseMoveListener(), false);
  document.addEventListener("keydown", this.getKeyDownListener(), false);
  window.addEventListener('resize', function() {
    iface.active.draw();
  });
  window.addEventListener("unload", function() {
    if (map && map.level) {
      map.level.on_exit();
    }
    for (var i = 0; i < this.account.soldiers.length; i++) {
      var soldier = this.account.soldiers[i];
      if (soldier) {
        soldier.revive();
      }
    }
  }, false);

  this.show_menu();

  window.engine = map.engine;
  engine = map.engine;
  window.map = map;
  window.account = account;
  
  window.audio = this.audio;

  this.audio.play_theme(global_config.game_theme_src, global_config.game_theme_volume, true);
};

Interface.prototype.show_menu = function() {
  for (var i = 0; i < account.soldiers.length; i++) {
    var soldier = account.soldiers[i];
    if (soldier) {
      soldier.revive();
    }
  }
  this.account.persist();

  var menu_panel = MenuPanel();
  this.show(menu_panel);

  this.map.stop();
  this.active.draw();
}

Interface.prototype.start_level = function(level_definition) {
  
  this.map.account = this.account;
  this.map.prepare_level(level_definition);

  for (var i = 0; i < this.account.soldiers.length; i++) {
    var soldier = this.account.soldiers[i];
    this.map.add_soldier(soldier);
    this.map.set_active_soldier(soldier);
  }

  this.show_map();
}

Interface.prototype.show_map = function() {
  this.account.persist();
  this.active = this.map;
  this.map.start();
  // this.active.draw();
};

Interface.prototype.show = function(element) {
  this.active = element;
  element.set_context(this.context);
  this.active.draw();
};

Interface.prototype.getMouseOutListener = function() {
  return function(iface) {
    return function(e) {
      // debug.debug("called from",iface,e);
      // that.map.mouse_down(e.clientX, e.clientY);
      // mobilne przegladarki wysylaja czasem jakies smieci z ujemnymi wspolrzednymi
      if (e.layerX < 0 || e.layerY < 0) return;
      // console.log(e.layerX, e.layerY);

      iface.active.mouse_out && iface.active.mouse_out();

    };
  }(this);
};

Interface.prototype.getMouseDownListener = function() {
  return function(iface) {
    return function(e) {
      // debug.debug("called from",iface,e);
      // that.map.mouse_down(e.clientX, e.clientY);
      // mobilne przegladarki wysylaja czasem jakies smieci z ujemnymi wspolrzednymi
      if (e.layerX < 0 || e.layerY < 0) return;
      // console.log(e.layerX, e.layerY);

      var time = (new Date()).getTime();

      if (time - iface.last_click_time < 500) {
        iface.active.mouse_double(e.layerX, e.layerY);
      } else {
        iface.last_click_time = time;
        iface.mouse_down = true;
        iface.mouse_down_x = e.layerX;
        iface.mouse_down_y = e.layerY;
        iface.active.mouse_down(e.layerX, e.layerY);
      }

    };
  }(this);
};

Interface.prototype.getMouseUpListener = function() {
  return function(iface) {
    return function(e) {
      // e.preventDefault();
      // debug.debug("called from",iface,e);
      // that.map.mouse_down(e.clientX, e.clientY);
      // mobilne przegladarki wysylaja czasem jakies smieci z ujemnymi wspolrzednymi
      if (e.layerX < 0 || e.layerY < 0) return;
      iface.mouse_down = false;
      iface.active.mouse_up(e.layerX, e.layerY);
      if (iface.drag) {
        iface.drag = false;
        iface.active.on_drop && iface.active.on_drop(e.layerX, e.layerY);
      }
    };
  }(this);
};

Interface.prototype.getMouseMoveListener = function() {
  return function(iface) {
    return function(e) {
      e.preventDefault();
      // e.stopPropagation();
      // debug.debug("called from",iface,e);
      // that.map.mouse_down(e.clientX, e.clientY);
      // mobilne przegladarki wysylaja czasem jakies smieci z ujemnymi wspolrzednymi
      if (e.layerX < 0 || e.layerY < 0) return;
      if (iface.mouse_down && !iface.drag) {
        iface.drag = true;
        iface.active.on_drag && iface.active.on_drag(e.layerX, e.layerY);
      } 
      iface.active.mouse_move(e.layerX, e.layerY);
    };
  }(this);
};

Interface.prototype.getKeyDownListener = function() {
  that = this;
  return function(e) {
    debug.trace(e.keyCode);
    that.map.key_down(e.keyCode);
  }
}

Interface.prototype.getKeyUpListener = function() {
  that = this;
  return function() {
    debug.debug(arguments);
  }
}

