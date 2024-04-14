import EventEmitter from "events";

class Logger extends EventEmitter {
  log(msg: string) {
    this.emit("message", { id: crypto.randomUUID(), msg });
  }
}

export default Logger;
