
function myfun(){
          let numOf3D = document.getElementById('total');

          let list = document.getElementById('list');

          let element = document.getElementById('3D');

          let newClone = element.cloneNode(true);

          for(let i=1; i<numOf3D.value; i++){

          console.log('i:', i);
          console.log('newClone:', newClone);

          newClone.id = `3D`+i;
          // element.after(newClone);
          list.appendChild(newClone);
          }
          // let i = 1;
          // while(i<numOf3D.value){
          //           i++;
          //           list.appendChild(newClone);
          // }
}