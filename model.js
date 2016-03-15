var block = block || {};

block.boardBlocks = [];
////////////////////////////////////////////////////////////////////////////////
block.BlockConstructor = function(x, y) {
  this.coord = {
    x: x,
    y: y,
  };
  this.blocks = [];
  this.pivot = 0;
  this.rotation = function() {};
  this.size = config.size;
  this.placed = false;
};
////////////////////////////////////////////////////////////////////////////////

block.LShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.LShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LShapeConstructor.prototype.constructor = block.LShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.LineShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.LineShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LineShapeConstructor.prototype.constructor = block.LineShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.SquareShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.SquareShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.SquareShapeConstructor.prototype.constructor = block.SquareShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.ZShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.ZShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.ZShapeConstructor.prototype.constructor = block.ZShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.TShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.TShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.TShapeConstructor.prototype.constructor = block.TShapeConstructor;

////////////////////////////////////////////////////////////////////////////////
var board = {

};

var config = {
  blockSize: 30,
};
