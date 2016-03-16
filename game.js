var gameModule = (function() {
  var INTERVAL = 60; //40 ~ 25 FPS, 30 ~ 30 FPS, 15 ~ 60 FPS
  var halfSecond = 1000/INTERVAL/2;
  //var halfSecond = 1;
  var score = 0;

  var init = function() {
    var intervalCounter = 0;

    // Main game loop
    setInterval(function() {
      tetrisModule.generatePiece();
      keyListener();
      intervalCounter++;
      // Tic the block down every half second
      if (intervalCounter > halfSecond) {
        tetrisModule.ticPiece();
        intervalCounter = 0;
      }
      render();
    }, INTERVAL);

  };

  keyListener = function() {
    var currentPiece = tetrisModule.getCurrentPiece(),
      newPos;
    if (key.isPressed("up")) {
      newPos = currentPiece.rotate("CLOCKWISE");
      if (!tetrisModule.checkCollisions(newPos)) {
        currentPiece.doRotate("CLOCKWISE");
      }
    } else if (key.isPressed("down")) {
      newPos = currentPiece.rotate("COUNTERCLOCKWISE");
      if (!tetrisModule.checkCollisions(newPos)) {
        currentPiece.doRotate("COUNTERCLOCKWISE");
      }
    }

    if (key.isPressed("left")) {
      newPos = currentPiece.translate("left");
      if (!tetrisModule.checkCollisions(newPos)) {
        currentPiece.x -= 1;
      }
    } else if (key.isPressed("right")) {
      newPos = currentPiece.translate("right");
      if (!tetrisModule.checkCollisions(newPos)) {
        currentPiece.x += 1;
      }
    }

    if (key.isPressed("space")) {
      newPos = currentPiece.translate("down");
      if (!tetrisModule.checkCollisions(newPos)) {
        currentPiece.y += 1;
      } else {
        currentPiece.placed = true;
        addPieceToBoard(currentPiece);
      }
    }
  };

  render = function() {
    var canvas = $("#canvas")[0].getContext("2d"),
      pieces = tetrisModule.getAllPieces(), piece, assembly;
    clearCanvas(canvas);
    for (var p in pieces) {
      piece = pieces[p];
      assembly = piece.boardPosition();
      for (var a in assembly) {
        canvas.beginPath();
        canvas.fillStyle = piece.color;
        canvas.fillRect(
          assembly[a][0] * piece.size,
          assembly[a][1] * piece.size,
          piece.size,
          piece.size
        );
        canvas.fillStyle = "black";
        canvas.strokeRect(
          assembly[a][0] * piece.size,
          assembly[a][1] * piece.size,
          piece.size,
          piece.size
        );
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
