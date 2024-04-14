import fs from "fs";
import path from "path";

function createFolder() {
  fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if (err) throw err;
    console.log("Folder created");
  });
}

function writeFile() {
  fs.writeFile(
    path.join(__dirname, "/test", "hello.txt"),
    "Hello from Node!",
    (err) => {
      if (err) throw err;
      console.log("File has been written");

      fs.appendFile(
        path.join(__dirname, "/test", "hello.txt"),
        "I love NodeJs",
        (err) => {
          if (err) throw err;
          console.log("File has been written");
        }
      );
    }
  );
}

function readFile() {
  fs.readFile(
    path.join(__dirname, "/test", "hello.txt"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
}

function renameFile() {
  fs.rename(
    path.join(__dirname, "/test", "hello.txt"),
    path.join(__dirname, "/test", "helloNodeJS.txt"),
    (err) => {
      if (err) throw err;
      console.log("File has been renamed!");
    }
  );
}

renameFile();

console.log("After fs test");
