const fs = require('fs');

fs.appendFile('33newfile1.txt', "\n I'm learning node js.", function (err) {
          if (err) throw err;
          console.log('Updated!');
        });