const websocket = require("ws");

const webSocketServer = new websocket.Server({ port: 8080 });

webSocketServer.on("connection", (socket) => {
    console.log('Client connected...',socket);
      socket.on("message", (message) => {
        socket.send(`Server replied with ${message} client sent`);
  });
});
