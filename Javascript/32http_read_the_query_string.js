const http = require('http'); 
 
 http.createServer(function(req,res){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(req.url);
          res.write('<br>Welcome to my website.');
          res.end();
 }).listen(8080);

 console.log('Server is started.')