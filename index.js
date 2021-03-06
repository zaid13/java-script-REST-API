// const express = require('express');
// const app = express();


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = process.env.PORT || 3000;



// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

  
// app.listen(port, () => console.log(`Server is listening on port ${port}...`));
var WebSocket = require('ws');

var port = process.env.PORT || 3000;

var server = new WebSocket.Server(
  {
    port: port,
  }
)

let msg = "Server: Welcome!";

server.on('connection', function connection(client) {
  client.send(msg);
  client.on('message', function incoming(message) {
    msg = message;
    for(var cl of server.clients) {
      cl.send(message);
    }
    console.log("Received the following message:\n" + message);
  });
});
