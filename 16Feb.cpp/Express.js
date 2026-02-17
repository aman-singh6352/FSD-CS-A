const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Get request");
});

app.post("/", (req, res) => {
  res.send("Post request");
});

app.put("/", (req, res) => {
    res.send('Put request')
});

app.delete("/", (req, res) => {
    res.send('Delete request')
});

app.patch("/", (req, res) => {
    res.send('Patch request')
});

app.all("*", (req, res) => {
    res.send('Tamper request')
});

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
