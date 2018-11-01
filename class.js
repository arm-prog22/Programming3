class Grass{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.max=3;
       this.multiply = 0;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];

    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
          }
          }
        return found;
     }
     
     
     mul(){
      this.multiply++;
      var newCell=random(this.chooseCell(0));
      if(this.multiply>=2 && newCell){
        var newGrass=new Grass(newCell[0],newCell[1],this.index);
        grassArr.push(newGrass);
        matrix[newCell[1]][newCell[0]]=1;
        this.multiply=0;
      }
     }
     
}

class GrassEater{
  constructor(x,y,index){ 
    this.x=x;
    this.y=y;
    this.index=index;
    this.energy=10;
    this.directions=[];
  }

  getNewCoords(){
    this.directions=[
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
  }

  chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
          }
          }
        return found;
     }

  move(){
   this.getNewCoords();
    var newCell=random(this.chooseCell(0));
    if(newCell){
    matrix[this.y][this.x]=0;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=2;
    }
  }


  eat(){
    this.getNewCoords();
    var newCell=random(this.chooseCell(1));
    if(newCell){
    matrix[this.y][this.x]=0;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=2;
    for(var i in grassArr){
      if(grassArr[i].x==this.x&&grassArr[i].y==this.y){
        grassArr.splice(i,1);
      }
    } 
    this.energy+=12;
    }
    else{
      this.move();
      this.die();
    }
    this.mul();
  }

  die(){
    this.energy-=2;
    if(this.energy<=0){
    for(var i in grassEaterArr){
      if(grassEaterArr[i].x==this.x&&grassEaterArr[i].y==this.y){
        grassEaterArr.splice(i,1);
      }
    }
    matrix[this.y][this.x]=0;
    }
  }

  mul(){
    this.getNewCoords();
    if(this.energy>=12){
      var newCell=random(this.chooseCell(0));
      if(newCell){
      var newGrassEater=new GrassEater(newCell[0],newCell[1],this.index); 
      grassEaterArr.push(newGrassEater);
      matrix[newCell[1]][newCell[0]]=2;
      this.energy-=12;
      }
    }
  }
}


class Predator{
  constructor(x,y,index){ 
    this.x=x;
    this.y=y;
    this.index=index;
    this.energy=20; 
    this.directions=[];
  }

  getNewCoords(){
    this.directions=[
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
  }

  chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
          }
          }
        return found;
     }

  move(){
   this.getNewCoords();
    var newCell=random(this.chooseCell(0));
    if(newCell){
    matrix[this.y][this.x]=0;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=3;
    this.energy--;
    }
  }


  eat(){
    this.getNewCoords();
    var newCell=random(this.chooseCell(2));
    if(newCell){
    matrix[this.y][this.x]=0;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=3;
    for(var i in grassEaterArr){
      if(grassEaterArr[i].x==this.x&&grassEaterArr[i].y==this.y){
        grassEaterArr.splice(i,1);
    }    
    } 
    this.energy+=12;
    }
    else{
      this.move();
      this.die();
    }
    this.mul();
  }

  die(){
    this.energy-=2;
    if(this.energy<=0){
    for(var i in predatorArr){
      if(predatorArr[i].x==this.x&&predatorArr[i].y==this.y){
        predatorArr.splice(i,1);
      }
    }
    matrix[this.y][this.x]=0;
    }
  } 

  mul(){
    this.getNewCoords();
    if(this.energy>=24){
      var newCell=random(this.chooseCell(0));
      if(newCell){
      var newPredator=new Predator(newCell[0],newCell[1],this.index); 
      predatorArr.push(newPredator);
      matrix[newCell[1]][newCell[0]]=3;
      this.energy-=24;
      }
    }
  }
}

class Human{
  constructor(x,y,index){ 
    this.x=x;
    this.y=y; 
    this.index=index;
    this.energy=40; 
    this.directions=[];
  }

