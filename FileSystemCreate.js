var fs = require('fs');

fs.mkdir('node', function(){
  fs.writeFile('./node/mytext.txt',"my text node.js");
});

console.log('Creamos el directorio y el archivo');
