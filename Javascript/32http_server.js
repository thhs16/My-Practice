const http =require('http');

http.createServer(function(req,res){
          res.write('Hello');
          res.end();
}).listen(8080);

console.log('Server is started.')
