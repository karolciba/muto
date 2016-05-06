TipPanel = function(backgrounds_srcs) {
  var config = global_config.tip_panel; 

  var x = config.x, y = config.y;
  var width = config.width, height = config.height;

  var background_number = 0;

  var panel = PanelFromSrc(x, y, width, height, backgrounds_srcs[background_number]);

  var next_button = VirtualButton(config.next_button_x, config.next_button_y, config.next_button_width, config.next_button_height);
  next_button.mouse_down = function() { 
    debug.debug("next_buttwon#mouse_down");
    background_number += 1;
    var background_src = backgrounds_srcs[background_number];
    var background;

    if (background_src) {
      background = Image.from_src(background_src);
      panel.set_background(background);
      panel.draw();
    } else {
      panel.on_close();
    }
  };
  panel.add_element(next_button);

  var skip_button = VirtualButton(config.skip_button_x, config.skip_button_y, config.skip_button_width, config.skip_button_height);
  skip_button.mouse_down = function() { 
    debug.debug("skip_buttwon#mouse_down");
    panel.on_close();
  };
  panel.add_element(skip_button);

  return panel;
};
