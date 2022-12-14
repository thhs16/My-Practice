function bubbleSort(arr, len){

          // function cloneArr(array){
          // let clone = [...array];
          // return clone;
          // }
          // let newArray = cloneArr(arr);
          let newArray = [...arr];

          for(let i=0; i< len-1; i++){
                    
                    for(let k=0 ; k< len-i-1 ; k++){


                              let eleAtI = newArray[k];
                              if(newArray[k] > newArray[k+1]){
                                        newArray[k] = newArray[k+1];
                                        newArray[k+1] = eleAtI;  
                              }
                    }
          }
          return newArray;
}

function arrLength(array){


          let sizeofarray = 0;
          for(let i in array){
                    sizeofarray++;
          }
          return sizeofarray;
}

const myArr = [20, 10, 1, 4, 89, 12];
let length = arrLength(myArr);
let result = bubbleSort(myArr, length);

console.log('result array :',result);
console.log('myArr :',myArr);