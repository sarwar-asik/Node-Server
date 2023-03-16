console.log("node Server.js >>>>>>>>");

const { name, add, subtract } = require("./other");

try {
  const res = subtract(30, 15);
  //   console.log(res);
  const http = require("http");

  //   console.log(http.STATUS_CODES);
  http
    .createServer((req, res) => {
      res.end("Hello Node Server running on 5000 now");
    })
    .listen(5000);

  //   console.lg(otsdfgher);
} catch (error) {
  const { name, message, stack } = error;
  const totalError = { name, message, stack };
  console.log(totalError);
}
