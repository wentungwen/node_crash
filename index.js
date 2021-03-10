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
  switch (extname) {
    case ".js":
      contentType = "Text/javascript";
      break;
    case ".css":
      contentType = "Text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".png":
      contentType = "image/png";
      break;
  }
  // readFile
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server error : ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
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
