
var fs = require('fs');
var filename = process.argv[2];
/*var bufFile = */fs.readFile(filename,function callback(err, data) {
if (err) return console.error(err);
var strFile = data.toString();
var cnt = strFile.split('\n');
console.log(cnt.length-1);

});