const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const routes = require("./routes");
require("./database");
require("dotenv").config();
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const port = process.env.PORT;

const origin = process.env.ORIGIN;

app.use(
  cors({
    credentials: true,
    origin,
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin,
    credentials: true,
    allowEIO3: true,
    methods: ["GET", "POST"],
  },

  transport: ["websocket"],
});

app.use(express.json());
app.use("/", routes);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("join_room", (data) => {
    socket.join(data.room);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit(`receive_message_room_${data.room}`, data);
  });

  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
}

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
