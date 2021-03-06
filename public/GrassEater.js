class GrassEater extends LivingCreature {
    constructor(x, y, index) {
      super(x,y,index);
      this.energy = 10;
      statistics.grassEaterBirth++;
    }
  
    move() {
      super.getNewCoords();
      var newCell = random(super.chooseCell(0));
      if (newCell) {
        matrix[this.y][this.x] = 0;
        this.x = newCell[0];
        this.y = newCell[1];
        matrix[this.y][this.x] = 2;
      }
    }
  
  
    eat() {
      super.getNewCoords();
      var newCell = random(super.chooseCell(1));
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
        statistics.grassDie++;
        if(season==0)
        this.energy+=3;
        else if(season==1)
        this.energy+=9;
        else if(season==2)
        this.energy+=12;
        else
        this.energy+=6;
      }
      else {
        this.move();
        this.die();
      }
      this.mul();
       matrix[this.y][this.x]=2;
    }
  
    die() {
      if(season==0)
      this.energy--;
      else if(season==1)
      this.energy-=3;
      else if(season==2)
      this.energy-=4;
      else 
      this.energy-=2;

      if (this.energy <= 0) {
        for (var i in grassEaterArr) {
          if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
            grassEaterArr.splice(i, 1);
          }
        }
        matrix[this.y][this.x] = 0;
        statistics.grassEaterDie++;
      }
    }
  
    mul() {
      this.getNewCoords();
      if (this.energy >= 15) {
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