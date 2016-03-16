var tetrisModule = (function() {
  // Initialize board
  var board = Array(10);
  for(var y = 0; y < board.length; y++) {
    board[y] = new Array(20);
  }

  // Keeps track of pieces
  var pieces = [];

  var getBoard = function() {
    return board;
  };

  var generatePiece = function() {
    if (!getCurrentPiece()) pieces.push(new pieceModule.Piece());
  };

  var getCurrentPiece = function() {
    for (var p in pieces) {
      if (!pieces[p].placed) return pieces[p];
    }
  };

  var getAllPieces = function() {
    return pieces;
  };

  var addPieceToBoard = function(piece) {
    var assembly = piece.boardPosition(),
      max = assembly.length;
    // Iterate through piece's assembly
    for (var i = 0; i < max; i++) {
      board[assembly[i][0]][assembly[i][1]] = 1;
    }
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
        addPieceToBoard(currentPiece);
      } else {
        currentPiece.y += 1;
      }
    }
  };

  var checkCollisions = function(newPos) {
    var max = newPos.length;
    for (var i = 0; i < max; i++) {
      // Ground collision
      if (newPos[i][1] > 19 ) return true;
      // Left and Right board boundary collision
      for (var j = 0; j < max; j++) {
        if (newPos[i][0] < 0 || newPos[i][0] > 9) return true;
      }
      // Check newPos against board
      if (board[newPos[i][0]][newPos[i][1]] === 1) return true;
    }
    return false;
  };

  var checkRows = function() {
    var rowCounter = 0, allPieces = pieces;
    for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 10; j++) {
        if (board[j][i] === 1) rowCounter++;
        if (rowCounter === 10) {
          for (var k = 0; k < 10; k++) {
            board[k][i] = undefined;
          }
        }
      }
    }

    for (i = 0; i < pieces.length; i++) {
      
    }

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
