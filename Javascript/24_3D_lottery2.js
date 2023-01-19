// first attempt don't show red border but second try of focusout works

let clas = 1;
let ele = document.querySelector('.D31');

function myfun() {
          let list = document.getElementById('list');
          // var ele  = document.getElementsByName('3D1'); //doesn't work due to naming convention 
          // let ele  = document.getElementsByClassName('3D'); //doesn't work due to naming convention
          let clon = ele.cloneNode(true);

          // console.log('ele',ele);
          // console.log('clone:',clon);
          // console.log('class:',clas);

          clon.className = `D3${clas + 1} D3__spaces`;
          clon.name = `D3${clas + 1}`;
          clon.value = '';
          clas++;

          // console.log('class after changes :',clas);
          // console.log('name:', clon.name);

          if (clas > 11) {
                    alert("We only allow 10 spaces. They can't be generated anymore.");
                    return 0;
          }
          list.appendChild(clon);
}

ele.addEventListener('focusout', checkingfun1);

function checkingfun1() {
          if (clas > 1) {
                    for (i = 1; i < clas; i++) {
                              let vaEle = document.querySelector(`.D3${i + 1}`);
                              console.log(vaEle);
                              vaEle.addEventListener('input', checkingfun2(i + 1));
                    }
          }
}

function checkingfun2(claNo) {
          let vaEle2 = document.querySelector(`.D3${claNo}`);
          console.log('vaEle:', vaEle2);
          // if(ele.value == ''){
          //           return 0;
          // }else{
          for (j = 1; j < claNo; j++) {

                    if (ele.value == '') {
                              console.log('return');

                              return 0;
                    } else if (ele.value == vaEle2.value) {
                              console.log('this is checking');
                              vaEle2.title = 'This number has already chosen.';
                              vaEle2.style.border = "1px solid red";
                    }

                    for (k = 2; k < claNo; k++) {
                              ele = document.querySelector(`.D3${k}`);
                    }
          }
          // }
}