"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const logger = new logger_1.default();
logger.on("message", ({ id, msg }) => {
    console.log(id, msg);
});
logger.log("Test the message");
