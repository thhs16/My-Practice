class Slice{

          mySlice(data){
                     this.myArr = ['a','b','c','d','e','f','g'];
                     this.newArr = [];
                     this.index = 0;
                     this.newIndex = -1;

                    if(typeof(data) === 'string'){
                              this.strSlice(data);
                              this.output();
                    }else if(data == 0){
                              console.log('The data is not in the array.');
                              
                    }else{
                              this.numSlice(data);
                              this.output();
                    }
          }


          strSlice(data){


                    const sData = data.toLowerCase();

                    for(let i=0 ; i<this.myArr.length ; i++){
                              if(sData === this.myArr[i]){
                                     this.newIndex = i;   
                              }
                    }
                    if(this.newIndex !== -1){
                              for(let i=this.newIndex+1; i<this.myArr.length; i++){
                                        this.newArr[this.index] = this.myArr[i];
                                        this.index++;
                              }
                    }
          }



          numSlice(data){

              if(data >0){
                     for(let i=data+1; i<this.myArr.length; i++){
                              this.newArr[this.index] = this.myArr[i];
                              this.index++;
                     }
              }else{
                     for(let i=0; i<this.myArr.length+data-1; i++){ // -6 | -4 --> index:1 --> i<2
                            this.newArr[this.index] = this.myArr[i];
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

const myobj = new Slice();
myobj.mySlice('f');
myobj.mySlice(-4);