// const http = require('http');
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", "utf-8", (err, htmlContent) => {
      if (err) {
        console.log("Error message::", err.message);
        res.end("Internal Server Errror");
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
