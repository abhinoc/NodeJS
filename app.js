var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good");

console.log(fs.readFileSync("corn.txt").toString());
