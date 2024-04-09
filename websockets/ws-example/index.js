//ws accepts text frames and binary frames
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', (data) => {
    if (typeof data === 'string') {
      console.log('Received Text Message:', data);
    } else if (data instanceof ArrayBuffer) {
      console.log('Received Binary Message (ArrayBuffer):', data);
    } else if (data instanceof Buffer) {
      console.log('Received Binary Message (Buffer):', data);
    } else if (data instanceof Blob) {
      console.log('Received Binary Message (Blob):', data);
    } else {
      console.log('Received Unknown Message Type:', data);
    }
  });
});