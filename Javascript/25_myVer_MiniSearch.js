          let thing = 'Bookmarks'; // for user
          
          let small = thing.toLowerCase(); // convert 'thing' into lower case
          const inMyBag={
                    type1: 'pencil',
                    type2: 'pen',
                    type3: 'eraser',
                    type4: 'flags',
                    type5: 'bookmarks'
          }
          
          let arrBag= Object.values(inMyBag);

          for(i=0; i<arrBag.length; i++){
                    if(arrBag[i] == small){
                              console.log(`We found ${thing}.`);
                    }
                    // else{
                    //           console.log(`Oops! We didn't find ${thing}`);
                    //           break;
                    // }
          }
          // console.log(small);