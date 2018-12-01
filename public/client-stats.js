var socket = io.connect('http://localhost:4444');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Date and Time</td><td>Grass Births</td><td>Grass Dies</td><td>GrassEater Births</td><td>GrassEater Dies</td><td>Predator Births</td><td>Predator Dies</td><td>Alien Birth</td><td>BlackHole Birth</td><td>frameCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.grassBirth+"</td>";
        tableHTML+="<td>"+st.grassDie+"</td>";
        tableHTML+="<td>"+st.grassEaterBirth+"</td>";
        tableHTML+="<td>"+st.grassEaterDie+"</td>";
        tableHTML+="<td>"+st.predatorBirth+"</td>";
        tableHTML+="<td>"+st.predatorDie+"</td>";
        tableHTML+="<td>"+st.alienBirth+"</td>";
        tableHTML+="<td>"+st.blackHoleBirth+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    console.log(statistics);
})

