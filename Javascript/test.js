function binarySearch(arr, len, tofind){
                    
          let newData=[];
          let mid = Math.floor(   (len-1) /2);
          if(tofind == arr[mid]){

              console.log(`Your data ${tofind} has found at index ${mid}.`)

          }else if(tofind < arr[mid]){

              let negMid = -(len-1-mid);
              sliceObj.mySlice(negMid+1, arr, len);
              newData = sliceObj.newArr;
              console.log('newData:',newData);
              
          }else{

              sliceObj.mySlice(mid+1, arr, len);
              newData = sliceObj.newArr;
          }
          
}

function lenOfArr(arr){


          let sizeofarray = 0;
          for( let i in arr){
              sizeofarray++;      
          }
                    return sizeofarray;
}

class Slice{

  mySlice(data, arr, len){
             this.newArr = [];

             this.index = 0;
             this.newIndex = -1;

            if(typeof(data) === 'string'){
                      this.strSlice(data, arr, len);
            }else if(data == 0){
                      this.newArr = 'The data is not found.'
                      
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


            if(data >0){
                   for(let i=data+1 ; i<len ; i++){
                            this.newArr[this.index] = arr[i];
                            this.index++;
                   }
            }else{
                   for(let i=0 ; i<len+data-1 ; i++){ // -6 | -4 --> index:1 --> i<2
                          this.newArr[this.index] = arr[i];
                          this.index++;
                   }
            }
  }
}


let toFInd = 50;
let myArr = [10,20,30,40,50,60,70,80,90,100]; //10
let length = lenOfArr(myArr);
const sliceObj = new Slice;

let result = binarySearch(myArr, length, toFInd);
// console.log(result);