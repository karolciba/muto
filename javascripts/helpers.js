Math.random_range = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

Math.birandom = function() {
  return Math.random() - Math.random();
};

Math.distance = function(x0, y0, x1, y1) {
	var delta_x = x0 - x1;
	var delta_y = y0 - y1;
	return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
};

Math.square_distance = function(x0, y0, x1, y1) {
	var delta_x = x0 - x1;
	var delta_y = y0 - y1;
	return delta_x * delta_x + delta_y * delta_y;
};

Math.in_distance = function(x0, y0, x1, y1, r) {
	var delta_x = x0 - x1;
	var delta_y = y0 - y1;
	return delta_x * delta_x + delta_y * delta_y < r * r;
};

Math.bounce_vector = function(x0, y0, x1, y1) {
	var x = 2 * x0 - x1;
	var y = 2 * y0 - y1;
	return [x, y];
};

Math.rotate_vector_90 = function(x0, y0, x1, y1, d) {
	var x = Math.sign(d) * -1 * (y1 - y0) + x0;
	var y = Math.sign(d) * (x1 - x0) + y0;

	return [x, y];
};

Image.from_src = function(src, on_load_callback, on_error_callback) {
  if (!src) {
    console.warn("Proba pobrania nieistniejacego obrazka "+src);
    console.warn(printStackTrace());
  }
  src = src.replace("LANG", localStorage.lang);
  var from_cache = Image.images_cache[src];
  if (from_cache) { return from_cache; }

  var image = new Image();

  if (on_load_callback) {
    image.onload = on_load_callback;
  }
  if (on_error_callback) {
    image.onerror = on_error_callback;
  }

  image.src = src;

  Image.images_cache[src] = image;

  return image;
};

Image.images_cache = {};

Image.print_cache = function() {
  var src;
  var out = "";
  for (src in Image.images_cache) {
    out += "'" + src + "', ";
  }
  console.log(out);
};

// Szybki test sprawdzajacy czy linia-okrag na pewno sa oddzielone
Math.line_separation = function(x0, y0, x1, y1, a0, b0, a1, b1) {
  var x_middle = (x0+x1)*0.5;
  var x_half = Math.abs ( x1 - x0 ) * 0.5;

  var a_middle = (a0+a1)*0.5;
  var a_half = Math.abs ( a1 - a0 ) * 0.5;

  var x_distance = Math.abs( a_middle - x_middle );

  // nie ma separacji
  if (x_distance < x_half + a_half) {
    return false;
  }

  var y_middle = (x0+x1)*0.5;
  var y_half = Math.abs ( x1 - x0 ) * 0.5;

  var b_middle = (a0+a1)*0.5;
  var b_half = Math.abs ( a1 - a0 ) * 0.5;

  var y_distance = Math.abs( b_middle - y_middle );

  // nie ma separacji
  if (y_distance < y_half + b_half) {
    return false;
  }

  // najwyrazniej jest separacja
  return true;
};

// http://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
// pierwsza odpowiedz, jednakze w testach jest przypadek, ktory mimo iz linie sie przecinaja
// funkcja zwraca bledne dane - zakraglenie do pelny poprawia
// jednakze nalezy rozwazyc uzycie drugiej odpowiedzi - powinna byc wydajniejsza obliczeniowo
Math.line_intersect = function(x1, y1, x2, y2, x3, y3, x4, y4) {

  // z profilera wychodzi, ze nie ma wiekszego znaczenia dla wydajnosci obliczen
  if (Math.line_separation(x1, y1, x2, y2, x3, y3, x4, y4)) {
    // mamy separacje - linie na pewno sie nie przecinaja
    return false;
  }

  // TODO: Koniecznie przepisac na jakis algorym niewymagajacy zaookraglania
	x1 = Math.round(x1);
	y1 = Math.round(y1);
	x2 = Math.round(x2);
	y2 = Math.round(y2);
	x3 = Math.round(x3);
	y3 = Math.round(y3);
	x4 = Math.round(x4);
	y4 = Math.round(y4);
	var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
	var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
	if (isNaN(x) || isNaN(y)) {
		return false;
	} else {
		if (x1 >= x2) {
			if (!(x2 <= x && x <= x1)) {
				return false;
			}
		} else {
			if (!(x1 <= x && x <= x2)) {
				return false;
			}
		}
		if (y1 >= y2) {
			if (!(y2 <= y && y <= y1)) {
				return false;
			}
		} else {
			if (!(y1 <= y && y <= y2)) {
				return false;
			}
		}
		if (x3 >= x4) {
			if (!(x4 <= x && x <= x3)) {
				return false;
			}
		} else {
			if (!(x3 <= x && x <= x4)) {
				return false;
			}
		}
		if (y3 >= y4) {
			if (!(y4 <= y && y <= y3)) {
				return false;
			}
		} else {
			if (!(y3 <= y && y <= y4)) {
				return false;
			}
		}
	}
	return true;
};

