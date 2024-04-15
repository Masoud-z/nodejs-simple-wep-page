"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const server = http_1.default.createServer((req, res) => {
    let filePath = path_1.default.join("public", req.url === "/" ? "index.html" : req.url || "index.html");
    let extName = path_1.default.extname(filePath);
    let contentType = "text/html";
    switch (extName) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        default:
            break;
    }
    fs_1.default.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                fs_1.default.readFile("public/404.html", (err, content) => {
                    res.writeHead(200, "text/html");
                    res.end(content, "utf8");
                });
            }
            else {
                res.writeHead(500);
                res.end(`Server Error: ${err.message}`);
            }
        }
        else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
        }
    });
});
const PORT = process.env.PORT || 5500;
server.listen(PORT, () => console.log(`Server is running on localhost${PORT}...`));
