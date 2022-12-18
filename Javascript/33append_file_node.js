const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
          fs.readFile('test.html', function(err, data){
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.write(data);
                    return res.end();
          })
}).listen(8080);

fs.appendFile('newfile.txt', ' This is my text.', function (err) {
          if (err) throw err;
          console.log('Updated!');
        });
        
console.log('Server is started.')