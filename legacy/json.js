var fs = require('fs');
var http = require('http');


http.createServer(function(request,response){
  console.log('requested url : ' + request.url);
  if (request.url === '/'){
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream('html/index.html').pipe(response);
  } else if (request.url === '/api'){
    response.writeHead(200,{'Content-Type': 'application/json'});
    var jsonObj = {
      name : 'ignacio',
      surname : 'yuste',
      age : 40
  };
  response.end(JSON.stringify(jsonObj));
} else {
  response.writeHead(404,{'Content-Type': 'text/html'});
  fs.createReadStream('html/404.html').pipe(response);
}
}).listen(3000);

console.log("Server is running in http://127.0.0.1:3000/");
