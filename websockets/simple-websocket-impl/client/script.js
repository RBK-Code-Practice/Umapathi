const websocket = new WebSocket("ws://localhost:8080");

websocket.onopen = () => {
  console.log("WebSocket connection established...");
};

websocket.onmessage = ({ data }) => {
  console.log("Message from server: ", data);
  const message = document.createElement("h3");
  message.textContent = `SERVER: ${data}`;
  document.body.appendChild(message);
};

websocket.onclose = () => {
  console.log("WebSocket connection closed...");
};

websocket.onerror = (error) => {
  console.error("WebSocket error:", error);
};

document.getElementById("send-btn").onclick = () => {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;
  websocket.send(message);
  messageInput.value = ""; // Clear input field after sending
};
