import { io } from "socket.io-client";

const socket = io("https://chat-backend.onrender.com", {
  autoConnect: false,
  transports: ["websocket"],
});

export default socket;
