let clas = 2;

function myfun(){
          let list = document.getElementById('list');
          let ele  = document.querySelector('input[class="3D1"]');
          // let ele  = document.getElementsByClassName('3D');
          let clon = ele.cloneNode(true);

                    console.log('clone:',clon);
                    console.log('class:',clas);

          clon.className = `3D${clas}`;
          clas++;

          if(clas>11){
                    alert("We only allow 10 spaces. They can't be generated anymore.");
                    return 0;
          }
          list.appendChild(clon);
}