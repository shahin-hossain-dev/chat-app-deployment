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

io.on("connection", (socket) => {
  console.log("User id connected", socket.id);

  //socket.on() is used to listen to the event. can be used both on server and client side
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

export { app, io, server };
