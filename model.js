var block = block || {};

block.boardBlocks = [];

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

block.LShapeConstructor = function(rotation) {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.prototype = block.BlockConstructor;
};

block.LShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LShapeConstructor.prototype.constructor = block.LShapeConstructor;


var board = {

};

var config = {
  blockSize: 30,
};
