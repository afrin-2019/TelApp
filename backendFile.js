const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', socket => {
  console.log('user connected');
  var message = 'PushedfromBackend';
  socket.broadcast.emit('NewMessage', message);
});

server.listen(5002);
