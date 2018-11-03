class Alien extends LivingCreature {
    constructor(x, y, index) {
      super(x,y,index);
      this.counter = 0;
    }
  
    getNewCoords() {
        this.directions = [];
        for(var y=0;y<40;y++){
          for(var x=0;x<40;x++){
            if(x!=0||y!=0){
              this.directions.push([this.x+x, this.y+y]);
              this.directions.push([this.x- x, this.y-y]);
            }
  
          }
        }
      }
  
  
      followBlackHole(){
        var blackHole=random(this.chooseCell(5));
        matrix[this.y][this.x]=0;
        if(blackHole!=undefined&&blackHole!=null){
          if(blackHole[0]>this.x)
            ++this.x;
          if(blackHole[0]<this.x)
            --this.x;
          if(blackHole[1]>this.y)
            ++this.y;
          if(blackHole[1]<this.y)
            --this.y;
        }
        matrix[this.y][this.x]=4;
      }
  
    change() {
      this.counter +=2;
      
  
      if(grassArr.length == 0 && grassEaterArr.length == 0 && predatorArr.length == 0){
        for (var y = 0; y <matrix.length; y++) {
          for (var x = 0; x < matrix[0].length; x++) {
            if(this.x!=x||this.y!=y)
              matrix[y][x]=1;
          }
      }
      
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=2;
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=2;
      
      
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=3;
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=3;
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=3;
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=3;
      matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=3;
  
      
  
      for(var y=0;y<matrix.length;y++){
        for(var x=0;x<matrix[y].length;x++){
            if(matrix[y][x]==1){
                var gr=new Grass(x,y,1);
                grassArr.push(gr);
            }
            else if(matrix[y][x]==2){
                var gretr=new GrassEater(x,y,2);
                grassEaterArr.push(gretr);
            }
            
            else if(matrix[y][x]==3){
                var pr=new Predator(x,y,3);
                predatorArr.push(pr);
            }
        }
      }
  
      console.log("The matrix is filled again!!!\n");
      
  
      }
  
      else if (this.counter >= 60) {
        while (grassArr.length != 0) {
          grassArr.pop();
        }
        while (grassEaterArr.length != 0) {
          grassEaterArr.pop();
        }
        while (predatorArr.length != 0) {
          predatorArr.pop();
        }
  
  
        for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
              matrix[y][x] = 1;
              grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 1) {
              matrix[y][x] = 0;
            }
            else if (matrix[y][x] == 2) {
              matrix[y][x] == 3;
              predatorArr.push(new Predator(x, y, 3));
            }
            else if (matrix[y][x] == 3) {
              matrix[y][x] = 2;
              grassEaterArr.push(new GrassEater(x, y, 2));
            }
          }
        }
  
  
  
        this.counter -= 30;
      }
      this.followBlackHole();
    }
  
  }