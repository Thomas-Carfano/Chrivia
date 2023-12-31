const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/start', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/play', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

server.listen(process.env.PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${process.env.PORT}`)
    } else {
        console.log('not working')
    }
});

//Start of Game Code

io.on("connection", (socket) => {
    const joinRoom = (roomName, roomNum) => {
      if (!io.sockets.adapter.rooms.get(roomName)) {
        
        // if (io.sockets.adapter.rooms.get(roomName).size <= 0){
        //     console.log("No Users in Room");
        // }
        socket.join(roomNum);
        console.log(`Backend1: ${roomName}`)
        console.log(`Added ${socket.id} to ${roomName}`);
        console.log(io.sockets.adapter.rooms.get(roomNum).size);
        io.to(roomNum).emit("addUser", roomNum);
      }
        else if (io.sockets.adapter.rooms.get(roomName).size < 10) {
            socket.join(roomName);
            rooms.roomName.addPlayer();
        }
            else {
                roomNum++;
                roomName = `Room${roomNum}`;
                joinRoom(roomName, roomNum);

            }
    }
    socket.on("join", (randRoomNum) => {
        let roomNum = randRoomNum;
        let roomName = `Room ${randRoomNum}`;
        joinRoom(roomName, roomNum);
      });
});

