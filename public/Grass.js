class Grass extends LivingCreature {
    constructor(x, y, index) {
      super(x,y,index);
      this.max = 3;
      this.multiply = 0;
      statistics.grassBirth++;
    }
  
  
    mul() {
      if(season==0)
        this.multiply++;
      else if(season==1)
        this.multiply+=3;
      else if(season==2)
        this.multiply+=4;
      else 
      this.multiply+=2;
      
      var newCell = random(super.chooseCell(0));
      if (this.multiply >= 8 && newCell) {
        var newGrass = new Grass(newCell[0], newCell[1], super.index);
        grassArr.push(newGrass);
        matrix[newCell[1]][newCell[0]] = 1;
        this.multiply = 0;
      }
      matrix[this.y][this.x]=1;
    }
  
  }
   