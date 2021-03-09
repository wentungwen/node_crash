const EventEmitter = require("events");

// create class
class MyEmitter extends EventEmitter {}

// init
const myEmitter = new MyEmitter();

// event listener
myEmitter.on("event", () => console.log("event emitting..."));

// init event
myEmitter.emit("event");
