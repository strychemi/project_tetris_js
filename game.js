var gameModule = (function() {
  var INTERVAL = 40; //40 ~ 25 FPS, 30 ~ 30 FPS, 15 ~ 60 FPS
  var score = 0;

  var init = function() {
    var intervalCounter = 0;

    // Main game loop
    setInterval(function() {
      tetrisModule.generatePiece();
      keyListener();
      intervalCounter++;
      // Tic the block down every half second
      if (intervalCounter > 1000/INTERVAL/2) {
        tetrisModule.ticPiece();
        intervalCounter = 0;
      }
      render();
    }, INTERVAL);

  };

  keyListener = function() {
    var currentPiece = tetrisModule.getCurrentPiece();
    if (key.isPressed("up")) currentPiece.rotate("CLOCKWISE");
    else if (key.isPressed("down")) currentPiece.rotate("COUNTERCLOCKWISE");

    if (key.isPressed("left")) currentPiece.translate("left");
    else if (key.isPressed("right")) currentPiece.translate("right");
  };

  render = function() {
    var canvas = $("#canvas")[0].getContext("2d"),
      pieces = tetrisModule.getAllPieces(), piece, assembly;
    clearCanvas(canvas);
    for (var p in pieces) {
      piece = pieces[p];
      assembly = piece.assembly;
      for (var a in assembly) {
        canvas.beginPath();
        canvas.fillStyle = piece.color;
        canvas.fillRect((piece.x + assembly[a][0]) * piece.size, (piece.y + assembly[a][1]) * piece.size, piece.size, piece.size);
        canvas.fillStyle = "black";
        canvas.strokeRect((piece.x + assembly[a][0]) * piece.size, (piece.y + assembly[a][1]) * piece.size, piece.size, piece.size);
      }
    }
  };

  clearCanvas = function(context) {
    context.clearRect(0, 0, 400, 800);
  };

  return {
    init: init
  };
})();

$(document).ready(gameModule.init());
