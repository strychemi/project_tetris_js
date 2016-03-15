var block = block || {};

block.boardBlocks = []; //For placed blocks
block.movingBlock = undefined;
////////////////////////////////////////////////////////////////////////////////
block.BlockConstructor = function(x, y) {
  this.coord = {
    x: x,
    y: y,
  };
  this.blocks = []; //while moving
  //this.pivotIndex = 0;
  this.size = config.size;
  this.placed = false;
  this.dir = "";
  this.currentOrient = 0;
  var that = this;
  this.nextOrientation = function(dir) {
    if (dir === "clockwise") {
      that.currentOrient = that.currentOrient >= 4 ? 1 : that.currentOrient + 1;
    } else {
      that.currentOrient = that.currentOrient <= 1 ? 4 : that.currentOrient - 1;
    }
    return that.currentOrient;
  };

  this.rotate = function(dir) {
    var currentBlock;
    for (var i = 0; i < that.blocks.length; i++) {
      currentBlock = that.blocks[i];
      // console.log(this.nextOrientation(dir));
      currentBlock.coord.x += that.orient(that.currentOrient)[0];
      currentBlock.coord.y += that.orient(that.currentOrient)[1];
    }
  };
};
////////////////////////////////////////////////////////////////////////////////

block.LLeftShapeConstructor = function(x, y) {
  block.BlockConstructor.call(this, x, y);
  //this.rotation = rotation;
  this.rotate0 = [[0,0],[0,1],[0,2],[1,2]];
  this.rotate90 = [[2, 1],[0,1],[-1,-1],[-1,2]];
  this.rotate180 = [[0,2],[0,1],[0,0],[-1,0]];
  this.rotate270 = [[-1,1],[0,1],[1,1],[1,0]];
  this.pivotIndex = 1;

  this.fillBlock = function() {
    for (var i = 0; i < this.rotate0.length; i++) {
      this.blocks.push(new block.BlockConstructor(this.rotate0[i][0] * this.size, this.rotate0[i][1] * this.size));
    }
  };

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
};

block.LRightShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LRightShapeConstructor.prototype.constructor = block.LRightShapeConstructor;

////////////////////////////////////////////////////////////////////////////////
block.LineShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
};

block.LineShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.LineShapeConstructor.prototype.constructor = block.LineShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.SquareShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
};

block.SquareShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.SquareShapeConstructor.prototype.constructor = block.SquareShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.ZLeftShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
};

block.ZLeftShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.ZLeftShapeConstructor.prototype.constructor = block.ZLeftShapeConstructor;

////////////////////////////////////////////////////////////////////////////////

block.ZRightShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
};

block.ZRightShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.ZRightShapeConstructor.prototype.constructor = block.ZRightShapeConstructor;

////////////////////////////////////////////////////////////////////////////////
block.TShapeConstructor = function() {
  block.BlockConstructor.call(this, 0, 0);
  //this.rotation = rotation;
  this.rotate90 = [];
  this.rotate0 = [];
};

block.TShapeConstructor.prototype = Object.create(block.BlockConstructor.prototype);
block.TShapeConstructor.prototype.constructor = block.TShapeConstructor;

////////////////////////////////////////////////////////////////////////////////
var board = {

};

var config = {
  size: 30,
};
