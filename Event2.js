var events = require('events');
var util = require('util');

var Student = function(name){
  this.name = name;
}

util.inherits(Student, events.EventEmitter);

var max = new Student('mark');

max.on('scored',function(marks){
  console.log(max.name + ' score ' + marks);
})

max.emit('scored',95);
