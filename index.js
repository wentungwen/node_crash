const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // create path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // extname of file
  let extname = path.extname(filePath);

  // initial content type
  let contentType = "text/html";

  // check ext and set contenttype
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`on PORT ${PORT}`);
});

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("message", (data) => {
//   console.log(`call listener : ${{ ...data }}`);
//   console.log(data);
// });

// logger.log("hello world");
