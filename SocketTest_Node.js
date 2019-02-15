const net = require('net');
var HOST = '127.0.0.1';
var PORT = 8475;var seq=0;
function close() {
    console.log('disconnected');
  };

  const WebSocket = require('ws');
 
  const wss = new WebSocket.Server({ port: PORT });
  function loop(){
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
          client.send("Server send "+seq);}})
    console.log("Server Working!"+seq);seq++;
  }
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: '+ message);
      ws.send("Server receive "+ message);
    });
    ws.on('close', close);
   
  });
  setInterval(loop,5000);
  console.log("Server Working at "+PORT);
    