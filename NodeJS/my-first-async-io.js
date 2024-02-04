const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});

// Alternatively: 

fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data.split('\n').length - 1);
})