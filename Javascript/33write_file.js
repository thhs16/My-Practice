const fs = require('fs');

fs.writeFile('33newfile3.txt', 'This is my text.', function(err){
          if(err) throw err;
          console.log('Replaced');
});