import fs from "fs";
import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("public/index.html", (err, content) => {
      if (err) {
        let errCode = 400;
        if (err.code) errCode = +err.code;
        res.writeHead(errCode, { "Content-type": "text/plain " });
        res.end(err.message);
      }
      res.writeHead(200, { "Content-type": "text/html " });
      res.write(content);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("public/about.html", (err, content) => {
      if (err) {
        let errCode = 400;
        if (err.code) errCode = +err.code;
        res.writeHead(errCode, { "Content-Type": "text/plain" });
        res.end(err.message);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (req.url === "/api/users") {
    const users = [
      { name: "Sam", age: 27 },
      { name: "Jack", age: 30 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("404 page not found");
  }
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => console.log(`server is running on ${PORT}...`));
