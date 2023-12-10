

          const myArr1 =    [
                              ['blue', 'white', 'lilac'], 
                              'black', 
                              'red', 
                              'grey'
                              ];

          const myArr2 = new  Array(    
                                        ['avocado', 'apple', 'strawberry'],
                                        [1,2,3], 
                                        function myfun(){console.log('This is myfun function.')}, 
                                        {myname:'thhs'}
                              );
          const simpleArr = ['a','b','c','d','e','f','g']
          
          // testing calling fun from an array
          console.log(myArr2[2]);
          myArr2[2]();


          // Assign new element
          myArr1[3] = 'pink';
          console.log(myArr1);          // grey's disappered


          // Insert new elements at the start
          myArr1.unshift('purple', 'beige');
          console.log('Inserting');
          console.log(myArr1);


          // Insert at the end
          myArr2.push({myAge:17});
          console.log(myArr2,'\n');


          // Remove an element at the beginning
          myArr1[2].shift();
          myArr2.shift();
          console.log(myArr1,'\n');
          console.log(myArr2,'\n\n');


          // Remove an last element
          myArr1.pop();
          console.log(myArr1,'\n\n');


          // Merging arrays
          const newArr = myArr2.concat(myArr1);
          console.log(newArr);
          

          // arr length
          console.log(myArr1.length);
          console.log(myArr2.length);
          console.log(newArr.length);
          

          // splice
          let splice = simpleArr.splice(2,1);     //(starting index, number of elements)
          console.log(splice);
          
          // slice
          let slicePos = simpleArr.slice(4);      //(start,end)
          let sliceNeg = simpleArr.slice(-4); 
          console.log(slicePos)        
          console.log(sliceNeg);  

          // sort