Math.point_in_rectangle = function(x,y, points) {
  var inside = false;

  var i,j;
  var pcount = points.length;

  for (i = 0, j = pcount - 1; i < pcount; j = i++) {
    if ( ((points[i].y > y) != (points[j].y > y)) &&
        (x < (points[j].x - points[i].x) * (y - points[i].y) / (points[j].y - points[i].y) + points[i].x) ) {
      inside = !inside;
    }
  }

  return inside;
};

Math.point_in_circle = function(x,y, xc, yc, r) {
  var distance = Math.distance(x,y,xc,yc);

  return (distance <= r);
};


Math.circle_collision = function(x0, y0, r0, x1, y1, r1) {
  var dx = x0 - x1;
  var dy = y0 - y1;
  var sq_dist = dx * dx + dy * dy;
  var sum = r0 + r1; 
  var collision = ( sum * sum > sq_dist );

  return collision;
};

// Szybki test sprawdzajacy czy linia-okrag na pewno sa oddzielone
Math.line_circle_separation = function(x0, y0, x1, y1, x, y, r) {
  var x_middle = (x0+x1)*0.5;
  var x_half = Math.abs ( x1 - x0 ) * 0.5;
  var x_distance = Math.abs( x - x_middle );

  // nie ma separacji
  if (x_distance < x_half + r) {
    return false;
  }

  var y_middle = (y0+y1)*0.5;
  var y_half = Math.abs ( y1 - y0 ) * 0.5;
  var y_distance = Math.abs( y - y_middle );

  if (y_distance < y_half + r) {
    return false;
  }

  // najwyrazniej jest separacja
  return true;
};

// Na podstawie ksiazki Real-Time Collision Detection, strona 130
Math.line_circle_intersect = function(x0, y0, x1, y1, x, y, r) {
  // if (Math.line_circle_separation(x0, y0, x1, y1, x, y, r)) {
  //   // jesli mamy pewnosc separacji to nie liczymy dalej i zwracamy false - linie sie nie przecinaja
  //   return false;
  // }
  // robimy wywolanie funkcji _inline_ aby zbic troche na czasie - to jest najbardziej
  // obciazana funkcja w kodzie - 20% czasu w niej spedzamy, wszystkie chwyty dozwolone

  var x_middle = (x0+x1)*0.5;
  var x_half = Math.abs ( x1 - x0 ) * 0.5;
  var x_distance = Math.abs( x - x_middle );

  // w x mamy separacje
  if (x_distance > x_half + r) {

    var y_middle = (y0+y1)*0.5;
    var y_half = Math.abs ( y1 - y0 ) * 0.5;
    var y_distance = Math.abs( y - y_middle );

    // w y mamy separacje - na pewno nie ma kolizji
    if (y_distance > y_half + r) {
      return false;
    }
  }

  var d;

  var e = Math.dot_product(x,y,x0,y0, x1,y1,x0,y0);
  if (e < 0) {
    d = Math.dot_product(x,y,x0,y0, x,y,x0,y0);
  } else {
    var f = Math.dot_product(x1,y1,x0,y0, x1,y1,x0,y0);
    if (e > f) {
      d = Math.dot_product(x,y,x1,y1, x,y,x1,y1);
    } else {
      d = Math.dot_product(x,y,x0,y0, x,y,x0,y0) - e * e / f;
    }
  }

  return d < r * r;
};

Math.dot_product = function(ax0, ay0, ax1, ay1, bx0, by0, bx1, by1) {
  var ax = ax1 - ax0;
  var ay = ay1 - ay0;
  var bx = bx1 - bx0;
  var by = by1 - by0;

  return ax * bx + ay * by;
}

Math.sign = function(x) {
	return x ? x < 0 ? -1 : 1 : 0;
}

