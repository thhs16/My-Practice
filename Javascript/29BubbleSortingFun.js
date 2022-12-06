// weak point : main array has changed

          function bubbleSort(arr, len){

                    let a=0;
                    for(let i=0; i< len-1; i++){
                              
                              let index=0;
                                        for(let k=0 ; k< len-i-1 ; k++){
                                                  let eleAtI = arr[index];

                                                  if(arr[index] > arr[index+1]){
                                                            arr[index] = arr[index+1];
                                                            arr[index+1] = eleAtI;  
                                                  }
                                                  console.log('loop:', i,a, arr);
                                                  index++;
                                                  a++
                                        }
                    }
          }

          function arrLength(array){


                    let sizeofarray = 0;
                    for(let i in array){
                              sizeofarray++;
                    }
                    return sizeofarray;
          }





          const myArr = [20, 10, 1, 4, 89, 12];


          let arrSize = arrLength(myArr);
          bubbleSort(myArr, arrSize);
          console.log('\n',myArr);