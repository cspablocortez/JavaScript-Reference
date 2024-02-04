const fs = require('fs')
const path = require('path')

 module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) return callback(err);
        files.forEach(file => {
            if (path.extname(file) == `.${extension}`) {
                console.log(file);
            }
            callback(null, files);
        });
    });
 }