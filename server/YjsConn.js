const http = require('http');
const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils.js');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Yjs server running');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

const port = process.env.PORT || 1234;
server.listen(port, () => {
  console.log(`✅ Yjs WebSocket server running at ws://localhost:${port}`);
});