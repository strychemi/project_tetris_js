var controller = {

  init: function(){
    view.init();
  },

  displayBlocks: function(){
    $.each(block.boardBlocks, function(index, block){
      view.renderBlock(block);
    });
  },

  render: function(){
    view.clearCanvas(view.canvas());
    controller.ticBlock();
    controller.displayBlocks();
  },

  update: function(){
    setInterval(function(){
      controller.render();
    }, 500);
  },

  ticBlock: function() {
    $.each(block.boardBlocks, function(index, block){
      if (!block.placed) {
        block.coord.y += block.size;
      }
    });
  },

};

$( document ).ready(function(){

  controller.init();
  controller.update();

});
