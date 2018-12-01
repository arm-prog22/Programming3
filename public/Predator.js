class Predator extends LivingCreature{
    constructor(x, y, index) {
      super(x,y,index);
      this.energy = 20;
      statistics.predatorBirth++;
    } 
  
    move() {
      super.getNewCoords();
      var newCell = random(super.chooseCell(0));
      if (newCell) {
        matrix[this.y][this.x] = 0;
        this.x = newCell[0];
        this.y = newCell[1];
        matrix[this.y][this.x] = 3;
        this.energy--;
      }
    }
  
  
    eat() {
      super.getNewCoords();
      var newCell = random(super.chooseCell(2));
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

        statistics.grassEaterDie++;

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
       matrix[this.y][this.x]=3;
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
        for (var i in predatorArr) {
          if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
            predatorArr.splice(i, 1);
          }
        }
        matrix[this.y][this.x] = 0;

        statistics.predatorDie++;
      }
    }
  
    mul() {
      super.getNewCoords();
      if (this.energy >= 24) {
        var newCell = random(super.chooseCell(0));
        if (newCell) {
          var newPredator = new Predator(newCell[0], newCell[1], super.index);
          predatorArr.push(newPredator);
          matrix[newCell[1]][newCell[0]] = 3;
          this.energy -= 24;
        }
      }
    }
  }