          let myArr = [10,20,30,40,50,60,70,80,90,100];

          function cloneArr(arr){
                    return arr;
          }
          let newArr = cloneArr(myArr);
          console.log('newArr:',newArr);
          newArr = [1];
          console.log('newArr_2nd assignment:',newArr);
          console.log('myArr:', myArr);