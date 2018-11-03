class Predator {
    constructor(x, y, index) {
      this.x = x;
      this.y = y;
      this.index = index;
      this.energy = 20;
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
        matrix[this.y][this.x] = 3;
        this.energy--;
      }
    }
  
  
    eat() {
      this.getNewCoords();
      var newCell = random(this.chooseCell(2));
      if (newCell) {
        matrix[this.y][this.x] = 0;
        this.x = newCell[0];
        this.y = newCell[1];
        matrix[this.y][this.x] = 3;
        for (var i in grassEaterArr) {
          if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
            grassEaterArr.splice(i, 1);
          }
        }
        this.energy += 12;
      }
      else {
        this.move();
        this.die();
      }
      this.mul();
       matrix[this.y][this.x]=3;
    }
  
    die() {
      this.energy -= 2;
      if (this.energy <= 0) {
        for (var i in predatorArr) {
          if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
            predatorArr.splice(i, 1);
          }
        }
        matrix[this.y][this.x] = 0;
      }
    }
  
    mul() {
      this.getNewCoords();
      if (this.energy >= 24) {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
          var newPredator = new Predator(newCell[0], newCell[1], this.index);
          predatorArr.push(newPredator);
          matrix[newCell[1]][newCell[0]] = 3;
          this.energy -= 24;
        }
      }
    }
  }