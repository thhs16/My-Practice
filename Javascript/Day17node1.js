const net = require('net');

const port = 8080;

const host = '127.0.0.1';


const server = net.createServer();

server.listen(port, host, ()=>{
          console.log('TCP server is running on port '+port+'...');
})

let sockets=[]; // node js array

server.on('connection', function(sock){
          
          console.log('DATA'+sock.remoteAddress+':'+sock.remotePort); // ip address that join the server
          sockets.push(sock)


          sock.on('data', function(data){

                    console.log('[+]DATA'+sock.remoteAddress+'get: '+data);
                    sockets.forEach(function(sock, index, array){

                              sock.write(sock.remoteAddress+':'+sock.remotePort+' said '+ data+'\n');
                              sock.write('Close?\n');
                    })
          })

          sock.on('close', function(data){

                    let index = sockets.findIndex(function(o){
                              return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
                    })
                    if(index !== -1)sockets.splice(index,1);
                    console.log('CLOSED:'+sock.remoteAddress +''+sock.remotePort);
          })
})