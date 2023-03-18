console.log("node Server.js >>>>>>>>");

const { stringify } = require("querystring");
const { name, add, subtract } = require("./other");

try {
  const res = subtract(30, 15);
  //   console.log(res);
  const http = require("http");

  //   console.log(http.STATUS_CODES);
  http
    .createServer((req, res) => {
      // console.log("res,,,,,,,,", res, ".........res");
      if (req.url === "/") {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("<h1>This is Home page</h1>");
        res.end();
      } else if (req.url === "/products") {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("<h1>Your  Products are here</h1>");
        res.end();
      } else if (req.url === "/productsDate") {
        res.writeHead(200, { "content-Type": "application/json" });
        res.write(
          JSON.stringify(
            { name: "Honda", img: "Nai" },
            { name: "Micro", img: "janina" }
          )
        );
        res.end();
      }
      // res.end("Hello Node Server running on 5000 now");
    })
    .listen(5000);

  //   console.lg(otsdfgher);
} catch (error) {
  const { name, message, stack } = error;
  const totalError = { name, message, stack };
  console.log(totalError);
}
