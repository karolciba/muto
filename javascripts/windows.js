Panel = function(x, y, width, height, background) {

  var elements = [];
  var dragged;
  var helpers = Helpers();
  var context;
  var visible = true;

  var ofsetted_x = x;
  var ofsetted_y = y;

  var on_draw_callback;

  return {
    // UI
    mouse_down: mouse_down,
    mouse_up: mouse_up,
    mouse_move: mouse_move,
    mouse_double: mouse_double,
    on_drag: on_drag,
    on_drop: on_drop,
    on_close: on_close,
    set_on_draw: set_on_draw,
    inside: inside,
    ofset: ofset,

    // elements
    add_element: add_element,

    // drawing
    draw: draw,
    set_context: set_context,
    set_background: set_background,
    show: show,
    hide: hide,
  };

  function inside(test_x, test_y) {
    if (!visible) {
      return false;
    }

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
    helpers.array_each(elements, function(e) {
      e.ofset(ofsetted_x,ofsetted_y);
    });
  }

  function mouse_down(x,y) {
    debug.trace("Panel#mouse_down",this,x,y);
    var element = helpers.array_select_first(elements, function(e) { return e.inside(x, y); });

    if (element) {
      element.mouse_down(x,y);
    }
  }

  function mouse_up(x,y) {
    debug.trace("Panel#mouse_up",this,x,y);
  }

  var last_draw = (new Date()).getTime();
  function mouse_move(x,y) {
    // debug.trace("Panel#mouse_move",this,x,y);
    if (dragged) {
      dragged.set_pos(x,y);
      var now = (new Date()).getTime();
      if (!last_draw || now - last_draw > 100) {
        last_draw = now;
        draw();
      }
    }
  }

  function mouse_double(x,y) {
    debug.trace("Panel#mouse_double",this,x,y);
    var element = helpers.array_select_first(elements, function(e) { return e.inside(x, y); });

    if (element) {
      element.mouse_double(x,y);
    }
  }

  function on_drag(x,y) {
    debug.trace("Panel#on_drag",this,x,y);
    var element = helpers.array_select_first(elements, function(e) { return e.inside(x,y); });
    if (element) {
      dragged = element.on_drag(x,y);
      return dragged;
    }
  }

  function on_drop(x,y,dropped) {
    dropped = dropped || dragged;
    debug.trace("Panel#on_drop",this,x,y);
    if (dropped) {
      var element = helpers.array_select_first(elements, function(e) { return e.inside(x,y); });
      if (element) {
        element.on_drop(x,y, dropped);
      }
      dropped = null;
      dragged = null;
    }
    draw();
  }

  function on_close() {
    debug.trace("Panel#on_close");
  }

  function set_on_draw(callback) {
    on_draw_callback = callback;
  }

  function add_element(element) {
    element.ofset(ofsetted_x,ofsetted_y);
    elements.push(element);
  }

  function draw(draw_context) {
    draw_context = draw_context || context;

    if (!draw_context) {
      return;
    }

    if (!visible) {
      return;
    }
    on_draw_callback && on_draw_callback();
    try {
      draw_context.drawImage(background, x, y);
    } catch (e) {
      console.log("Can't draw image "+background.src, e, background);
    }
    helpers.array_each(elements, function(e) { e.draw(draw_context); });
    if (dragged) {
      dragged.draw(draw_context);
    }
    debug.do_draw('panels') && draw_debug(draw_context);
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
    context.fillText("P"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function set_context(setted) {
    context = setted;
  }

  function set_background(new_background) {
    background = new_background;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }

};

PanelFromSrc = function(x, y, width, height, background_src) {
  var background = Image.from_src(background_src);
  return Panel(x, y, width, height, background);
};

SubPanel = function(x, y, width, height, background) {

  var elements = [];
  var helpers = Helpers();
  var context;
  var visible = true;

  var ofsetted_x = x;
  var ofsetted_y = y;

  var on_draw_callback;

  return {
    // UI
    mouse_down: mouse_down,
    mouse_up: mouse_up,
    mouse_move: mouse_move,
    mouse_double: mouse_double,
    on_drag: on_drag,
    on_drop: on_drop,
    on_close: on_close,
    set_on_draw: set_on_draw,
    inside: inside,
    ofset: ofset,

    // elements
    add_element: add_element,

    // drawing
    draw: draw,
    set_context: set_context,
    set_background: set_background,
    show: show,
    hide: hide,
  };

  function inside(test_x, test_y) {
    if (!visible) {
      return false;
    }

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
    helpers.array_each(elements, function(e) {
      e.ofset(ofsetted_x,ofsetted_y);
    });
  }

  function mouse_down(x,y) {
    debug.trace("Panel#mouse_down",this,x,y);
    var element = helpers.array_select_first(elements, function(e) { return e.inside(x, y); });

    if (element) {
      element.mouse_down(x,y);
    }
  }

  function mouse_up(x,y) {
    debug.trace("Panel#mouse_up",this,x,y);
  }

  var last_draw = (new Date()).getTime();
  function mouse_move(x,y) {
  }

  function mouse_double(x,y) {
    debug.trace("Panel#mouse_double",this,x,y);
    var element = helpers.array_select_first(elements, function(e) { return e.inside(x, y); });

    if (element) {
      element.mouse_double(x,y);
    }
  }

  function on_drag(x,y) {
    debug.trace("Panel#on_drag",this,x,y);
    var element = helpers.array_select_first(elements, function(e) { return e.inside(x,y); });
    if (element) {
      dragged = element.on_drag(x,y);
      return dragged;
    }
  }

  function on_drop(x,y,dropped) {
    debug.trace("Panel#on_drop",this,x,y);
    if (dropped) {
      var element = helpers.array_select_first(elements, function(e) { return e.inside(x,y); });
      if (element) {
        element.on_drop(x,y, dropped);
      }
    }
    draw();
  }

  function on_close() {
    debug.trace("Panel#on_close");
  }

  function set_on_draw(callback) {
    on_draw_callback = callback;
  }

  function add_element(element) {
    element.ofset(ofsetted_x,ofsetted_y);
    elements.push(element);
  }

  function draw(draw_context) {
    draw_context = draw_context || context;

    if (!draw_context) {
      return;
    }

    if (!visible) {
      return;
    }
    on_draw_callback && on_draw_callback();
    draw_context.drawImage(background, x, y);
    helpers.array_each(elements, function(e) { e.draw(draw_context); });
    debug.do_draw('panels') && draw_debug(draw_context);
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
    context.fillText("P"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function set_context(setted) {
    context = setted;
  }

  function set_background(new_background) {
    background = new_background;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }

};

SubPanelFromSrc = function(x, y, width, height, background_src) {
  var background = Image.from_src(background_src);
  return SubPanel(x, y, width, height, background);
};

// Button that doesn't have background - button visualization is on panel background
// coordinates in ralation to pane not the whole canvas
VirtualButton = function(x, y, width, height) {

  var ofsetted_x = x;
  var ofsetted_y = y;

  return {
    draw: draw,
    mouse_down: mouse_down,
    inside: inside,
    ofset: ofset,
  };

  // just for the interface's sake
  function draw(context) { 
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
    context.fillText("VB"+x+"x"+y, ofsetted_x, ofsetted_y);
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
    console.log("Virtual button mouse_down", this, x, y);
  }

};

// Button with background
// coordinates in ralation to pane not the whole canvas
Button = function(x, y, width, height, background) {

  var ofsetted_x = x;
  var ofsetted_y = y;

  return {
    draw: draw,
    mouse_down: mouse_down,
    inside: inside,
    ofset: ofset,
    set_background: set_background,
  };

  // just for the interface's sake
  function draw(context) {
    context.drawImage(background, ofsetted_x, ofsetted_y);
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
    context.fillText("B"+x+"x"+y, ofsetted_x, ofsetted_y);
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

  function set_background(new_background) {
    background = new_background;
  }

  function mouse_down(x,y) {
    console.log("Button mouse_down", this, x, y);
  }

};

ButtonFromSrc = function(x, y, width, height, background_src) {
  var background = Image.from_src(background_src);
  return Button(x, y, width, height, background);
};

// State Button with background
// coordinates in ralation to pane not the whole canvas
StateButton = function(x, y, width, height, active_background, inactive_background) {

  var ofsetted_x = x;
  var ofsetted_y = y;

  var active = false;
  var visible = true;

  var that = {
    draw: draw,
    mouse_down: mouse_down,
    inside: inside,
    ofset: ofset,
    on_active: null,
    on_inactive: null,
    activate: activate,
    deactivate: deactivate,
    show: show,
    hide: hide,
  };

  return that;

  // just for the interface's sake
  function draw(context) {
    if (!visible) {
      return;
    }

    if (active) {
      context.drawImage(active_background, ofsetted_x, ofsetted_y);
    } else {
      context.drawImage(inactive_background, ofsetted_x, ofsetted_y);
    }
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
    context.fillText("SB"+x+"x"+y, ofsetted_x, ofsetted_y);
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
    console.log("Button mouse_down", this, x, y);
    if (!active && that.on_active) {
      if (that.on_active()) {
        active = true;
      }
    } else if (active && that.on_inactive) {
      if (that.on_inactive()) {
        active = false;
      }
    }
  }

  function activate() {
    active = true;
  }

  function deactivate() {
    active = false;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }


};

StateButtonFromSrc = function(x, y, width, height, active_background_src, inactive_background_src) {
  var active_background = Image.from_src(active_background_src);
  var inactive_background = Image.from_src(inactive_background_src);
  return StateButton(x, y, width, height, active_background, inactive_background);
};


// Button with background
// coordinates in ralation to pane not the whole canvas
Img = function(x, y, width, height, background) {

  var ofsetted_x = x;
  var ofsetted_y = y;

  return {
    draw: draw,
    mouse_down: mouse_down,
    inside: inside,
    ofset: ofset,
    set_background: set_background,
    on_drop: on_drop,
  };

  // just for the interface's sake
  function draw(context) {
    
	try {
    context.drawImage(background, ofsetted_x, ofsetted_y);
	} catch (e) {
		console.log(background);
	}
    debug.do_draw('panels') && draw_debug(context);
  } 

  function draw_debug(context) {
    context.fillText("I"+x+"x"+y, ofsetted_x, ofsetted_y);
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
    console.log("Img mouse_down", this, x, y);
  }

  function set_background(new_background) {
    background = new_background;
  }

  function on_drop(x,y,dropped) {
    console.log("Img#on_drop",dropped);
  }

};

ImgFromSrc = function(x, y, width, height, background_src) {
  var background = Image.from_src(background_src);
  return Img(x, y, width, height, background);
};

Slots = function(x, y, cols, rows, slot_width, slot_height) {
  var slots = [];
  var col, row;
  var helpers = Helpers();

  var ofsetted_x = x;
  var ofsetted_y = y;

  slot_width = slot_width || 50;
  slot_height = slot_height || 50;

  var width = cols * slot_width;
  var height = rows * slot_height;

  // creates slots
  for (row = 0; row < rows; row++) {
    for (col = 0; col < cols; col++) {
      slots.push( Slot( x + col * slot_width, y + row * slot_height, slot_width, slot_height) );
    }
  }

  return {
    draw: draw,

    ofset: ofset,
    inside: inside,

    mouse_down: mouse_down,
    mouse_up: mouse_up,
    on_drag: on_drag,
    on_drop: on_drop,
    on_draw: on_draw,

    get_items: get_items,
    add_item: add_item,
    add_items: add_items,
    put_item: put_item,
    put_items: put_items,
  };

  function draw(context) {
    helpers.array_each(slots, function(e) { e.draw(context); });
    debug.do_draw('panels') && draw_debug(context);
  } 

  function draw_debug(context) {
    context.fillStyle = '#ff0';
    context.strokeStyle = '#ff0';
    context.beginPath();
    context.moveTo(ofsetted_x, ofsetted_y);
    context.lineTo(ofsetted_x + width, ofsetted_y);
    context.lineTo(ofsetted_x + width, ofsetted_y + height);
    context.lineTo(ofsetted_x, ofsetted_y + height);
    context.lineTo(ofsetted_x, ofsetted_y);
    context.closePath();
    context.stroke();
    context.fillText("Ss"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function inside(test_x, test_y) {
    if (test_x > ofsetted_x && test_x < ofsetted_x + width &&
        test_y > ofsetted_y && test_y < ofsetted_y + height) {
      return true;
    } else {
      return false;
    }
  }

  function mouse_up(x,y) {
    debug.trace("Slots#mouse_up",this,x,y);
  }

  function mouse_down(x,y) {
    debug.trace("Slots#mouse_down",this,x,y);
  }

  function on_drag(x,y) {
    debug.trace("Slots on_drag", this);
    var slot = helpers.array_select_first(slots, function(e) { return e.inside(x,y); });
    if (slot) {
      return slot.on_drag(x,y);
    }
  }

  function on_drop(x,y, element) {
    debug.trace("Slots on_drop", this);
    var slot = helpers.array_select_first(slots, function(e) { return e.inside(x,y); });
    if (slot) {
      slot.on_drop(x,y, element);
    }
  }

  function on_draw() {
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
    helpers.array_each(slots, function(e) { e.ofset( ofset_x, ofset_y); });
  }

  function add_item(item) {
    var slot;

    // selects first empty slot
    slot = helpers.array_select_first( slots, function(e) { return e.is_empty(); });

    if (slot) {
      slot.set_item(item);
    }
  }

  function add_items(items) {
    helpers.array_each( items, function(that) {
      return function(item) {
        that.add_item(item);
      };
    }(this));
  }

  function put_item(pos, item) {
    slots[pos].set_item(item);
  }

  function put_items(items) {
    helpers.array_each( items, function(that) {
      return function(item, position) {
        that.put_item(position, item);
      };
    }(this));
  }

  function get_items() {
    var items = [];
    helpers.array_each(slots, function() {
      return function(slot, position) {
        items[position] = slot.get_item();
      };
    }());
    return items;
  }

};

SourcedSlots = function(x, y, cols, rows, slot_width, slot_height, source) {
  var slots = [];
  var col, row;
  var helpers = Helpers();

  var ofsetted_x = x;
  var ofsetted_y = y;

  slot_width = slot_width || 50;
  slot_height = slot_height || 50;

  var width = cols * slot_width;
  var height = rows * slot_height;

  // creates slots
  for (row = 0; row < rows; row++) {
    for (col = 0; col < cols; col++) {
      var slot = Slot( x + col * slot_width, y + row * slot_height, slot_width, slot_height);
      slot.set_item ( source[ col + row * cols ] );
      slots.push( slot );
    }
  }

  return {
    draw: draw,

    ofset: ofset,
    inside: inside,

    mouse_down: mouse_down,
    mouse_up: mouse_up,
    on_drag: on_drag,
    on_drop: on_drop,
    on_draw: on_draw,

    get_items: get_items,
    add_item: add_item,
    add_items: add_items,
    put_item: put_item,
    put_items: put_items,
  };

  function draw(context) {
    helpers.array_each(slots, function(e) { e.draw(context); });
    debug.do_draw('panels') && draw_debug(context);
  } 

  function draw_debug(context) {
    context.fillStyle = '#ff0';
    context.strokeStyle = '#ff0';
    context.beginPath();
    context.moveTo(ofsetted_x, ofsetted_y);
    context.lineTo(ofsetted_x + width, ofsetted_y);
    context.lineTo(ofsetted_x + width, ofsetted_y + height);
    context.lineTo(ofsetted_x, ofsetted_y + height);
    context.lineTo(ofsetted_x, ofsetted_y);
    context.closePath();
    context.stroke();
    context.fillText("Ss"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function inside(test_x, test_y) {
    if (test_x > ofsetted_x && test_x < ofsetted_x + width &&
        test_y > ofsetted_y && test_y < ofsetted_y + height) {
      return true;
    } else {
      return false;
    }
  }

  function mouse_up(x,y) {
    debug.trace("Slots#mouse_up",this,x,y);
  }

  function mouse_down(x,y) {
    debug.trace("Slots#mouse_down",this,x,y);
    var slot = helpers.array_select_first(slots, function(e) { return e.inside(x,y); });
    if (slot) {
      return slot.mouse_down(x,y);
    }
  }

  function on_drag(x,y) {
    debug.trace("Slots on_drag", this);
    var slot = helpers.array_select_first(slots, function(e) { return e.inside(x,y); });
    if (slot) {
      return slot.on_drag(x,y);
    }
  }

  function on_drop(x,y, element) {
    debug.trace("Slots on_drop", this);
    var slot = helpers.array_select_first(slots, function(e) { return e.inside(x,y); });
    if (slot) {
      slot.on_drop(x,y, element);
    }
  }

  function on_draw() {
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
    helpers.array_each(slots, function(e) { e.ofset( ofset_x, ofset_y); });
  }

  function add_item(item) {
    var slot;

    // selects first empty slot
    slot = helpers.array_select_first( slots, function(e) { return e.is_empty(); });

    if (slot) {
      slot.set_item(item);
    }
  }

  function add_items(items) {
    helpers.array_each( items, function(that) {
      return function(item) {
        that.add_item(item);
      };
    }(this));
  }

  function put_item(pos, item) {
    slots[pos].set_item(item);
  }

  function put_items(items) {
    helpers.array_each( items, function(that) {
      return function(item, position) {
        that.put_item(position, item);
      };
    }(this));
  }

  function get_items() {
    var items = [];
    helpers.array_each(slots, function() {
      return function(slot, position) {
        items[position] = slot.get_item();
      };
    }());
    return items;
  }

};
Slot = function(x, y, width, height) {
  var item;
  var ofsetted_x = x;
  var ofsetted_y = y;

  return {
    draw: draw,
    set_item: set_item,
    get_item: get_item,

    on_drag: on_drag,
    on_drop: on_drop,
    mouse_down: mouse_down,

    ofset: ofset,
    is_empty: is_empty,
    inside: inside,
  };

  function draw(context) {
    if (item) {
      item.draw(context, ofsetted_x, ofsetted_y);
    }
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
    context.fillText("S"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function inside(test_x, test_y) {
    if (test_x > ofsetted_x && test_x < ofsetted_x + width &&
        test_y > ofsetted_y && test_y < ofsetted_y + height) {
      return true;
    } else {
      return false;
    }
  }

  function set_item(setted_item) {
    item = setted_item;
  }

  function get_item() {
    return item;
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function is_empty() {
    return (!item);
  }

  // TODO: to chyba nie jest nalepiej przygotowane - jest scisle powiazane
  // z slotami, dropowanie na inne elementy niekompatybilne bedzie
  // sprawialo problemy
  function on_drag(x,y) {
    console.log('item on drag');
    if (item) {
      return Dragged(x,y, this);
    }
  }

  function on_drop(x,y, dropped) {
    console.log('item on drop', dropped);
    if (dropped) {
      // dropped.on_drop(this);
      swap_items(dropped.get_source(), this);
    }
  }

  function mouse_down(x,y) {
    return get_item();
  }
 
  // Functions
  // Slot bedacy czescia macierzy slotow
  // przeniesienie elementu po prostu zamienia dwa miejscami
  function swap_items(source, target) {
    debug.trace("Swap items", source, target);
    var temp;
    if (target.is_empty()) {
      target.set_item(source.get_item());
      source.set_item(null);
    } else {
      temp = target.get_item();
      target.set_item(source.get_item());
      source.set_item(temp);
    }
  }

};

SourcedSlot = function(x, y, width, height, get_callback, set_callback) {
  var ofsetted_x = x;
  var ofsetted_y = y;
  
  var type = 'panel';

  return {
    draw: draw,

    on_drag: on_drag,
    on_drop: on_drop,
    mouse_double: mouse_double,
    mouse_down: mouse_down,

    get_item: get_item,
    set_item: set_item,
    get_type: get_type,

    ofset: ofset,
    is_empty: is_empty,
    inside: inside,
  };

  function draw(context) {
    var item = get_callback();
    if (item) {
      item.draw(context, ofsetted_x, ofsetted_y);
    }
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
    context.fillText("SS"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function inside(test_x, test_y) {
    if (test_x > ofsetted_x && test_x < ofsetted_x + width &&
        test_y > ofsetted_y && test_y < ofsetted_y + height) {
      return true;
    } else {
      return false;
    }
  }

  function set_item(setted_item) {
    return set_callback(setted_item);
  }

  function get_item() {
    return get_callback();
  }

  function get_type() {
    return type;
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function is_empty() {
    return (!get_item());
  }

  // TODO: to chyba nie jest nalepiej przygotowane - jest scisle powiazane
  // z slotami, dropowanie na inne elementy niekompatybilne bedzie
  // sprawialo problemy
  function on_drag(x,y) {
    console.log('item on drag');
    if (get_item()) {
      return Dragged(x,y, this);
    }
  }

  function on_drop(x,y, dropped) {
    if (dropped) {
      var source = dropped.get_source();

      if (source.get_type() === 'shop') {
        var item = source.get_item();
        var temp = get_item();
        // udalo sie ustawic przedmiot
        if (set_item(item)) {
          if (item) {
            account.violki -= item.base_price;
          }
          if (temp) {
            account.violki += temp.base_price;
          }
        }
      } else {
        swap_items(dropped.get_source(), this);
      }
    }
  }

  function mouse_double(x,y) {
    debug.trace("SourcedSlot#mouse_double");
  }
  
  function mouse_down(x,y) {
    debug.trace("SourcedSlot#mouse_down");
  }
 
  // Functions
  // slot powiazany ze zrodlem, zamiana itemow
  // nastepuje tylko jesli target i zrodlo przyjmuja
  function swap_items(source, target) {
    debug.trace("Swap items", source, target);
    var temp;
    if (target.is_empty()) { // target jest pusty
      if (target.set_item(source.get_item())) { // jesli target przyjal przedmiot
        source.set_item(null); // nullujemy source
      }
    } else {
      temp = target.get_item();
      if (target.set_item(source.get_item())) { // jesli target przyjal przedmiot
        if (source.set_item(temp)) { // jesli source przyjal przedmiot z targeta
        } else { // source nie przyjal, przywracamy przedmiot targeta
          target.set_item(temp);
        }
      }
    }
  }

};

SourcedShopSlot = function(x, y, width, height, get_callback, set_callback) {
  var ofsetted_x = x;
  var ofsetted_y = y;

  var type = 'shop';

  return {
    draw: draw,

    on_drag: on_drag,
    on_drop: on_drop,
    mouse_double: mouse_double,
    mouse_down: mouse_down,

    get_item: get_item,
    set_item: set_item,
    get_type: get_type,

    ofset: ofset,
    is_empty: is_empty,
    inside: inside,
  };

  function draw(context) {
    var item = get_callback();
    if (item) {
      item.draw(context, ofsetted_x, ofsetted_y);
    }
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
    context.fillText("SS"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function inside(test_x, test_y) {
    if (test_x > ofsetted_x && test_x < ofsetted_x + width &&
        test_y > ofsetted_y && test_y < ofsetted_y + height) {
      return true;
    } else {
      return false;
    }
  }

  function set_item(setted_item) {
    return set_callback(setted_item);
  }

  function get_item() {
    return get_callback();
  }

  function get_type() {
    return type;
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function is_empty() {
    return (!get_item());
  }

  // TODO: to chyba nie jest nalepiej przygotowane - jest scisle powiazane
  // z slotami, dropowanie na inne elementy niekompatybilne bedzie
  // sprawialo problemy
  function on_drag(x,y) {
    console.log('item on drag');
    var item = get_item();
    if (item) {
      if (account.violki >= item.base_price) {
        return Dragged(x,y, this);
      }
    }
  }

  function on_drop(x,y, dropped) {
    var source = dropped.get_source();
    if (source.get_type() === 'panel') {
      var item = dropped.get_source().get_item();
      if (item) {
        account.violki += item.base_price;
      }
      source.set_item(null);
    }
  }

  function mouse_double(x,y) {
    debug.trace("SourcedSlot#mouse_double");
  }
  
  function mouse_down(x,y) {
    debug.trace("SourcedSlot#mouse_down");
  }

};

Dragged = function(x,y, source) {

  return {
    draw: draw,
    get_source: get_source,
    set_pos: set_pos,
  };

  function draw(context) {
    if (source && source.get_item()) {
      source.get_item().draw(context, x - 24, y - 24);
    }
    debug.do_draw('panels') && draw_debug(context);
  } 

  function draw_debug(context) {
    context.fillText("D"+x+"x"+y, x, y);
  }

  function set_pos(new_x,new_y) {
    x = new_x;
    y = new_y;
  }

  function get_source() {
    return source;
  }

};


TextArea = function(x,y, text) {
  var ofsetted_x = x;
  var ofsetted_y = y;
  var visible = true;

  text = text || [];

  var font = global_config.base_font;
  var color = '#fff';
  var interline = 10;

  return {
    draw: draw,
    ofset: ofset,
    inside: inside,
    set_text: set_text,
    set_font: set_font,
    set_interline: set_interline,
    set_color: set_color,
    show: show,
    hide: hide,
  };

  function draw(context) {
    if (!visible) return;

    context.fillStyle = color;
    context.font = font;

    for (var i = 0; i < text.length; i++) {
      var line = text[i]; 
      context.fillText(line, ofsetted_x, ofsetted_y + i * interline + interline);
    }
    debug.do_draw('panels') && draw_debug(context);
    context.stroke();

    context.font = global_config.base_font;
  } 

  function draw_debug(context) {
    context.fillText("TA"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function set_font(new_font) {
    font = new_font;
  }

  function set_color(new_color) {
    color = new_color;
  }

  function set_interline(new_interline) {
    interline = new_interline;
  }

  // we dont wont text area to be clickable
  function inside() {
    return false;
  }

  function set_text(new_text) {
    text = new_text;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
};

SourcedTextArea = function(x,y, get_callback) {
  var ofsetted_x = x;
  var ofsetted_y = y;
  var font = global_config.base_font;
  var interline = 10;
  var visible = true;
  var color = '#fff';

  return {
    draw: draw,
    ofset: ofset,
    inside: inside,
    set_font: set_font,
    set_interline: set_interline,
    set_color: set_color,
    show: show,
    hide: hide,
  };

  function draw(context) {
    if (!visible) return;

    context.fillStyle = color;
    context.font = font;
    var text = get_callback();
    for (var i = 0; i < text.length; i++) {
      var line = text[i]; 
      context.fillText(line, ofsetted_x, ofsetted_y + i * interline + interline);
    }
    context.font = global_config.base_font;
    debug.do_draw('panels') && draw_debug(context);
    context.stroke();
  } 

  function draw_debug(context) {
    context.fillText("STA"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function set_font(new_font) {
    font = new_font;
  }

  function set_color(new_color) {
    color = new_color;
  }

  function set_interline(new_interline) {
    interline = new_interline;
  }

  // we dont wont text area to be clickable
  function inside() {
    return false;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
};

SourcedText = function(x,y, get_callback) {
  var ofsetted_x = x;
  var ofsetted_y = y;

  var font = global_config.base_font;
  var color = '#fff';
  var visible = true;

  return {
    draw: draw,
    ofset: ofset,
    inside: inside,
    set_font: set_font,
    set_color: set_color,
    show: show,
    hide: hide,
  };

  function draw(context) {
    if (!visible) return;

    context.fillStyle = color;
    var text = get_callback();
    context.font = font;
    context.fillText(text, ofsetted_x, ofsetted_y);
    context.font = global_config.base_font;
    debug.do_draw('panels') && draw_debug(context);
    context.stroke();
  } 

  function draw_debug(context) {
    context.fillText("STA"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function set_font(new_font) {
    font = new_font;
  }

  function set_color(new_color) {
    color = new_color;
  }

  // we dont wont text area to be clickable
  function inside() {
    return false;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
};

SourcedLinedArea = function(x,y, get_callback) {
  var ofsetted_x = x;
  var ofsetted_y = y;
  var font = global_config.base_font;
  var interline = 10;
  var visible = true;

  return {
    draw: draw,
    ofset: ofset,
    inside: inside,
    set_font: set_font,
    set_interline: set_interline,
    show: show,
    hide: hide,
  };

  function draw(context) {
    if (!visible) return;

    var text = get_callback();
    for (var i = 0; i < text.length; i++) {
      var line = text[i];

      var pre_text = Lang.get(line.pre_text);
      context.font = line.pre_font;
      context.fillStyle = line.pre_color;
      context.strokeStyle = line.pre_color;
      context.fillText(pre_text, ofsetted_x, ofsetted_y + i * interline + interline);
      var size = context.measureText(pre_text);

      context.font = global_config.base_font;

      context.font = line.post_font;
      context.fillStyle = line.post_color;
      context.strokeStyle = line.post_color;
      var post_text = Lang.get(line.post_text);
      post_text = post_text.replace("{price}", text.price);
      post_text = post_text.replace("{condition}", text.condition);
      post_text = post_text.replace("{max_condition}", text.max_condition);
      context.fillText(post_text, ofsetted_x + size.width, ofsetted_y + i * interline + interline);

      context.font = global_config.base_font;
    }

    context.font = global_config.base_font;
    debug.do_draw('panels') && draw_debug(context);
    context.stroke();
  } 

  function draw_debug(context) {
    context.fillText("STA"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function set_font(new_font) {
    font = new_font;
  }

  function set_interline(new_interline) {
    interline = new_interline;
  }

  // we dont wont text area to be clickable
  function inside() {
    return false;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
};

TextInput = function(x,y, width, height, backgroundd) {
  var ofsetted_x = x;
  var ofsetted_y = y;

  var font = global_config.base_font;
  var color = '#fff';
  var visible = true;

  var text = "";

  return {
    draw: draw,
    ofset: ofset,
    inside: inside,
    set_font: set_font,
    set_color: set_color,
    set_text: set_text,
    show: show,
    hide: hide,
  };

  function draw(context) {
    if (!visible) return;

    context.drawImage(background, ofsetted_x, ofsetted_y);

    context.fillStyle = color;
    // var text = get_callback();
    context.font = font;
    context.fillText(text, ofsetted_x, ofsetted_y);
    context.font = global_config.base_font;
    debug.do_draw('panels') && draw_debug(context);
    context.stroke();
  } 

  function draw_debug(context) {
    context.fillText("IT"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function set_font(new_font) {
    font = new_font;
  }

  function set_text(new_text) {
    text = new_text;
  }

  function set_color(new_color) {
    color = new_color;
  }

  // we dont wont text area to be clickable
  function inside() {
    return false;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
};

InputTextSrc = function(x, y, width, height, background_src) {
  var background = Image.from_src(background_src);
  return InputText(x, y, width, height, background);
};

TextInput = function(x,y, width, height, backgroundd) {
  var ofsetted_x = x;
  var ofsetted_y = y;

  var font = global_config.base_font;
  var color = '#fff';
  var visible = true;

  var text = "";

  return {
    draw: draw,
    ofset: ofset,
    inside: inside,
    set_font: set_font,
    set_color: set_color,
    set_text: set_text,
    show: show,
    hide: hide,
  };

  function draw(context) {
    if (!visible) return;

    context.drawImage(background, ofsetted_x, ofsetted_y);

    context.fillStyle = color;
    // var text = get_callback();
    context.font = font;
    context.fillText(text, ofsetted_x, ofsetted_y);
    context.font = global_config.base_font;
    debug.do_draw('panels') && draw_debug(context);
    context.stroke();
  } 

  function draw_debug(context) {
    context.fillText("IT"+x+"x"+y, ofsetted_x, ofsetted_y);
  }

  function ofset(ofset_x,ofset_y) {
    ofsetted_x = x + ofset_x;
    ofsetted_y = y + ofset_y;
  }

  function set_font(new_font) {
    font = new_font;
  }

  function set_text(new_text) {
    text = new_text;
  }

  function set_color(new_color) {
    color = new_color;
  }

  // we dont wont text area to be clickable
  function inside() {
    return false;
  }

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }
};

InputPasswordSrc = function(x, y, width, height, background_src) {
  var background = Image.from_src(background_src);
  return InputPassword(x, y, width, height, background);
};
