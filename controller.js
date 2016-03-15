var controller = {

  init: function(){
    view.init();
  },

  keyboard: function(){
    var bl = block.movingBlock;
    if (key.isPressed('left')){
      bl.dir = "cclockwise";
      bl.rotate(bl.dir);
    }
    else if (key.isPressed('right')){
      bl.dir = "clockwise";
      bl.rotate(bl.dir);
    }
  },

  displayBlocks: function(){

    $.each(block.boardBlocks, function(index, block){
      view.renderBlock(block);
    });

    if(block.movingBlock !== undefined){
      $.each(block.movingBlock.blocks, function(index, block){
        view.renderBlock(block);
      });
    }
  },

  render: function(){
    controller.keyboard();
    view.clearCanvas(view.canvas());
    controller.ticBlock();
    controller.displayBlocks();
  },

  update: function(){
    setInterval(function(){
      controller.render();
    }, 100);
  },

  ticBlock: function() {
    setTimeout(function(){$.each(block.boardBlocks, function(index, block){
      if (!block.placed) {
        block.coord.y += block.size;
      }
    });}, 500);
  },

};

$( document ).ready(function(){

  controller.init();
  controller.update();

});
