// weak point : main array has changed
// Note | To reduce looping, we've got to adjust the value of len

          function bubbleSort(arr, len){

                    for(let i=0; i< len-1; i++){
                              
                              for(let k=0 ; k< len-i-1 ; k++){


                                        let eleAtI = arr[k];
                                        if(arr[k] > arr[k+1]){
                                                  arr[k] = arr[k+1];
                                                  arr[k+1] = eleAtI;  
                                        }
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
          const newArr = [99,3,6,78,13,15,33,2,0];
          const strArr = ['Jay', 'james', 'Steven', 'lauv']

          let arrSize = arrLength(myArr);
          bubbleSort(myArr, arrSize);
          console.log('\n','myArr:',myArr);

          let newSize = arrLength(newArr); //len:9 //index:8 //num of times to work: 7
          bubbleSort(newArr, newSize);
          console.log('\n','newArr:',newArr);

           let strSize = arrLength(strArr); 
          bubbleSort(strArr, strSize); // Sorted by Ascii values
          console.log('\n','strArr:',strArr);