const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const routes = require("./routes");
require("./database");
const http = require("http");
const { Server } = require("socket.io");

const port = 3001;

const origin = "http://localhost:3000";

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
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
