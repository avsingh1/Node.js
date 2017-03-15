var http=require('http')
var port = process.argv[2]
var fs=require('fs')
var file_location =process.argv[3];

var server = http.createServer(function (req,res)
{
    var src=fs.createReadStream(file_location)
    src.pipe(res)
})
server.listen(port)