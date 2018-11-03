class GrassEater {
    constructor(x, y, index) {
      this.x = x;
      this.y = y;
      this.index = index;
      this.energy = 10;
      this.directions = [];
    }
  
    getNewCoords() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
  
    chooseCell(character) {
      this.getNewCoords();
      var found = [];
      for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          //console.log(y, x);
          if (matrix[y][x] == character) {
            found.push(this.directions[i]);
          }
        }
      }
      return found;
    }
  
    move() {
      this.getNewCoords();
      var newCell = random(this.chooseCell(0));
      if (newCell) {
        matrix[this.y][this.x] = 0;
        this.x = newCell[0];
        this.y = newCell[1];
        matrix[this.y][this.x] = 2;
      }
    }
  
  
    eat() {
      this.getNewCoords();
      var newCell = random(this.chooseCell(1));
      if (newCell) {
        matrix[this.y][this.x] = 0;
        this.x = newCell[0];
        this.y = newCell[1];
        matrix[this.y][this.x] = 2;
        for (var i in grassArr) {
          if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
            grassArr.splice(i, 1);
          }
        }
        this.energy += 12;
      }
      else {
        this.move();
        this.die();
      }
      this.mul();
       matrix[this.y][this.x]=2;
    }
  
    die() {
      this.energy -= 2;
      if (this.energy <= 0) {
        for (var i in grassEaterArr) {
          if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
            grassEaterArr.splice(i, 1);
          }
        }
        matrix[this.y][this.x] = 0;
      }
    }
  
    mul() {
      this.getNewCoords();
      if (this.energy >= 12) {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
          var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
          grassEaterArr.push(newGrassEater);
          matrix[newCell[1]][newCell[0]] = 2;
          this.energy -= 12;
        }
      }
    }
  }