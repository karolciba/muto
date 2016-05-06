Flash = function(message,x,y) {

  // var message = "";
  // var x = 0, y = 0;
  var ttl = global_config.flash.ttl;
  var offset_x = 0;
  var color = "#F00";
  // var alpha = 255;
  
  var image;

  if (global_config.flash[message]) {
    image = Image.from_src(global_config.flash[message]);
  }

  function draw(context) { 
    context.fillStyle = color;
    if (image) {
      context.drawImage(image, Math.floor(x), Math.floor(y));
    } else {
      context.fillText(message, Math.floor(x), Math.floor(y));
    }
    y += global_config.flash.step;
    return ttl--;
  }

  return {
    draw: draw
  };

};
