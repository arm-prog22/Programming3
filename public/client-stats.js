var socket = io.connect('http://localhost:4444');
var table = document.getElementById("statistics");

// With the interval of 60 miliseconds
setInterval(function(){
    // make a query to server for statistics
    socket.emit("get stats", []);
}, 60);

    

// getting statistics from the server

socket.on("send stats",function(statistics){

    // Making the table of statistics
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Date and Time</td><td>World</td><td>Grass Births</td><td>Grass Dies</td><td>GrassEater Births</td><td>GrassEater Dies</td><td>Predator Births</td><td>Predator Dies</td><td>Alien Radiation</td><td>Storm Birth</td><td>frameCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>World #"+st.world+"</td>";
        tableHTML+="<td>"+st.grassBirth+"</td>";
        tableHTML+="<td>"+st.grassDie+"</td>";
        tableHTML+="<td>"+st.grassEaterBirth+"</td>";
        tableHTML+="<td>"+st.grassEaterDie+"</td>";
        tableHTML+="<td>"+st.predatorBirth+"</td>";
        tableHTML+="<td>"+st.predatorDie+"</td>";
        tableHTML+="<td>"+st.alienRadiation+"</td>";
        tableHTML+="<td>"+st.stormBirth+"</td>";
        tableHTML+="<td>"+st.framecount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
   
})

