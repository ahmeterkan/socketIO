const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    console.log("bağlandı")
    const header = socket.handshake.headers['authorization'];
    console.log(header);
    socket.on("disconnect", () => {
        console.log("çıktı")
    })
});

io.on('connection', (socket) => {
    socket.on("send-message", (data) => {
        console.log(data)
        io.emit("messages", data)
    })
});