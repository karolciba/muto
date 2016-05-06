Influences = function(_def) {
  var influences = {};
  var timed = {};
  var timed_values = {};
  var def = _def || false;

  return {
    get: get,
    set: set,
    get_timed: get_timed,
    set_timed: set_timed,
    timed_keys: timed_keys,
    clear: clear,
    clear_all: clear_all,
  };

  // Public Methods
  function get(key) {
    return ( influences[key] !== void 0 ) ? influences[key] : def;
  }

  function set(key, value) {
    value = value || true;
    influences[key] = value;
  }

  function set_timed(key, timeout, value) {
    timeout = (new Date()).getTime() + timeout * 1000;
    timed[key] = timeout;
    if (timed_values[key] && timed_values[key] >= value) {
    } else {
      timed_values[key] = value;
    }
  }

  function get_timed(key) {
    var now = (new Date()).getTime();
    if (timed[key] && timed[key] > now) {
      return timed_values[key];
    } else {
      console.log("czyszcze zatruwajke" + key);
      clear(key);
    }
  }

  function timed_keys() {
    return Object.keys(timed);
  }

  function clear(key) {
    delete influences[key];
    delete timed[key];
  }

  function clear_all() {
    influences = {};
    timed = {};
  }

  // Private Methods

};
