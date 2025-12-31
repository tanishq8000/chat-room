require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const Message = require("./models/Message");
const app = express();
app.use(cors());

const connectDB = require("./db");

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", async () => {
    const oldMessages = await Message.find().sort({ time: 1 }).limit(50);
    socket.emit("previous-messages", oldMessages);
  });

  // 2️⃣ Listen for new messages
  socket.on("send-message", async (data) => {
    const message = await Message.create({
      user: data.user,
      text: data.text,
    });

    io.emit("receive-message", message);
  });

  socket.on("leave", () => {
    console.log("User left room:", socket.id);
  });

  // 3️⃣ Handle disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
