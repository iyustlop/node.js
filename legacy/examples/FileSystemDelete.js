var fs = require('fs');

fs.unlink('./node/mytext.txt', function(){
  fs.rmdir('node')
});
