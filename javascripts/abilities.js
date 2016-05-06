function Abilities(def) {
  this._def = def;
}

Abilities.from_hash = function(hash) {
  var abilities = new Abilities(hash['_def']);
  for (var ability in hash) {
    abilities[ability] = hash[ability];
  }
  return abilities;
}

Abilities.prototype.get = function(key) {
  if (!this[key]) {
    this[key] = this._def;
  }
  return this[key];
}

Abilities.prototype.set = function(key, value) {
  this[key] = value;
}

Abilities.prototype.best = function(count) {
  var keys = this.keys();

  if (!count) count = keys.length;

  var sorted = keys.sort( function(abilities) {
    return function(a,b) {
      return abilities[b] - abilities[a];
    }
  }(this) );

  return sorted.slice(0, count);
}

Abilities.prototype.keys = function ()
{
  var keys = [];
  for(var i in this) if (this.hasOwnProperty(i))
  {
    if (i == "_def") continue;
    keys.push(i);
  }
  return keys;
}
