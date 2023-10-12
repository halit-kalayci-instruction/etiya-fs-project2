const http = require("http")
const express = require("express");
const socketio = require("socket.io")


const app = express();

const server = http.createServer(app);

const ioServer = new socketio.Server(server, {
  cors: {
    origin: "*"
  }
});

// req => header,body
app.get("/", (req, res) => {
  console.log(req.params);
  console.log(req.headers);
  console.log(req.body);
  let array = [{ id: 1, name: 'halit' }, { id: 2, name: 'enes' }]
  res.send(array)
})

app.post('/', (req, res) => {
  console.log("Params", req.query);
  console.log("Headers", req.headers);
  console.log("Body", req.body);
  let array = [{ id: 1, name: 'halit' }, { id: 2, name: 'enes' }]
  res.json(array);
})

// WebSocket Server'a bağlantı yapan her socketi handle eder..
ioServer.on('connection', (socket) => {
  console.log("Yeni bağlantı", socket.id);

  socket.on('MessageSent', (message) => {
    // server tarafında clientlara veri göndermenin bir kaç yolu var.

    //ioServer.emit("MessageReceived", message); // servera o an bağlı tüm clientlara sinyal gönderir
    //socket.emit("MessageReceived", message); // sadece çağıran kişiye sinyal gönderir
    //socket.broadcast.emit("MessageReceived", message); // çağıran kişi hariç tüm clientlara gönderir
    //ioServer.in('kanal1').emit("MessageReceived", message) // kanal1'e üye tüm soketlere sinyal gönderir

    socket.broadcast.emit("MessageReceived", message);
  })

})

server.listen(9000, () => {
  console.log("Sunucu 9000 portunda hazır..")
})
