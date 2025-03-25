// Use the EMQX broker secure WebSocket endpoint on port 8084 if needed,
// but here we're using a non-secure connection as an example:
const broker = "wss://broker.emqx.io:8084/mqtt";  
const client = mqtt.connect(broker);

client.on("connect", () => {
  console.log("Connected to MQTT broker via WebSocket!");
});

client.on("error", (err) => {
  console.error("MQTT Connection Error:", err);
});

// Function to send a command to a specified topic
function sendCommand(topic, command) {
  client.publish(topic, command, { qos: 0 }, (error) => {
    if (error) {
      console.error("Publish error:", error);
    } else {
      console.log(`Command "${command}" sent to topic "${topic}"`);
    }
  });
}
