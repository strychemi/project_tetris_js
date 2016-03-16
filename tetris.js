var tetrisModule = (function() {
  // Initialize board
  var board = Array(10);
  for(var b in board) {
    board[b] = new Array(20);
  }

  // Keeps track of pieces
  var pieces = [];

  var getBoard = function() {
    return board;
  };

  var generatePiece = function() {
    if (!this.getCurrentPiece()) pieces.push(new pieceModule.Piece());
  };

  var getCurrentPiece = function() {
    for (var p in pieces) {
      if (!pieces[p].placed) return pieces[p];
    }
  };

  var getAllPieces = function() {
    return pieces;
  };

  var ticPiece = function() {
    var currentPiece;
    currentPiece = getCurrentPiece();
    if (!currentPiece.placed) currentPiece.y += 1;
  };

  return {
    getBoard: getBoard,
    generatePiece: generatePiece,
    getCurrentPiece: getCurrentPiece,
    getAllPieces: getAllPieces,
    ticPiece: ticPiece
  };
})();
