var fs = require('fs');  // for working with files
var express = require('express'); // preparing the server
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// an array for statistics managment
var statData = []; 

// if the specified file exists
if (fs.existsSync("public/data.json")) {
    // we read from it and immediately convert the result to object 
    var statData = require("./public/data.json");
}

// defining the directory of static files
app.use(express.static("public"));
// defining javascript directories required by client-side 
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));

// default path that simply directs to World #1
app.get('/', function (req, res) {
    res.redirect('index1.html');
});

// directing to World #1 
app.get('/1',function(req,res){
    res.redirect('index1.html');
});

// directing to World #2
app.get('/2',function(req,res){
    res.redirect('index2.html');
});

// directing to Statistics
app.get('/stats', function (req, res) {
    res.redirect('stats.html');
});

server.listen(4444);

io.on('connection', function (socket) {
    // getting statistics from World #1 or/and World #2 
    socket.on("send data", function (data) {
        // pushing new data into the array of stats
        statData.push(data); 
        console.log("Statistics: "+data[0]+"\n");
        // writing recent statistics to the data.json file
        fs.writeFile('public/data.json', JSON.stringify(statData)); 
    });

    
    // sending statistics to stats.html
    socket.on("get stats", function () { 
        // reading recent statistics from the data.json file
        fs.readFile('public/data.json', "utf8", function(err, statisticsFromFile) {
            // sending recent statistics to stats.html 
            socket.emit("send stats",statisticsFromFile);    
        });
        
    });
    
    // Special events
    // an alien is moved to another world by a black hole 
    
    socket.on("send alien to world #2",function(post){
        socket.emit("get alien from world #1",post);
    });
    
    
    socket.on("send alien to world #1",function(post){
        socket.emit("get alien from world #2",post);
    });
});
