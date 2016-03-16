var pieceModule = (function() {

  var tetriminos = ["i", "j", "l", "o", "s", "t", "z"];

  // index 1 is the pivot point of each piece
  var tetriminoAssembly = {
    i: [[0,0], [1,0], [2,0], [3,0]],
    j: [[0,0], [1,0], [2,0], [2,1]],
    l: [[0,0], [0,1], [0,2], [1,2]],
    o: [[0,0], [1,0], [0,1], [1,1]],
    s: [[0,1], [1,1], [1,0], [2,0]],
    t: [[0,0], [1,0], [1,1], [2,0]],
    z: [[0,0], [1,0], [1,1], [2,1]]
  };

  var tetriminoColor = {
    i: "cyan",
    j: "blue",
    l: "orange",
    o: "yellow",
    s: "lime",
    t: "purple",
    z: "red"
  };

  function Piece() {
    // Starting position is on a random column 2 rows above the grid
    this.x = Math.floor(Math.random() * 7);
    this.y = - 2;
    // Size of each block
    this.size = 40;

    // Selects a random tetrimino type and sets attributes
    this.type = tetriminos[Math.floor(Math.random() * tetriminos.length)];
    this.assembly = tetriminoAssembly[this.type];
    this.color = tetriminoColor[this.type];
    this.placed = false;

    // Returns positions of assembly blocks
    this.boardPosition = function() {
      var max = this.assembly.length,
        position = [],
        currentX, currentY;
      for (var i = 0; i < max; i++) {
        currentX = this.assembly[i][0] + this.x;
        currentY = this.assembly[i][1] + this.y;
        position.push( [currentX, currentY] );
      }
      return position;
    };

    // Moves the tetrimino piece left or right
    // returns a new potential position of assembly blocks
    this.translate = function(dir) {
      var max = this.assembly.length,
        newPos = [],
        currentX, currentY;

      for (var i = 0; i < max; i++) {
        currentX = this.assembly[i][0] + this.x;
        currentY = this.assembly[i][1] + this.y;
        if (dir === "left") {
          newPos.push([currentX - 1, currentY]);
        } else if (dir === "right") {
          newPos.push([currentX + 1, currentY]);
        }
      }
      return newPos;
    };

    // Rotates the tetrimino piece clockwise or counter-clockwise
    // returns a new potential position of assembly blocks
    this.rotate = function(dir) {
      var max = this.assembly.length,
        pivot = [this.assembly[1][0] + this.x, this.assembly[1][1] + this.y],
        newPos = [],
        dx, dy, x0, y0, newX, newY;
      for (var i = 0; i < max; i++) {
        currentX = this.assembly[i][0] + this.x;
        currentY = this.assembly[i][1] + this.y;

        // Reorient assembly blocks relative to by subtracting pivot point
        x0 = currentX - pivot[0];
        y0 = currentY - pivot[1];
        // Rotate about pivot point
        if (dir === "CLOCKWISE") {
          dx = -y0;
          dy = x0;
        } else if (dir === "COUNTERCLOCKWISE") {
          dx = y0;
          dy = -x0;
        }
        // Add pivot point to regain proper location on grid after rotation
        newX = dx + pivot[0];
        newY = dy + pivot[1];
        newPos.push([newX, newY]);
      }
      return newPos;
    };

    this.doRotate = function(dir) {
      var max = this.assembly.length,
        pivot = [this.assembly[1][0], this.assembly[1][1]],
        newPos = [],
        dx, dy, x0, y0, newX, newY;
      for (var i = 0; i < max; i++) {
        currentX = this.assembly[i][0];
        currentY = this.assembly[i][1];

        // Reorient assembly blocks relative to by subtracting pivot point
        x0 = currentX - pivot[0];
        y0 = currentY - pivot[1];
        // Rotate about pivot point
        if (dir === "CLOCKWISE") {
          dx = -y0;
          dy = x0;
        } else if (dir === "COUNTERCLOCKWISE") {
          dx = y0;
          dy = -x0;
        }
        // Add pivot point to regain proper location on grid after rotation
        newX = dx + pivot[0];
        newY = dy + pivot[1];
        newPos.push([newX, newY]);
      }
      this.assembly = newPos;
    };

  }

  return {
    Piece: Piece
  };
})();
