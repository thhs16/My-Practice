
          function binarySearch(arr, len, tofind){
                    
                    
                    
          }

          function lenOfArr(arr){


                    let sizeofarray = 0;
                    for( let i in arr){
                        console.log(`data ${i}`);
                        sizeofarray++;      
                    }
                              return sizeofarray;
          }

let myArr = [10,20,30,40,50,60,70,80,90,100];
let length = lenOfArr(myArr);
let toFInd = 20;

let result = binarySearch(myArr, length, toFInd);
console.log(result);