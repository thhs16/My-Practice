let numOf3D = document.getElementById('total');
// let numOf3D = document.querySelector(' input[id="total"] ');
console.log(numOf3D.value);
let element = document.getElementById('3D');
// let element = document.querySelector(' input[id="3D"] ');

const newClone = element.cloneNode(true);

function myfun(){
          for(let i=1; i<numOf3D.value; i++){
          element.after(newClone);
          }
}