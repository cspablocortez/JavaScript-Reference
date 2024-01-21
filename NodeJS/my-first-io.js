const fs = require('fs')

try {
    const data = fs.readFileSync(process.argv[2])
    const lines = data.toString().split("\n").length - 1;
    console.log(lines);
} catch(error) {
    console.error(error);
}
