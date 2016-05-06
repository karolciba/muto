EndPanel = function() {
  var config = global_config.end_panel; 

  var background_src = config.background_src;
  var x = config.x, y = config.y;
  var width = config.width, height = config.height;

  var panel = PanelFromSrc(x, y, width, height, background_src);

  var text_area = SourcedTextArea(
      config.text_area_x,
      config.text_area_y,
      function() {
        return Lang.get('end_panel_text_area').split('\n');
      }
  );
  text_area.set_font(config.text_area_font);
  text_area.set_interline(config.text_area_interline);
  text_area.set_color(config.text_area_color);
  panel.add_element(text_area);

  var link_area = SourcedTextArea(
      config.link_area_x,
      config.link_area_y,
      function() {
        return Lang.get('end_panel_link_area').split('\n');
      }
  );
  link_area.set_font(config.link_area_font);
  link_area.set_interline(config.link_area_interline);
  link_area.set_color(config.link_area_color);
  panel.add_element(link_area);

  var text, button;

  text = SourcedText(config.link_0_x, config.link_0_y, function() {
    return Lang.get('end_panel_link_0');
  });
  text.set_font(config.link_0_font);
  text.set_color(config.link_0_color);
  panel.add_element(text);
  button = VirtualButton(config.link_0_x, config.link_0_y - config.link_0_height, config.link_0_width, config.link_0_height);
  button.mouse_down = function() {
    console.log("EndPannel close");
    panel.on_close();
  };
  panel.add_element(button);
  
  text = SourcedText(config.link_1_x, config.link_1_y, function() {
    return Lang.get('end_panel_link_1');
  });
  text.set_font(config.link_1_font);
  text.set_color(config.link_1_color);
  panel.add_element(text);
  button = VirtualButton(config.link_1_x, config.link_1_y - config.link_1_height, config.link_1_width, config.link_1_height);
  button.mouse_down = function() {
    var url = Lang.get('end_panel_link_1_url');
    var win = window.open(url, '_blank');
  };
  panel.add_element(button);

  text = SourcedText(config.link_2_x, config.link_2_y, function() {
    return Lang.get('end_panel_link_2');
  });
  text.set_font(config.link_2_font);
  text.set_color(config.link_2_color);
  panel.add_element(text);
  button = VirtualButton(config.link_2_x, config.link_2_y - config.link_2_height, config.link_2_width, config.link_2_height);
  button.mouse_down = function() {
    var url = Lang.get('end_panel_link_2_url');
    var win = window.open(url, '_blank');
  };
  panel.add_element(button);

  text = SourcedText(config.link_3_x, config.link_3_y, function() {
    return Lang.get('end_panel_link_3');
  });
  text.set_font(config.link_3_font);
  text.set_color(config.link_3_color);
  panel.add_element(text);
  button = VirtualButton(config.link_3_x, config.link_3_y - config.link_3_height, config.link_3_width, config.link_3_height);
  button.mouse_down = function() {
    var url = Lang.get('end_panel_link_3_url');
    var win = window.open(url, '_blank');
  };
  panel.add_element(button);

  return panel;
};
