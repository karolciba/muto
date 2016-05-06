SpeechPanel = function(speeches) {
  var config = global_config.speech_panel; 

  var x = config.x, y = config.y;
  var width = config.width, height = config.height;

  var background_number = 0;

  var panel = PanelFromSrc(x, y, width, height, speeches[background_number].background);

  var text = Lang.get(speeches[background_number].text);
  var textarea = TextArea(config.textarea_x, config.textarea_y, text.split('\n'));
  textarea.set_font(config.textarea_font);
  textarea.set_color(config.textarea_color);
  textarea.set_interline(config.textarea_interline);
  panel.add_element(textarea);

  var next_button = VirtualButton(config.next_button_x, config.next_button_y, config.next_button_width, config.next_button_height);
  next_button.mouse_down = function() { 
    debug.debug("next_buttwon#mouse_down");
    background_number += 1;
    var background_src = speeches[background_number].background;
    var background;
    var text;

    if (background_src) {
      map.redraw();
      background = Image.from_src(background_src);
      panel.set_background(background);
      text = Lang.get(speeches[background_number].text);
      textarea.set_text(text.split('\n'));
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