  getNewCoords(){
    this.directions=[
         ///////
        [this.x - 2, this.y - 2],
        [this.x - 1, this.y - 2],
        [this.x , this.y - 2],
        [this.x + 1, this.y - 2],
        [this.x +2, this.y - 2],
        //
        [this.x - 2, this.y - 1],
        [this.x - 1, this.y - 1],
        [this.x , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x +2, this.y - 1],
        //
        [this.x - 2, this.y +1],
        [this.x - 1, this.y +1],
        [this.x , this.y +1],
        [this.x + 1, this.y +1],
        [this.x +2, this.y +1],
        //
        [this.x - 2, this.y+ 2],
        [this.x - 1, this.y+ 2],
        [this.x , this.y +2],
        [this.x + 1, this.y+ 2],
        [this.x +2, this.y +2],
        //
        [this.x - 2, this.y],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x +2, this.y],
        ///////
    ];
  }

  chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
          }
          }
        return found;
     }

  move(){
   this.getNewCoords();
    var newCell=random(this.chooseCell(0));
    if(newCell){
    matrix[this.y][this.x]=0;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=4;
    this.energy--;
    }
  }


  eat(){
    this.getNewCoords();
    var newCell=random(this.chooseCell(3));
    if(newCell){
      matrix[this.y][this.x]=0;
      this.x=newCell[0];
      this.y=newCell[1];
      matrix[this.y][this.x]=4;
      for(var i in predatorArr){
        if(predatorArr[i].x==this.x&&predatorArr[i].y==this.y){
          predatorArr.splice(i,1);
      }    
      } 
      this.energy+=48;
    }
    else{
      newCell=random(this.chooseCell(2));
      if(newCell){
      matrix[this.y][this.x]=0;
      this.x=newCell[0];
      this.y=newCell[1];
      matrix[this.y][this.x]=4;
      for(var i in grassEaterArr){
        if(grassEaterArr[i].x==this.x&&grassEaterArr[i].y==this.y){
          grassEaterArr.splice(i,1);
      }    
      } 
      this.energy+=24;
      }
      else{
      newCell=random(this.chooseCell(1));
      if(newCell){    
      matrix[this.y][this.x]=0;
      this.x=newCell[0];
      this.y=newCell[1];
      matrix[this.y][this.x]=4;
      for(var i in grassArr){
        if(grassArr[i].x==this.x&&grassArr[i].y==this.y){
          grassArr.splice(i,1);
      }    
      } 
      this.energy+=12;
      }
      else{
        this.move();
        this.die();
      }
    }
    this.mul();
  }
  }

  die(){
    this.energy-=2;
    if(this.energy<=0){
    for(var i in humanArr){
      if(humanArr[i].x==this.x&&humanArr[i].y==this.y){
      humanArr.splice(i,1);
      }
    }
    matrix[this.y][this.x]=0;
    }
  } 

  mul(){
    this.getNewCoords();
    if(this.energy>=48){
      var newCell=random(this.chooseCell(0));
      if(newCell){
      var newHuman=new Human(newCell[0],newCell[1],this.index); 
      humanArr.push(newHuman);
      matrix[newCell[1]][newCell[0]]=4;
      this.energy-=48;
      }
    }
  }
}


class AquaticPlant{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.max=3;
       this.multiply = 0;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];

    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
          }
          }
        return found;
     }
     
     
     mul(){
      var newCell=random(this.chooseCell(-1));
      if(newCell){
        this.multiply++;
      if(this.multiply>=2){
        var newAquaticPlant=new AquaticPlant(newCell[0],newCell[1],this.index);
        aquaPlantArr.push(newAquaticPlant);
        matrix[newCell[1]][newCell[0]]=5;
        this.multiply=0;
      }
     }
     }
}

class Fish{
  constructor(x,y,index){ 
    this.x=x;
    this.y=y;
    this.index=index;
    this.energy=8;
    this.directions=[];
  }

  getNewCoords(){
    this.directions=[
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
  }

  chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
          }
          }
        return found;
     }

  move(){
   this.getNewCoords();
    var newCell=random(this.chooseCell(-1));
    if(newCell){
    matrix[this.y][this.x]=-1;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=6;

    }
  }


  eat(){
    this.getNewCoords();
    var newCell=random(this.chooseCell(5));
    if(newCell){
    matrix[this.y][this.x]=-1;
    this.x=newCell[0];
    this.y=newCell[1];
    matrix[this.y][this.x]=6;
    for(var i in aquaPlantArr){
      if(aquaPlantArr[i].x==this.x&&aquaPlantArr[i].y==this.y){
        aquaPlantArr.splice(i,1);
      }
    } 
    this.energy+=12;
    }
    else{
      this.move();
      this.die();
    }
    this.mul();
  }

  die(){
    this.energy-=2;
    if(this.energy<=0){
    for(var i in fishArr){
      if(fishArr[i].x==this.x&&fishArr[i].y==this.y){
        fishArr.splice(i,1);

      }
    }
    matrix[this.y][this.x]=-1;
    }
  }

  mul(){
    this.getNewCoords();
    if(this.energy>=12){
      var newCell=random(this.chooseCell(-1 ));
      if(newCell){
      var newFish=new Fish(newCell[0],newCell[1],this.index); 
      fishArr.push(newFish);
      matrix[newCell[1]][newCell[0]]=6;
      this.energy-=12;

      }
    }
  }
}


