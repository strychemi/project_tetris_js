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
    var currentPiece = getCurrentPiece(),
      max = currentPiece.assembly.length,
      position = [],
      currentX, currentY;
    if (!currentPiece.placed) {
      newY = currentPiece.y + 1;
      for (var i = 0; i < max; i++) {
        currentX = currentPiece.assembly[i][0] + currentPiece.x;
        currentY = currentPiece.assembly[i][1] + currentPiece.y + 1;
        position.push( [currentX, currentY] );
      }
      if (checkCollisions(position)) {
        currentPiece.placed = true;
      } else {
        currentPiece.y += 1;
      }
    }
  };

  var checkCollisions = function(newPos) {
    var max = newPos.length;
    // Ground collision
    for (var i = 0; i < max; i++) {
      if (newPos[i][1] >= 20 ) return true;
    }
    // Other piece Collisions
    return false;
  };

  return {
    getBoard: getBoard,
    generatePiece: generatePiece,
    getCurrentPiece: getCurrentPiece,
    getAllPieces: getAllPieces,
    ticPiece: ticPiece,
    checkCollisions: checkCollisions
  };
})();
