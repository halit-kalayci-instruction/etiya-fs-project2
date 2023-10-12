const http = require("http")
const express = require("express");

const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  let array = [{ id: 1, name: 'halit' }, { id: 2, name: 'enes' }]
  res.send(array)
})

server.listen(9000, () => {
  console.log("Sunucu 9000 portunda hazır..")
})
