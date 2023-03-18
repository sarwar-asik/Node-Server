// console.log("====> Start index.js ===");

const http = require("http");

const server = http.createServer(function (req, res) {
  console.log("server is running");
});

server.listen(5000);
