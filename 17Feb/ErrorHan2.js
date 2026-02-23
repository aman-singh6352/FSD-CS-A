const fs = require("fs");

fs.readFile("foo.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
});

fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
