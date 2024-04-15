import fs from "fs";
import http from "http";
import path from "path";

const server = http.createServer((req, res) => {
  let filePath = path.join(
    "public",
    req.url === "/" ? "index.html" : req.url || "index.html"
  );
  let extName = path.extname(filePath);
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

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile("public/404.html", (err, content) => {
          res.writeHead(200, "text/html");
          res.end(content, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.message}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
const PORT = process.env.PORT || 5500;
server.listen(PORT, () =>
  console.log(`Server is running on localhost${PORT}...`)
);
