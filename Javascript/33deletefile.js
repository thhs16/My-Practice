const fs = require('fs');

fs.unlink('33newfile2.txt', function(err){
          if(err) throw err;
          console.log('Deleted');
});