const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (data) => {
  console.log(`call listener : ${{ ...data }}`);
  console.log(data);
});

logger.log("hello world");
