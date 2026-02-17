// const http = require('http');
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const server = http.createServer((req, res) => {
    const filePath = path.join(_dirname, "message.txt");
    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err){
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Error reading file");
        }
        else {
            res.writeHead(500, {"Content-Type": "text/plain00"});
            res.end(data);
        }
    })
    // res.write('Response');4
    ":?"
    // res.end();
})

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
})