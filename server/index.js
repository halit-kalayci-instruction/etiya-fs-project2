const http = require("http")
const express = require("express");

const app = express();

const server = http.createServer(app);

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

server.listen(9000, () => {
  console.log("Sunucu 9000 portunda hazır..")
})
