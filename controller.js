var controller = {

  init: function(){
    view.init();
  },

  displayBlocks: function(){
    $.each(block.boardBlocks, function(index, block){
      view.renderBlock(block);
    });
    // for(var i=0; i < block.boardBlocks.length; i++){
    //   console.log(block.boardBlocks[i]);
    // }
  },

  render: function(){
    controller.displayBlocks();
  },

  update: function(){
    setInterval(function(){
      console.log("called");
      controller.render();
    }, 500);
  },

};

$( document ).ready(function(){

  controller.init();
  controller.update();

});
