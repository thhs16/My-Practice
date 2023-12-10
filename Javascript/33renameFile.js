const fs = require('fs');

fs.rename('newfile.txt', '33newfile.txt', function(Err){
          if(Err) throw Err;
          console.log('Renamed');
});