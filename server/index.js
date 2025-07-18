var express = require('express');
var socket = require('socket.io');

//App setup

var app = express();
var server = app.listen(4000, function () {
    console.log('Listing to request on port 4000');
});

//Static files
const path = require('path')
app.use(express.static(path.join(__dirname, '../public')));

//Socket setup
var io = socket(server);

//To get unique id evrytime user refresh
io.on('connection', (socket) => {
    console.log('established socket connection', socket.id);

    //Handle chat event
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)
    });

});
