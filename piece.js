var pieceModule = (function() {

  var tetriminos = ["i", "j", "l", "o", "s", "t", "z"];
  var tetriminoAssembly = {
    i: [[-1,0], [0,0], [1,0], [2,0]],
    j: [[-1,0], [0,0], [1,0], [1,1]],
    l: [[0,-1], [0,0], [0,1], [1,1]],
    o: [[-1,0], [0,0], [1,0], [1,1]],
    s: [[-1,0], [0,0], [0,1], [-1,1]],
    t: [[-1,0], [0,0], [1,0], [0,1]],
    z: [[-1,0], [0,0], [0,1], [1,1]]
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
    this.assembly = tetriminoAssembly[type];
    this.color = teriminoColor[type];
    this.placed = false;

    this.rotate = function(dir) {
      var max = assembly.length;
      var dxdy = [];
      var newPos;
      for (var i = 0; i < max; i++) {
        if (dir === "CLOCKWISE") {
          newPos = [-this.assembly[i][1], this.assembly[i][0]];
        } else if (dir === "COUNTERCLOCKWISE") {
          newPos = [this.assembly[i][1], -this.assembly[i][0]];
        }
        dxdy.push(newPos);
      }
      this.assembly = dxdy;
    };

  }

  return {
    Piece: Piece
  };
})();
