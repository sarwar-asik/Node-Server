const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // fs.readFile("data.txt", (error, data) => {
    //   if (error) {
    //     res.write("Failed to read data ");
    //     res.end();
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // });

    // or //

    // const data = fs.readFileSync("data.txt");
    // res.write(data);
    // res.end();
    // or ////
    fs.writeFile("newData.txt", "hello NodeJS ", (err) => {
      if (err) {
        req.write("Data failed for write");
        res.end();
      } else {
        res.write("data successfully ");
        res.end();
      }
    });
  }
});

const PORT = 3004;

server.listen(PORT);

console.log(`Server is   running on ${PORT}`);
