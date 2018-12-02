// This is NOT the same black hole from Programming 2
// I've renamed BlackHole from Programming 2 like Storm

// This is a NEW SPECIAL CHARACTER
// which moves throgh the matrix and looks for an alien
// to swallow in order to send it to the other world

class BlackHole extends LivingCreature{
    constructor(x,y,index,world){
      super(x,y,index);
      this.directions=[];
      this.world=world;
      this.counter=0;
    }
  
      getNewCoords() {
        this.directions=[];

        for(var y=0;y<2;y++){
            for(var x=0;x<2;x++){
              if(x!=0||y!=0){
                this.directions.push([this.x+x, this.y+y]);
                this.directions.push([this.x- x, this.y-y]);
              }
    
            }
          }
        
      }
    
      move() {
        this.getNewCoords();
        var newCell = random(this.chooseCell(0));
        if (newCell) {
          matrix[this.y][this.x] = 0;
          this.x = newCell[0];
          this.y = newCell[1];
          matrix[this.y][this.x] = 6;
        }
      }
  
      swallow(){
        this.getNewCoords();
        this.counter+=2;
          
        if(this.counter>=120){
            if(this.world==1){
                var position=random(this.chooseCell(4));
                if(position!=undefined){
                var postAlien;
                for(var i=0;i<alienArr.length;i++)
                if(position.x==alienArr[i].x&&position.y==alienArr[i].y){
                postAlien=alienArr[i];
                alienArr.splice(i,1);
                }
                console.log("Transfering from world #1 to world #2 with the blackHole");
                socket.emit("send alien to world #2",postAlien);
            }
            }
            else{
                var position=random(this.chooseCell(4));
                if(position!=undefined){
                var postAlien;
                for(var i=0;i<alienArr.length;i++)
                if(position.x==alienArr[i].x&&position.y==alienArr[i].y){
                postAlien=alienArr[i];
                alienArr.splice(i,1);
                }
                console.log("Transfering from world #1 to world #2 with the blackHole");
                socket.emit("send alien to world #1",postAlien);
            }
            }
            this.counter=0;
        }
        matrix[this.y][this.x] = 6;
        this.move();
      }
  }

