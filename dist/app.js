"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const person = new person_1.default("Masoud", 27);
person.greeting();
console.log(__dirname);
console.log(__filename);
