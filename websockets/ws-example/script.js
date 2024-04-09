const ws = new WebSocket('ws://localhost:8080');

ws.onopen = function() {
  console.log('Connected to WebSocket server');
  
  // Sending a Text message
  ws.send('Hello, WebSocket! This is a Text message.');

  // Sending a Binary message as ArrayBuffer
  const binaryData = new Uint8Array([0x48, 0x65, 0x6C, 0x6C, 0x6F]);
  ws.send(binaryData.buffer);

  // Sending a Binary message as Blob
  const blobData = new Blob(['Binary Blob Data Example']);
  ws.send(blobData);
};

ws.onmessage = function(event) {
  console.log('Received message:', event.data);
};
