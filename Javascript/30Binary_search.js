// This is not finished yet.
          function binarySearch(arr, len, tofind){
                    
                    // function cloneArr(Oarr){
                    //     return Oarr;
                    // }
                    let newArray = arr;
                    let index =findIndex(tofind, arr);

                    let mid = Math.floor(   len /2); // mid = 50
                    for(mid; mid>=0; mid=Math.floor(len/2)){
                        if(tofind == newArray[mid]){
                            
                            console.log(`Your data ${tofind} has found at index ${index}.`)
                            break;

                        }else if(tofind < newArray[mid]){

                            let negMid = -(len-mid); //-5
                            sliceObj.mySlice(negMid, newArray, len);
                            newArray = sliceObj.newArr;
                            // console.log('newData:',newArray);
                        
                        }else{

                            sliceObj.mySlice(mid, newArray, len);    // len problem  #1
                            newArray = sliceObj.newArr; // mySlice problem   #2
                            // console.log('newData:',newArray);
                        }
                        len = lenOfArr(newArray)-1;
                    }

                    if(newArray == 0){
                        console.log('No results.');
                    }
          }

          function lenOfArr(arr){


                    let sizeofarray = 0;
                    for( let i in arr){
                        sizeofarray++;      
                    }
                              return sizeofarray;
          }

          function findIndex(data, array){
            for(let i in array){
                if(array[i] == data){
                    return i;
                }
            }
          }

          class Slice{

            mySlice(data, arr, len){
                       this.newArr = [];
  
                       this.index = 0;
                       this.newIndex = -1;
  
                      if(typeof(data) === 'string'){
                                this.strSlice(data, arr, len);         
                      }else{
                                this.numSlice(data, arr, len);
                      }
  
            }
            strSlice(data, arr, len){
  
  
                      const sData = data.toLowerCase();
  
                      for(let i=0 ; i<len ; i++){
                                if(sData === arr[i]){
                                       this.newIndex = i;   
                                }
                      }
                      if(this.newIndex !== -1){
                                for(let i=this.newIndex+1; i<len; i++){
                                          this.newArr[this.index] = arr[i];
                                          this.index++;
                                }
                      }
            }
            numSlice(data, arr, len){
  
  
                      if(data >=0){
                             for(let i=data+1 ; i<=len ; i++){
                                      this.newArr[this.index] = arr[i];
                                      this.index++;
                             }
                      }else{
                             for(let i=0 ; i<len+data ; i++){ // -6 | -4 --> index:1 --> i<2
                                    this.newArr[this.index] = arr[i];
                                    this.index++;
                             }
                      }
            }
          }


let toFInd = 30;
let myArr = [10,20,30,40,50,60,70,80,90,100]; //10
let length = lenOfArr(myArr);
const sliceObj = new Slice;

let result = binarySearch(myArr, length-1, toFInd);
// console.log('length:',length);
// console.log(myArr);

// sliceObj.mySlice(0, myArr, length-1);
// console.log(sliceObj.newArr);