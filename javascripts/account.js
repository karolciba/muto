function Account() {
  
  this.items_factory = new ItemsFactory();
  this.soldiers_factory = new SoldiersFactory();
  this.soldiers_factory.set_items_factory(this.items_factory);

  this.items=[];

  this.soldiers = [];

  this.passed_levels = [];

  this.lang = localStorage.lang || 'en';

  this.violki = 0;

  if (localStorage.save) {
    debug.debug("Mamy save, wczytuje");
    this.load(localStorage.save);
  } else {
    this.on_start();
  }
}

Account.prototype.on_start = function() {
  this.items=[]; 
  this.soldiers = [];
  this.passed_levels = [];
  this.violki = 0;
  this.lang = localStorage.lang || 'en';
}

Account.prototype.persist = function() {
  var save = {};
  save.timestamp = (new Date()).getTime();
  save.passed_levels = this.passed_levels;
  save.violki = this.violki;
  var items = [];
  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i];
    if (item) {
      items[i] = item.serialize();
    }
  }
  save.items = items;

  var soldiers = [];
  for (var i = 0; i < this.soldiers.length; i++) {
    var soldier = this.soldiers[i];
    if (!soldier) continue;
    soldiers.push(soldier.serialize());
  }
  save.soldiers = soldiers;

  localStorage.save = JSON.stringify(save);
}

Account.prototype.load = function(save_string) {
  try {
    var save = JSON.parse(save_string);
    this.passed_levels = save.passed_levels;
    this.violki = save.violki;
    var items = [];
    var serialized_items = save.items;
    for (var i = 0; i < serialized_items.length; i++) {
      var serialized_item = serialized_items[i];
      if (serialized_item) {
        var item = this.items_factory.deserialize(serialized_item);
        items[i] = item;
      }
    }
    this.items = items;

    var soldiers = [];
    var serialized_soldiers = save.soldiers;
    for (var i = 0; i < serialized_soldiers.length; i++) {
      var serialized_soldier = serialized_soldiers[i];
      var soldier = this.soldiers_factory.deserialize(serialized_soldier);
      soldiers.push(soldier);
    }
    this.soldiers = soldiers;
  } catch (e) {
    delete localStorage.save;
    this.items=[]; 
    this.soldiers = [];
    this.passed_levels = [];
    this.violki = 0;
    this.lang = localStorage.lang || 'en';
    this.on_start();
  }
}

Account.prototype.level_passed = function(id) {
  return this.passed_levels[id];
}

Account.prototype.pass_level = function(id) {
  this.passed_levels[id] = true;
}

Account.prototype.add_item = function(item) {
  this.items.push(item);
}

// dynamically define setters and getters for account
// used in menu drag & drop
for (var i = 0; i < 4 * 7 - 1; i++) {
  Account.prototype["set_item_"+i] = function(index) {
    return function(item) {
      this.items[index] = item;
      return true;
    }
  }(i);
  Account.prototype["get_item_"+i] = function(index) {
    return function() {
      return this.items[index];
    }
  }(i);
}
