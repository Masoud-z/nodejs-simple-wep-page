import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/more") {
    res.write("test more");
    res.end();
  } else {
    res.write("Hello from node");
    res.end();
  }
});

server.listen(5500, () => console.log("Server is on..."));
