var fs = require('fs');

var read_string = fs.readFile('texto.txt','utf8', function (err,data){
  if (err)
    return console.error(err);

  console.log(data);
});

console.log('the file is read');

fs.writeFile('texto3.txt',read_string,function (err,data){
  if (err)
    return console.error(err);

  console.log('Successfull write');
});
