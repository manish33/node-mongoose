
var mongoose = require('mongoose');


var usermod = mongoose.model('model1',{

email:{
  type:String,
  required:true,
  minlength: 1,
  trim: true
},
name: {
  type:String,
  required:true,
  minlength: 2
}



});

module.exports = {
  usermod
}
