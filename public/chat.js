//Establish the connection

var socket = io.connect('http://localhost:4000');

//Query DOM

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');


//Emit Events when user press/click the send button

btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

// Emit event when some user is typing and other sees on thier page
message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat', function (data) {
    feedback.innerHTML =""
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing ....</em></p>';
});