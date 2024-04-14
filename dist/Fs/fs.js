"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function createFolder() {
    fs_1.default.mkdir(path_1.default.join(__dirname, "/test"), {}, (err) => {
        if (err)
            throw err;
        console.log("Folder created");
    });
}
function writeFile() {
    fs_1.default.writeFile(path_1.default.join(__dirname, "/test", "hello.txt"), "Hello from Node!", (err) => {
        if (err)
            throw err;
        console.log("File has been written");
        fs_1.default.appendFile(path_1.default.join(__dirname, "/test", "hello.txt"), "I love NodeJs", (err) => {
            if (err)
                throw err;
            console.log("File has been written");
        });
    });
}
function readFile() {
    fs_1.default.readFile(path_1.default.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
        if (err)
            throw err;
        console.log(data);
    });
}
function renameFile() {
    fs_1.default.rename(path_1.default.join(__dirname, "/test", "hello.txt"), path_1.default.join(__dirname, "/test", "helloNodeJS.txt"), (err) => {
        if (err)
            throw err;
        console.log("File has been renamed!");
    });
}
renameFile();
console.log("After fs test");
