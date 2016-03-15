var view = {

  init: function(){

  },

  renderBlock: function(block){
    console.log(block);
    var c = view.canvas();
    c.beginPath();
    c.fillStyle = 'green';
    c.fillRect(block.coord.x, block.coord.y, block.coord.size, block.size);
  },

  canvas: function(){
    return $('#canvas')[0].getContext('2d');
  },

  clearCanvas: function(context){
    context.clearRect(0,0,600,800);
  },

};
