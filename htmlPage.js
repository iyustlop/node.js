var fs = require('fs');
var http = require('http');


var writeStream = fs.createWriteStream('write_file.txt')

http.createServer(function(req,res){

  res.writeHead(200,{'Content-Type': 'text/html'});
  var readStream = fs.createReadStream('index.html', 'utf8');
  readStream.pipe(res);

}).listen(3000);

console.log("Server is running in http://127.0.0.1:3000/");
