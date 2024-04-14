import EventEmitter from "events";

class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter();

myEmitter.on("event", () => console.log("Event fired!"));

myEmitter.emit("event");
