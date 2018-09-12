var http = require("http");
var PORT0 = 7000; 
var PORT1 = 7500; 
//8080 is a standard server port (just like ships!) Listening for requests/info exchange
function handleRequest0(request, response){
    response.end("It Works!! Route hit: " + request.url);
}
function handleRequest1(request, response){
    response.end("Yessum!! Route hit: " + request.url);
}

var server0 = http.createServer(handleRequest0); 
var server1 = http.createServer(handleRequest1); 

//passing handleRequest function to createServer, built into http, 
//PRESS CTL + C if make typo to exit in terminal
server0.listen(PORT0, function(){
    console.log("Server listening on: http://localhost:%s", PORT0);
    console.log("You are the most magnificent unicorn.")
})

server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:%s", PORT1);
    console.log("You are a cotton-headed ninny muggins.")
})