// Fixed: Minus xStep bug (when x2 < x, original code bugs)
// Fixed: Vertical line bug (when abs(x - x2) is zero, original code bugs because of NaN)
var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
if (CP && CP.lineTo)
	CP.dashedLine = function(x, y, x2, y2, dashArray) {
		if (!dashArray)
			dashArray = [10, 5];
		var dashCount = dashArray.length;
		var dx = (x2 - x);
		var dy = (y2 - y);
		var xSlope = (Math.abs(dx) > Math.abs(dy));
		var slope = (xSlope) ? dy / dx : dx / dy;

		this.moveTo(x, y);
		var distRemaining = Math.sqrt(dx * dx + dy * dy);
		var dashIndex = 0;
		while (distRemaining >= 0.1) {
			var dashLength = Math.min(distRemaining, dashArray[dashIndex % dashCount]);
			var step = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
			if (xSlope) {
				if (dx < 0)
					step = -step;
				x += step
				y += slope * step;
			} else {
				if (dy < 0)
					step = -step;
				x += slope * step;
				y += step;
			}
			this[(dashIndex % 2 == 0) ? 'lineTo' : 'moveTo'](x, y);
			distRemaining -= dashLength;
			dashIndex++;
		}
	}


function center() {
	var top, left;

	// top = Math.max($(window).height() - $('#game_map').outerHeight(), 0) / 2;
	//top = 60;
	// left = Math.max($(window).width() - $('#game_map').outerWidth(), 0) / 2;
	//left = 0;
	top = Math.max($(window).height() - $('#game_map').outerHeight(), 0) / 2;
	left = Math.max($(window).width() - $('#game_map').outerWidth(), 0) / 2;
	$('#game_map').css({
		top : top + $(window).scrollTop(),
		left : left + $(window).scrollLeft()
	});
	/*
	 $('#game_map').css({
	 top : top,// + $(window).scrollTop(),
	 left : left,// + $(window).scrollLeft()
	 });*/

};


function stacktrace() { 
    function st2(f) {
          return !f ? [] : 
                    st2(f.caller).concat([f.toString().split('(')[0].substring(9) + '(' + f.arguments.join(',') + ')']);
            }
      return st2(arguments.callee.caller);
}


// Metaprogmowanie - definiowanie funkcji setterow, uzycie:
// setter(Gunner,'level') => stworzy funkcje (new Gunner()).set_level('test');
function setter(class_object, attribute_name) {
  class_object.prototype['set_'+attribute_name] = function(value) {
    this[attribute_name] = value;
    return this;
  };
}

Helpers = function() {
  return {
    array_each: array_each,
    hash_each: hash_each,
    array_remove_in_place: array_remove_in_place,
    array_remove: array_remove,
    array_select: array_select,
    array_select_first: array_select_first,
    singleton: singleton,
  };

  // Executes callback for each element in array
  // callback(element, index, array)
  function array_each(array, callback) {
    var i;
    for (i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }

  // Remove item from array (if exists in array), modifies array in place
  // return true if succedeed false otherwise
  function array_remove_in_place(array,item) {
    var index = array.indexOf(item);
    if (index > -1) {
      array.splice(index,1);
      return true;
    }
    return false;
  }

  // Removes item from copy of array and returns it
  function array_remove(array, item) {
    var clone = array.slice(0);
    array_remove_in_place(clone,item);
    return clone;
  }

  // Executes callback for each element in hash
  // callback(key, value, hash)
  function hash_each(hash, callback) {
    var key, element;
    for (key in hash) if (this.hasOwnProperty(key)) {
      element = hash[key];
      callback(key, element, hash);
    }
  }

  // Returns array with elements for which callback returned true
  // callback(element, index, array)
  function array_select(array, callback) {
    var selected = [];
    var i;
    var element;

    for (i = 0; i < array.length; i++) {
      element = array[i];
      if (callback(element, i, array)) {
        selected.push(element);
      }
    }

    return selected;
  }

  // Returns first element for which callback returned true
  // callback(element, index, array)
  function array_select_first(array, callback) {
    var i;
    var element;

    for (i = 0; i < array.length; i++) {
      element = array[i];
      if (callback(element, i, array)) {
        return element;
      }
    }
  }

  // Return hash with elements for which callback returned true
  function hash_select(hash, callback) {
  }

  // Ensures one execution of function. First execution will cache function return,
  // all consecutive executions will return what was cached;
  function singleton(f) {
    var ret;
    var executed = false;

    return function() {
      if (!executed) {
        executed = true;
        ret = f.apply(this, arguments);
      } else {
        return ret;
      }
    };
  }
}
