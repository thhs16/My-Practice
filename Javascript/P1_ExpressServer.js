const express = require ('express');
const app = express();





app.get("",(req,res)=>{
          
          res.send("<h1>Home page</h1>");
})


app.get("/about",(req,res)=>{

          res.send("<h1>About page</h1>");
})


app.listen(3000,()=>{
          console.log("Server is running on port 3000");
})