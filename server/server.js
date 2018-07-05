var express = require('express');
var bodyparser= require('body-parser');


var {mongoose} = require('./db/mongoose');
var {usermod} = require('./models/usermodel');

var PORT = process.env.PORT || 3000;


var app = express();

app.use(bodyparser.json());

app.get('/about',(req,res)=>{

  res.send('abcd');
})

app.post('/user',(req,res)=>{

var user = new usermod({
  email: req.body.email,
  name: req.body.name
})

user.save().then((doc)=>{
  res.send(doc);
},
(err)=>{
  res.status(400).send(err);
}
)


})


app.get('/user',(req,res)=>{



usermod.find().then((doc)=>{
  res.send({doc});
},
(err)=>{
  res.status(400).send(err);
}
)


})


app.listen(PORT, ()=>{
  console.log('started on 3000');
});
