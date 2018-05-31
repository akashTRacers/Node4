var fs= require('fs');
var http= require('http');
//__dirname is a special variable that always points to the current working directory.

http.createServer(function(req,res){
    var path=__dirname +"/index1.html";
    var path1=__dirname +"/views/about.html";
    console.log(path);  


    fs.readFile(path,function(err,data){
        if(err)
        {
            fs.readFile(path1,function(err1,data1){
            res.writeHead(200);
           return res.end(data1);
            })
        }
        else{
        res.writeHead(200);
        res.end(data);
        }
        

    })

    
}).listen(5001,function(){
    console.log("serever is listening at 5001")
});




