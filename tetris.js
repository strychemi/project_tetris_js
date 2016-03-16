var tetrisModule = (function() {
  // Initialize board
  var board = Array(10);
  for(var b in board) {
    board[b] = new Array(20);
  }

  // Keeps track of pieces
  var pieces = [];


  var generatePiece = function() {
    pieces.push(new pieceModule.Piece());
  };
})();
