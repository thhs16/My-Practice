          const myArr = [20, 10, 1, 4, 89, 12];
          let sizeofarray = 0;

          function sort(arr){
                    
                    for( let i in arr){
                        console.log(`data ${i}`);
                        sizeofarray++;      
                    }
                              return sizeofarray;
          }

          console.log(sort(myArr));