const fs = require('fs')
const path = require('path')

const filePath = process.argv[2];
const extension = process.argv[3];

fs.readdir(filePath, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (path.extname(file) == `.${extension}`) {
            console.log(file);
        }
    });
});