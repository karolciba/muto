function Mover(level) {
  this.level = level;
}

Mover.prototype.set_level = function(level) {
  this.level = level;
};

Mover.prototype.move = function(creature) {
  // exit early
  if (creature.speed === 0) { return; }

  var x = creature.x + Math.sin(creature.a) * creature.speed;
  var y = creature.y + Math.cos(creature.a) * creature.speed;

  // var barrier_intersect = this.level.mesh.barrier_intersect(creature.x,creature.y,x,y);
  var barrier_intersect = this.level.mesh.barrier_circle_intersect(x,y,creature.radius);
  if (barrier_intersect) {
    creature.commander.on_collisions(1);
    return;
  }

  // if (this.level.collision_in_position(creature, x,y)) {
  //   creature.commander.on_collisions();
  //   return;
  // }
  
  var collision = this.level.collision_in_position(creature, x,y);

  // TODO: zrobic "odsuwanie" kolizji - postacie beda przepychac sie miedzy soba
  // TODO: przemyslec mechanike ruchu w oparciu o sily a nie predkosci
  // TODO: jesli postac sie fizycznie nie przesuwa nie animowac ruchu
  // jesli mamy kolizje
  if (collision) {
    // w przeciwnym kierunku do kolizji
    var dx = creature.x - collision.x;
    var dy = creature.y - collision.y;
    var a = Math.atan2(dx,dy);

    // creature.driver.bounce_angle = creature.a - a;

    creature.commander.on_collisions(2, collision);
    return;
  }

  creature.x = x;
  creature.y = y;
};

