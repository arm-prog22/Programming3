// it is the same balck hole from Programming2 
// I've just renamed it
class Storm extends LivingCreature{
    constructor(x,y,index){
      super(x,y,index);
      this.directions=[];
      statistics.stormBirth++;
    }
  
      getNewCoords() {
        this.directions = [
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
    
      move() {
        this.getNewCoords();
        var newCell = random(this.chooseCell(0));
        if (newCell) {
          matrix[this.y][this.x] = 0;
          this.x = newCell[0];
          this.y = newCell[1];
          matrix[this.y][this.x] = 5;
        }
      }
  
      swallow(){
        this.getNewCoords();
          
  
          ///////////////////////////
          // for Grasses
           var searchGrass=random(super.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
  
  
        searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
  
        searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
      
          searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
  
          searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
  
         searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
  
         searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
  
         searchGrass=random(this.chooseCell(1));
          if(searchGrass!=undefined){
          var grass;
          for (var i = 0; i < grassArr.length; i++) {
            if(grassArr[i].x==searchGrass[0]&&grassArr[i].y==searchGrass[1]){
              grass=grassArr[i];
            }
          }
          if(grass!=undefined){
          matrix[grass.y][grass.x]=0;
          grass.x=Math.floor(Math.random()*xMax);
          grass.y=Math.floor(Math.random()*yMax);
          matrix[grass.y][grass.x]=1;
        }
        }
        ///////////////////////////
        // for GrassEaters
         var searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        searchGrassEater=random(this.chooseCell(2));
        if(searchGrassEater!=undefined){
          var grassEater;
          for (var i = 0; i < grassEaterArr.length; i++) {
            if(grassEaterArr[i].x==searchGrassEater[0]&&grassEaterArr[i].y==searchGrassEater[1]){
              grassEater=grassEaterArr[i];
            }
          }
          if(grassEater!=undefined){
          matrix[grassEater.y][grassEater.x]=0;
          grassEater.x=Math.floor(Math.random()*xMax);
          grassEater.y=Math.floor(Math.random()*yMax);
          matrix[grassEater.y][grassEater.x]=2;
          }
        }
  
        ////////////////////////////
        // for Predators
       var searchPredator=random(this.chooseCell(3));
        if(searchPredator!=undefined){
          var predator;
          for (var i = 0; i < predatorArr.length; i++) {
            if(predatorArr[i].x==searchPredator[0]&&predatorArr[i].y==searchPredator[1]){
              predator=predatorArr[i];
            }
          }
          if(predator!=undefined){
          matrix[predator.y][predator.x]=0;
          predator.x=Math.floor(Math.random()*xMax);
          predator.y=Math.floor(Math.random()*yMax);
          matrix[predator.y][predator.x]=3;
          }
        }
  
        searchPredator=random(this.chooseCell(3));
        if(searchPredator!=undefined){
          var predator;
          for (var i = 0; i < predatorArr.length; i++) {
            if(predatorArr[i].x==searchPredator[0]&&predatorArr[i].y==searchPredator[1]){
              predator=predatorArr[i];
            }
          }
          if(predator!=undefined){
          matrix[predator.y][predator.x]=0;
          predator.x=Math.floor(Math.random()*xMax);
          predator.y=Math.floor(Math.random()*yMax);
          matrix[predator.y][predator.x]=3;
          }
        }
  
        searchPredator=random(this.chooseCell(3));
        if(searchPredator!=undefined){
          var predator;
          for (var i = 0; i < predatorArr.length; i++) {
            if(predatorArr[i].x==searchPredator[0]&&predatorArr[i].y==searchPredator[1]){
              predator=predatorArr[i];
            }
          }
          if(predator!=undefined){
          matrix[predator.y][predator.x]=0;
          predator.x=Math.floor(Math.random()*xMax);
          predator.y=Math.floor(Math.random()*yMax);
          matrix[predator.y][predator.x]=3;
          }
        }
        ///////////////////////////////
        // for Aliens
        var searchAlien=random(this.chooseCell(4));    
         if(searchAlien!=undefined){
          var alien;
          for (var i = 0; i < alienArr.length; i++) {
            if(alienArr[i].x==searchAlien[0]&&alienArr[i].y==searchAlien[1]){
              alien=alienArr[i];
            }
          }
          if(alien!=undefined){
          matrix[alien.y][alien.x]=0;
          alien.x=Math.floor(Math.random()*xMax);
          alien.y=Math.floor(Math.random()*yMax);
          matrix[alien.y][alien.x]=4;
          }
        }
        
        
        this.move();
      }
  }
