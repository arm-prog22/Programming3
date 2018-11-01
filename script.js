var yMax=40;
var xMax=40;

var matrix=new Array(yMax);


// Grass and Aquatic Plant
for (var y = 0; y <yMax; y++) {
    matrix[y]=[];
    for (var x = 0; x < xMax; x++) {
        if(y<yMax/2)
        matrix[y].push(1); // Grass
        else
        matrix[y].push(5); // Aquatic Plant
    }
}

// GrassEater
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=2;
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=2;

// Predators
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=3;
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=3;
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=3;
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=3;
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=3;

// Human
matrix[Math.floor(Math.random()*yMax/2)][Math.floor(Math.random()*xMax)]=4;

// Aqua world

// Fishes 
matrix[Math.floor(Math.random()*yMax/2+yMax/2)][Math.floor(Math.random()*xMax)]=6;
matrix[Math.floor(Math.random()*yMax/2+yMax/2)][Math.floor(Math.random()*xMax)]=6;
matrix[Math.floor(Math.random()*yMax/2+yMax/2)][Math.floor(Math.random()*xMax)]=6;

var side = 20;
 
 var grassArr=[];
 var grassEaterArr=[];
 var predatorArr=[];
 var humanArr=[];
 var aquaPlantArr=[];
 var fishArr=[];
 
 function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(5);

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
            
            else if(matrix[y][x]==4){
                var hmn=new Human(x,y,4);
                humanArr.push(hmn);
            }
            else if(matrix[y][x]==5){
                var aqpl=new AquaticPlant(x,y,5);
                aquaPlantArr.push(aqpl);
            }
            else if(matrix[y][x]==6){
                var fsh=new Fish(x,y,6);
                fishArr.push(fsh);
            }
        }
    }

    /*
    for(var cell in grassArr){
        console.log(grassArr[cell].chooseCell(0));
    }   

    console.log("GrassEaters are coming!!!");

    for(var cell in grassEaterArr){
        console.log(grassEaterArr[cell].chooseCell(0));
    } 

     for(var cell in predatorArr){
        console.log(predatorArr[cell].chooseCell(0));
    } 
    */  
 }

    
 function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x]==-1){
                fill("#4286f4");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

              if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }

            else if(matrix[y][x]==2){
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==3){
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==4){
                fill("#f7b560");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==5){
                fill("#1ee85e");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==6){
                fill("#075d8e");
                rect(x * side, y * side, side, side);
            }
        }
    }


    // for Humans
    for(var i in humanArr){
        humanArr[i].eat();
    }

    // for Predators
    for(var i in predatorArr){
        predatorArr[i].eat();
    }
    

    // for GrassEaters 
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();
    }

    // for Grasses
    for(var i in grassArr){
        grassArr[i].mul();
    }

    // Aqua world
      
    // for AquaticPlants
    for(var i in aquaPlantArr){
        aquaPlantArr[i].mul();
    }

    // for Fishes
    for(var i in fishArr){
        fishArr[i].eat();
    }
 }