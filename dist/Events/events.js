"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
class MyEventEmitter extends events_1.default {
}
const myEmitter = new MyEventEmitter();
myEmitter.on("event", () => console.log("Event fired!"));
myEmitter.emit("event");
