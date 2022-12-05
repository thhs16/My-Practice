
          const bTypes = ['novel', 'biography', 'auto-biography', 'poem', 'essay'];

          function lengthArray(arr){

                    let a=0;
                    for(let i=0 ; i>-1 ; i++){
                              if(arr[i] === undefined){
                                        break;
                              }else{
                                        a++;
                              }
                    }
                    return a;
          }

          console.log(bTypes[5]);

          let lenFun = lengthArray(bTypes);
          console.log(lenFun);