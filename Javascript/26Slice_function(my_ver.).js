

          const myArr = ['a','b','c','d','e','f','g'];


          function mySlice(elem){
                    if(typeof(elem) == 'string'){
                              numString(elem);
                              

                    }else if(typeof(elem) == 'number'){
                              numSlice(elem);
                    }



                              function numString(elem){
                                        let sElem = elem.toLowerCase();
                                        let returnVal = 0;
                                        console.log('from string');
                                        // searching user demand
                                        let i=0;
                                        for(i; i<myArr.length; i++){
                                                  if(sElem == myArr[i]){
                                                            returnVal = 1;
                                                            break;
                                                  }else{
                                                            returnVal = 0;
                                                  }
                                        }

                                        //functioning
                                        if(returnVal === 1){
                                                  for(let k=0; k<=i; k++){
                                                            myArr.shift();
                                                  }
                                                  console.log(myArr);
                                        }else{
                                                console.log(`"${sElem}" is not in the array.`)  
                                        }
                              }



                    function numSlice(elem){

                              console.log('from number');

                              if((elem > 0) && (elem <= myArr.length)){

                                        for(let i=0; i<=elem; i++){
                                                  myArr.shift();
                                        }
                                        console.log(myArr);
                                        
                              }else if(( elem < 0) && (elem >= -(myArr.length))){

                                        for(let i=0; i>=elem; i--){
                                                  myArr.pop();
                                        }
                                        console.log(myArr);

                              }else{
                                        console.log('The index you typed is out of range.')
                              }
                    }
          }

          mySlice(3);