var fs=require('fs');
var file=process.argv[2];
var data=fs.readFileSync(file);
var contents=data.toString();
console.log(contents.split('\n').length-1);

