
          const myArr = ['a','b','c','d','e','f','g'];
          const newArr = [];
          let index = 0;

          function strSlice(data){

          }

          function numSlice(data){
                    for(let i=data+1; i<myArr.length; i++){
                              newArr[index] = myArr[i];
                              index++;
                    }
                    return newArr;
          }

          function mySlice(data){
                    if(typeof(data) === 'string'){
                              strSlice(data);
                    }else{
                              numSlice(data);
                    }
                    return newArr;
          }

          let sliceRes = mySlice(2);
          console.log(sliceRes);