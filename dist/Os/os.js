"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
console.log(os_1.default.platform());
console.log(os_1.default.arch());
console.log(os_1.default.cpus());
console.log(os_1.default.freemem());
console.log(os_1.default.totalmem());
console.log(os_1.default.homedir());
console.log(os_1.default.uptime() / 60 / 60);
console.log("Test after os");
