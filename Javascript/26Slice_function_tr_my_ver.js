
          const myArr = ['a','b','c','d','e','f','g'];
          const newArr = [];
          let index = 0;
          let newIndex = -1;

          function strSlice(data){
                    const sData = data.toLowerCase();

                    for(let i=0 ; i<myArr.length ; i++){
                              if(sData === myArr[i]){
                                     newIndex = i;   
                              }
                    }
                    if(newIndex !== -1){
                              for(let i=newIndex+1; i<myArr.length; i++){
                                        newArr[index] = myArr[i];
                                        index++;
                              }
                              return 0;
                    }
                    return 0;
          }

          function numSlice(data){
              // Adding postive and negative value's option
              if(data >0){
                     for(let i=data+1; i<myArr.length; i++){
                              newArr[index] = myArr[i];
                              index++;
                     }
              }else{
                     for(let i=0; i<myArr.length+data-1; i++){ // -6 | -4 --> index:1 --> i<2
                            newArr[index] = myArr[i];
                            index++;
                     }
              }
              return 0;
          }

          function mySlice(data){
                    if(typeof(data) === 'string'){
                              strSlice(data);
                    }else{
                              numSlice(data);
                    }
                    return newArr;
          }

          let sliceRes = mySlice(0); //-2

          if(sliceRes == 0){  // can't be === cuz' [] might not be number type
                              console.log('The data is not in the array.')
          }else{
                              console.log(sliceRes);
          }