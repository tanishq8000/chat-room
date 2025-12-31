import { io } from "socket.io-client";

const socket = io("https://chat-room-42n5.onrender.com", {
  autoConnect: false,
  transports: ["polling", "websocket"],
  withCredentials: true,
});

export default socket;
