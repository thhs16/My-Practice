const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

// app.set('myfile',path.join(__dirname,'myfile'));

app.set('view engine','ejs');

app.get('/',function(req,res){
          res.render('index');
});

app.get('/docTest',function(req,res){
          res.render('docTest');
})

app.listen(8080,function(){
          console.log('Server is listening on port 8080.');
});