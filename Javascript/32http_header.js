const http = require('http');

http.createServer(function(req,res){
          res.writeHead(200, {'Content-Type':'text/html'});
          res.write('Hello<br>'); // since the text is in html, here we can use html elements. 
          res.write('Welcome to my website.');
          res.end();
}).listen(8080);

console.log('Server is started.');