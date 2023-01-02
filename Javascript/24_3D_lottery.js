let clas = 2;

function myfun(){
          let list = document.getElementById('list');
          var ele  = document.querySelector('input[class="3D1"]');
          // var ele  = document.getElementsByName('3D1'); //doesn't work
          // let ele  = document.getElementsByClassName('3D'); //doesn't work
          let clon = ele.cloneNode(true);

                    console.log('ele',ele);
                    console.log('clone:',clon);
                    console.log('class:',clas);

          clon.className = `3D${clas}`;
          clon.name      = `3D${clas}`;
          clas++;

                    console.log('class after changes :',clas);
                    console.log('name:', clon.name);

          if(clas>11){
                    alert("We only allow 10 spaces. They can't be generated anymore.");
                    return 0;
          }
          list.appendChild(clon);
}

// ele.addEventListener('input', checking());

function checking(){

          for(let i=2; i<clas; i++){
                    // let check3Dst = document.getElementsByName(`3D${i-1}`);
                    let check3Dst = document.querySelector('input[name="3D1"]');
                    // let check3Dnd = document.getElementsByName(`3D${i}`);
                    let check3Dnd = document.querySelector('input[name="3D2"]');
                    


                    console.log('check3Dst:',check3Dst);
                    console.log('check3Dnd:',check3Dnd);
                    
                    if(check3Dst.value == check3Dnd.value){
                              check3Dnd.title = 'This number has already chosen.'
                              check3Dnd.style.border = "1px solid red";
                    }else{
                             check3Dnd.title = 'must be 3 digit';
                             check3Dnd.style.border = "2px solid black"; 
                    }

          }
}