var yMax=40;
var xMax=40;

var matrix=new Array(yMax);

for (var y = 0; y <yMax; y++) {
    matrix[y]=[];
    for (var x = 0; x < xMax; x++) {
        matrix[y].push(Math.floor(Math.random()*3.5));
    }
}


matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=4;

matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=5;

var side = 20;
 
 var grassArr=[];
 var grassEaterArr=[];
 var predatorArr=[];
 var alienArr=[];
 var blackHoleArr=[];
 
 function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(100);

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
                var al=new Alien(x,y,4);
                alienArr.push(al);
            }
            else if(matrix[y][x]==5){
                var blhl=new BlackHole(x,y,5);
                blackHoleArr.push(blhl);
            }
        }
    }  
 }

    
 function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==5){
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
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
    
    // for Aliens
    for (var i in alienArr){
    alienArr[i].change();
    }
    // for Black Holes
    for(var i in blackHoleArr){
    blackHoleArr[i].swallow();
    }
 }  