class Slice{

          mySlice(data, arr, len){
                     this.newArr = [];

                     this.index = 0;
                     this.newIndex = -1;

                    if(typeof(data) === 'string'){
                              this.strSlice(data, arr, len);
                              this.output();
                    }else if(data == 0){
                              console.log('The data is not in the array.');
                              
                    }else{
                              this.numSlice(data, arr, len);
                              this.output();
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
          output(){
                    if(this.newArr == 0){  // can't be === cuz' [] might not be number type
                           console.log('The data is not in the array.');
                    }else{
                           console.log(this.newArr);
                    }
          }
}
const myArr = [10,20,30,40,50,60,70,80,90,100];
const length = 10;

const myobj = new Slice();
// myobj.mySlice('f');

// For binary Search --> works
let mid = 4;
let negMid =-(length-1-mid); // index 4 == index -5, hence, after knowing positive mid point, we've got to know negative index value of mid point in order to use slice method.
myobj.mySlice(negMid, myArr, length);