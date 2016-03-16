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

    // Moves the tetrimino piece left or right
    this.translate = function(dir) {
      var max = this.assembly.length,
        newPos = [];

      for (var i = 0; i < max; i++) {
        if (dir === "left") {
          newPos.push([this.assembly[i][0] - 1, this.assembly[i][1]]);
        } else if (dir === "right") {
          newPos.push([this.assembly[i][0] + 1, this.assembly[i][1]]);
        }
      }
      this.assembly = newPos;
    };

    // Rotates the tetrimino piece clockwise or counter-clockwise
    this.rotate = function(dir) {
      if (this.type === "o") return undefined;
      
      var max = this.assembly.length,
        pivot = this.assembly[1],
        newPos = [],
        dx, dy, x, y, newX, newY;

      for (var i = 0; i < max; i++) {
        // Reorient assembly blocks relative to by subtracting pivot point
        x = this.assembly[i][0] - pivot[0];
        y = this.assembly[i][1] - pivot[1];

        // Rotate about pivot point
        if (dir === "CLOCKWISE") {
          dx = -y;
          dy = x;
        } else if (dir === "COUNTERCLOCKWISE") {
          dx = y;
          dy = -x;
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
