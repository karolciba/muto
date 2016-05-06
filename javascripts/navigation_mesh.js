function NavigationMesh() {
  this.walls = [];
  this.barriers = [];
}

NavigationMesh.prototype.define_wall = function(x0,y0, x1,y1) {
  var wall = [x0,y0, x1,y1];
  this.walls.push(wall);
};

NavigationMesh.prototype.define_barrier = function(x0,y0, x1,y1) {
  var barrier = [x0,y0, x1,y1];
  this.barriers.push(barrier);
};

NavigationMesh.prototype.draw = function(context) {
  debug.trace("Drawing walls", this.walls);
  context.lineWidth = 3;
  for (var i = 0; i < this.walls.length; i++) {
    var wall = this.walls[i];
    context.fillStyle = "#000";
    context.strokeStyle = "#f00";
    context.beginPath();
    context.dashedLine(wall[0],wall[1],wall[2],wall[3]);
    context.closePath();
    context.stroke();
    context.fillText(wall[0]+"x"+wall[1], wall[0] + 5, wall[1] + 5);
    context.fillText(wall[2]+"x"+wall[3], wall[2] + 5, wall[3] + 5);
  }
  debug.trace("Drawing barrriers", this.walls);
  for (var i = 0; i < this.barriers.length; i++) {
    var barrier = this.barriers[i];
    context.fillStyle = "#000";
    context.strokeStyle = "#00f";
    context.beginPath();
    context.dashedLine(barrier[0],barrier[1],barrier[2],barrier[3]);
    context.closePath();
    context.stroke();
    context.fillText(barrier[0]+"x"+barrier[1], barrier[0] + 5, barrier[1] + 5);
    context.fillText(barrier[2]+"x"+barrier[3], barrier[2] + 5, barrier[3] + 5);
  }
  context.lineWidth = 1;
};


NavigationMesh.prototype.line_of_view = function(x0, y0, x1, y1) {
  return !this.wall_intersect(x0,y0,x1,y1);
};

NavigationMesh.prototype.barrier_intersect = function(x0, y0, x1, y1) {
  for (var i = 0; i < this.barriers.length; i++) {
    var b = this.barriers[i];
    if (Math.line_intersect(x0,y0,x1,y1, b[0],b[1],b[2],b[3])) {
      return true;
    }
  }
  return false;
};

NavigationMesh.prototype.barrier_circle_intersect = function(x, y, r) {
  for (var i = 0; i < this.barriers.length; i++) {
    var b = this.barriers[i];
    // if (Math.line_intersect(x0,y0,x1,y1, b[0],b[1],b[2],b[3])) {
    if (Math.line_circle_intersect(b[0],b[1],b[2],b[3], x, y, r)) {
      return true;
    }
  }
  return false;
};

NavigationMesh.prototype.wall_intersect = function(x0, y0, x1, y1) {
  for (var i = 0; i < this.walls.length; i++) {
    var b = this.walls[i];
    if (Math.line_intersect(x0,y0,x1,y1, b[0],b[1],b[2],b[3])) {
      return true;
    }
  }
  return false;
};
