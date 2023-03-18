const http = require("http");

const url = require("url");

const server = http.createServer((req, res) => {
  const address_url =
    "http://localhost:3003/contact?name=sarwarHossain&country=bangladesh";
  const parsedUrl = url.parse(address_url, true);
  console.log(parsedUrl);


//   res.end("ok");
});

// console.log(url);
// console.log("Start re");

const PORT = 3003;

server.listen(PORT);

console.log(`Server is running at ${PORT}`);
