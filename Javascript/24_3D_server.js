const express = require('express');
const app = express();
const path = require('path');

app.get("/",(req,res)=>{
          res.sendFile(path.join(__dirname, "24_3D_lottery.html"));
})

app.use(express.static(path.join(__dirname,'/public')));

app.listen(8080, ()=>{
          console.log('Server is starting at port:8080');
})