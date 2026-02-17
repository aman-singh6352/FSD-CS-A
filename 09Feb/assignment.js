const fs = require('fs');

const fileName = 'example.txt';

fs.writeFile(fileName, 'Hello World!\n', (err) => {
    if (err) throw err;
    console.log('File created and written successfully.');

    fs.appendFile(fileName, 'This is appended text.\n', (err) => {
        if (err) throw err;
        console.log('Content appended successfully.');

        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('\nFile Content:\n', data);

            fs.unlink(fileName, (err) => {
                if (err) throw err;
                console.log('File deleted successfully.');
            });
        });
    });
});
