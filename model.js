var block = {

  boardBlocks: [],

  BlockConstructor: function(x, y, shape, rotation){
    this.coord = {
      x: x,
      y: y,
    };
    this.blocks = []
    this.pivot = 0;
    this.y = y;
    this.shape = shape;
    this.rotation = rotation;
    this.placed = false;
  },

  L
};

var board = {

};

var config = {
  blockSize: 30,
};
