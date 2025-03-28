import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = new http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId} //we will set users socket Ids in user Ids.

io.on("connection", (socket) => {
  console.log("User id connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // io.emit() is use to for send events to all connected clients.
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //socket.on() is used to listen to the event. can be used both on server and client side
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // after delete disconnected user, update the all users
  });
});

export { app, io, server };
