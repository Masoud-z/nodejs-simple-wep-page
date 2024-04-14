"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
console.log(path_1.default.basename(__filename));
console.log(path_1.default.dirname(__dirname));
console.log(path_1.default.extname(__filename));
console.log(path_1.default.parse(__filename));
console.log(path_1.default.join(__dirname, "test", "hello.html"));
