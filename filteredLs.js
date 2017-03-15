/*var fs = require('fs');
var path=process.argv[2];
var type='.'+process.argv[3];

function remove(path,type)
{
    fs.readdir(path,function callback(err,list){
        if(err)return console.error(err);
        for(var i=0;i<=list.length-1;i++)
        {
        var file1=list[i].split('.');
        if(file1[1]==type)
        {
        console.log(list[i]);
        }
        }
    });
    remove(path,type);
}*/
/*var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    if(err)return console.error(err);
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})*/
var fs = require('fs');
var filePath = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(filePath, function(err, list) {
    if(err)return console.error(err);
for(var i=0; i<list.length; i++){
    if (list[i].match(fileType)) {
        console.log(list[i]);
    }
}
});