const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.use(express.static('public'));

io.on('connection', function (socket) {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');

    socket.on('my other event', (data) => {
        console.log('se recibio data del cliente');
        console.log(data);
    });
});


setInterval(() => {
    io.emit('mensaje', 'Saludos desde el servidor');
    console.log('se envio mensaje al cliente');
}, 3000);

server.listen(PORT, function () {
    console.log(`Servidor iniciando en http://localhost:${PORT}`);
});