var fs = require('fs');  //ֆայլերի մեջ գրել և կարդալու համար
var express = require('express'); //սերվեր
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var statData = []; //ստատիստիկան պահպանող օբյեկտների զանգվածը

//եթե ֆայլը կա
if (fs.existsSync("public/data.json")) {
    //կարդում ենք ֆայլից և անմիջապես դարձնում օբյեկտ 
    var statData = require("./public/data.json");
}

//սահմանում ենք, ստատիկ ֆայլերի դիրեկտորիան
app.use(express.static("public"));
//սահմանում ենք կլիենտին անհրաժեշտ javascript-ների դիրեկտորիաները, տես index.html-ում
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));

//արմատի շավիղը (rout-ը)
app.get('/', function (req, res) {
    res.redirect('index1.html');
});

app.get('/1',function(req,res){
    res.redirect('index1.html');
});

app.get('/2',function(req,res){
    res.redirect('index2.html');
});
//ստատիստիկայի շավիղը
app.get('/stats', function (req, res) {
    res.redirect('stats.html');
});

server.listen(4444);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statData.push(data); //ավելացնում ենք նոր տվյալը զանգվածում
        console.log("Statistics: "+data[0]+"\n");
        fs.writeFile('public/data.json', JSON.stringify(statData)); //գրում ենք ստատսիտկայի տվյալները ֆայլի մեջ
    });

    socket.on("get stats", function () { //երբ կլիենտը ուղարկում է "get stats" 
        //կարդում ենք ստատիստիկայի ֆայլը
        fs.readFile('public/data.json', "utf8", function(err, statisticsFromFile) {
            //և ուղարկում ենք այն "send stats" պիտակով
            socket.emit("send stats",statisticsFromFile);    
        });
        
    });
    
    socket.on("send alien to world #2",function(post){
        socket.emit("get alien from world #1",post);
    });

    socket.on("send alien to world #1",function(post){
        socket.emit("get alien from world #2",post);
    });
});
