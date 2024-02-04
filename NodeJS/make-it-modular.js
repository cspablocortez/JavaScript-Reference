const filterFiles = require('./mymodule')

filterFiles(process.argv[2], process.argv[3], function (err, files) {
    if (err) return console.error(err);

    files.forEach(file => {
        console.log(file);
    })
    
});