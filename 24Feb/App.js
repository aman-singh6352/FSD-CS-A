const express = require("express");
const app = express();

const myLogger = function (req, res) {
  console.log("Middleware got executed!");
};

app.use(myLogger); // middleware

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
