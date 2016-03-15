var block = block || {};

block.boardBlocks = []; //For placed blocks
block.movingBlocks = [];
////////////////////////////////////////////////////////////////////////////////
block.BlockConstructor = function(x, y) {
  this.coord = {
    x: x,
    y: y,
  };
  this.blocks = []; //while moving
  this.pivotIndex = 0;
  this.size = config.size;
  this.placed = false;
};
////////////////////////////////////////////////////////////////////////////////

block.LLeftShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate0 = [[0,0],[0,1],[0,2],[1,2]];
  this.rotate90 = [[2, 1],[0,1],[-1,-1],[-1,2]];
  this.rotate180 = [[0,2],[0,1],[0,0],[-1,0]];
  this.rotate270 = [[-1,1],[0,1],[1,1],[1,0]];
  this.pivotIndex = 1;
  this.prototype = block.BlockConstructor;
  var that = this;
  this.orient = function(rotate){
    switch(rotate){
      case 1:
      return that.rotate0;

      case 2:
      return that.rotate90;

      case 3:
      return that.rotate180;

      case 4:
      return that.rotate270;
    }
  };
};

block.LLeftShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LLeftShapeConstructor.prototype.constructor = block.LLeftShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.LRightShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.LRightShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LRightShapeConstructor.prototype.constructor = block.LRightShapeConstructor;

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

block.ZLeftShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.ZLeftShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.ZLeftShapeConstructor.prototype.constructor = block.ZLeftShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.ZRightShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
  this.prototype = block.BlockConstructor;
};

block.ZRightShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.ZRightShapeConstructor.prototype.constructor = block.ZRightShapeConstructor;

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
