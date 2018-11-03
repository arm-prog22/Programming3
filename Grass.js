class Grass extends LivingCreature {
    constructor(x, y, index) {
      super(x,y,index);
      this.max = 3;
      this.multiply = 0;
    }
  
  
  
  
    mul() {
      this.multiply++;
      var newCell = random(super.chooseCell(0));
      if (this.multiply >= 2 && newCell) {
        var newGrass = new Grass(newCell[0], newCell[1], super.index);
        grassArr.push(newGrass);
        matrix[newCell[1]][newCell[0]] = 1;
        this.multiply = 0;
      }
      matrix[this.y][this.x]=1;
    }
  
  }
   