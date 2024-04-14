import http from "http";

http
  .createServer((req, res) => {
    res.write("Hello from node");
    res.end();
  })
  .listen(5500, () => console.log("Server is on..."));
