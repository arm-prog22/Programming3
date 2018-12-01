var socket = io.connect('http://localhost:4444');
var statistics = {
    "timestamp": "",
    "world": 1,
    "grassBirth": 0,
    "grassDie": 0,
    "grassEaterBirth": 0,
    "grassEaterDie": 0,
    "predatorBirth": 0,
    "predatorDie": 0,
    "alienRadiation": 0,
    "stormBirth": 0,
    "framecount": 0
};

/////////// migrated from script.js

 var yMax=40;
 var xMax=40;
 
 var matrix=new Array(yMax);

 var grassArr=[];
 var grassEaterArr=[];
 var predatorArr=[];
 var alienArr=[];
 var stormArr=[];
 
 for (var y = 0; y <yMax; y++) {
     matrix[y]=[];
     for (var x = 0; x < xMax; x++) {
         matrix[y].push(Math.floor(Math.random()*3.5));
     }
 }
 
 
 matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=4;
 
 matrix[Math.floor(Math.random()*yMax)][Math.floor(Math.random()*xMax)]=5;
 
 var side = 20;
 
  var season=0;
 
 // Manipulating seasons
 
  var winter=document.getElementById("winter");
  if(winter!=undefined)
  winter.addEventListener("click", function(){ season=0; });
  var spring=document.getElementById("spring");
  if(spring!=undefined)
  spring.addEventListener("click",function(){ season=1; });
  var summer=document.getElementById("summer");
  if(summer!=undefined)
  summer.addEventListener("click",function(){ season=2; });
  var autumn=document.getElementById("autumn");
  if(autumn!=undefined)
  autumn.addEventListener("click", function(){ season=3; });
 
 
 
 
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
                 var al=new Alien(x,y,4);
                 alienArr.push(al);
             }
             else if(matrix[y][x]==5){
                 var storm=new Storm(x,y,5);
                 stormArr.push(storm);
             }
         }
     }  
  }
 
     
  function draw() {
    if (frameCount % 60 === 0) {
        statistics.timestamp = (new Date()).toString();
        statistics.framecount = frameCount;
        console.log("Statistics: "+statistics);
        socket.emit("send data", statistics);
    }

      if(season==0)
     frameRate(5);
     else if(season==1)
     frameRate(250);
     else if(season==2)
     frameRate(500);
     else 
     frameRate(250);
 
     for (var y = 0; y < matrix.length; y++) {
         for (var x = 0; x < matrix[y].length; x++) {
  
             if (matrix[y][x] == 1) {
                 if(season==0)
                 fill("#99ffcc");
                 else if(season==1)
                 fill("#00ff00");
                 else if(season==2)
                 fill("#00cc00");
                 else 
                 fill("#99cc00");
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
                 fill("blue");
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
     // for Storms
     for(var i in stormArr){
     stormArr[i].swallow();
     }

     
    
  }  



