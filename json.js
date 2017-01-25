var fs = require('fs');
var http = require('http');


http.createServer(function(req,res){
console.log('requested url : ' + req.url);
if (req.url === '/'){
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
} else if (req.url === '/api'){
  res.writeHead(200,{'Content-Type': 'application/json'});
  var jsonObj = {
    name : 'ignacio',
    surname : 'yuste',
    age : 40
  };
  res.end(JSON.stringify(jsonObj));
}
}).listen(3000);

console.log("Server is running in http://127.0.0.1:3000/");
