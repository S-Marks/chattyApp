const express = require('express');
const WebSockets = require('ws');
const SocketServer = WebSockets.Server;
const uuidv4 = require('uuid/v4');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const msg = JSON.parse(message);
    msg.id = uuidv4();
    console.log("Message", msg)

    wss.clients.forEach((client) => {
      if(client.readyState === WebSockets.OPEN) {
        client.send(JSON.stringify(msg))
      }
    })
  });

  ws.on('close', () => console.log('Client disconnected'));
});