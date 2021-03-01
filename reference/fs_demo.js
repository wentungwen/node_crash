const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created.......");
// });

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello node.js1",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to......");

//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "hello node.js2",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to......");
//       }
//     );
//   }
// );

// read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// rename
fs.rename(
  path.join(__dirname, "/test", "hey.txt"),
  path.join(__dirname, "/test", "hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("rename...");
  }
);
