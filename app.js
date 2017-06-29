var path = require('path');
var websiteHome = "/Users//abhisheka/Desktop/nodejs/NodeJS/corn.txt";
var websiteAbout = "/Users/abhisheka/Desktop/nodejs/NodeJS/app.js";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
