let clas = 1;
let ele  = document.querySelector('.D31');

function myfun(){
          let list = document.getElementById('list');
          // var ele  = document.getElementsByName('3D1'); //doesn't work due to naming convention 
          // let ele  = document.getElementsByClassName('3D'); //doesn't work due to naming convention
          let clon = ele.cloneNode(true);

                    console.log('ele',ele);
                    console.log('clone:',clon);
                    console.log('class:',clas);

          clon.className = `D3${clas+1} D3__spaces`;
          clon.name      = `D3${clas+1}`;
          clon.value     = '';
          clas++;

                    console.log('class after changes :',clas);
                    console.log('name:', clon.name);

          if(clas>11){
                    alert("We only allow 10 spaces. They can't be generated anymore.");
                    return 0;
          }
          list.appendChild(clon);
}
ele.addEventListener('focusout', checking1);
function checking1(){
                    console.log('Welcome to checking1() function');
          if(clas > 1){
                    let ele2 = document.querySelector('.D32');
                    ele2.addEventListener('input', checking2);
                    }
                    console.log('This is the end of checking1() function');
}

function checking2(){
                    console.log('Welcome to checking2() function');
          let D3__inputs = document.querySelectorAll('.D3__spaces');
                    console.log('D3__inputs: ',D3__inputs);
                    console.log('length: ',D3__inputs.length);
          D3__inputs.addEventListener('focusout', childChecking2);
          

          function childChecking2(){
                    for(let i=1; i<D3__inputs.length; i++){
                              let check3Dst = document.querySelector(`.D3${i-1}`);

                              let check3Dnd = document.querySelector(`.D3${i}`);                    

                              console.log('check3Dst:',check3Dst);
                              console.log('check3Dnd:',check3Dnd);
                    
                              if(check3Dst.value == check3Dnd.value){
                                        check3Dnd.title = 'This number has already chosen.';
                                        check3Dnd.style.border = "1px solid red";
                              }else{
                                        check3Dnd.title = 'must be 3 digit';
                                        check3Dnd.style.border = "2px solid black"; 
                              }
                    }
          }
}