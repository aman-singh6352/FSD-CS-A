fs.readFile("file1.txt", (err, data) => {
  if (err) throw err;
  fs.readFile("file2.txt", (err, data) => {
    if (err) throw err;
    fs.readFile("file3.txt", (err, data) => {
      if (err) throw err;
    });
  });
});

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if(success) {
            console.log(success);
        }
    })
})