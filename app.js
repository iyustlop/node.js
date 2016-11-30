var http = require('http');

http.createServer(function(req,res){
    var body = 'this is the body of response';
    var content_length = body.length;
    res.writeHead(200 , {
        'Content-Type' : 'text/plain',
        'Content-Length' : content_length
    });
    res.end( body);
}).listen(3000);

console.log("server is running on http://127.0.0.1:3000/");



