FailurePanel = function(violki, bonus_violki) {
  var config = global_config.failure_panel; 

  var background_src = config.background_src;
  var x = config.x, y = config.y;
  var width = config.width, height = config.height;

  var panel = PanelFromSrc(x, y, width, height, background_src);

  var ok_button = VirtualButton(config.button_x, config.button_y, config.button_width, config.button_height);
  ok_button.mouse_down = function() { 
    account.violki += violki;
    account.violki += bonus_violki;
    panel.on_close();
  };
  panel.add_element(ok_button);

  var text = Lang.get('failure_panel');
  text = text.replace('{prize}', violki);
  text = text.replace('{bonus}', bonus_violki);
  text = text.replace('{viols}', violki + bonus_violki);

  var textarea = TextArea(config.textarea_x, config.textarea_y, text.split('\n'));
  textarea.set_font(config.textarea_font);
  textarea.set_color(config.textarea_color);
  textarea.set_interline(config.textarea_interline);
  panel.add_element(textarea);

  return panel;
};
