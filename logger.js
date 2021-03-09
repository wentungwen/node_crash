const eventEmitter = require("events");
const uuid = require("uuid");

class Logger extends eventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

module.exports = Logger;
