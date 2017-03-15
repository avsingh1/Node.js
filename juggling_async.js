var http=require('http')
var bl=require('bl')
var result=[]
var count=0

function print_result()
{
    for(var i=0;i<3;i++)
    console.log(result[i])
}
function http_Get(index)
{
    http.get(process.argv[2+index],function (response)
    {
        response.pipe(bl(function (err,data){
        
        if(err)
        console.errpr(err)
        
        result[index]=data.toString()
        count++
        
        if(count == 3)
        print_result()
        }))
       
        
    })
}
for(var j=0;j<3;j++)
http_Get(j)