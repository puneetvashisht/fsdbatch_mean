var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'))

// io.on('connection', function(){ 
//     console.log('Connected!!')
// });

io.on('connection', function(client){
    client.on('message', function(msg){
        console.log('Message Recieved: ', msg)
        client.emit('message', 'From server: ' + msg);
        // io.broadcast("From server : "+msg);
    });
});

server.listen(3000);