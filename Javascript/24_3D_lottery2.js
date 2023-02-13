// (fixed)first attempt don't show red border but second try of focusout works
// (fixed)current checking scheme : check 3d focusing by looking at previous 3d space
// (done)style : outline
// (done)to check the value when client add the input as soon as it has generated
// (done)focusout-outline : black if value is available ==> by add red outline option in else expression
// (done)3digit checking
// D31 input addeventlisten-input
// show text of title attribute under relevant input space

let clas = 1; // heart of this program
let ele = document.querySelector('.D31');
// let genButt = document.querySelector('#gen');

// ele.addEventListener('focusout', checkingfun1);
// genButt.addEventListener('click', checkingfun1);

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

  if (clas > 10) {
    clas = 10;
    alert("We only allow 10 spaces. They can't be generated anymore.");
    return 0;
  }
  list.appendChild(clon);
  checkingfun1();

}

function checkingfun1() {
  // console.log('clas:',clas);
  if (clas > 1) {
    for (let i = 1; i < clas; i++) {
      let index = i + 1;
      let vaEle = document.querySelector(`.D3${index}`);
      // console.log('vaEle:', vaEle);
      vaEle.addEventListener('input', function () { checkingfun2(index) }); //input works frequently whenever a single input is typed
    }
  }
}

function checkingfun2(claNo) {
  let ele2 = document.querySelector('.D31');
  // console.log('ele2:',ele2);
  let vaEle2 = document.querySelector(`.D3${claNo}`);
  // console.log('vaEle2:', vaEle2);
  // if(ele.value == ''){
  //           return 0;
  // }else{
  let data = '';
  let check1 = /^\d{3}$/.test(ele2.value);
  // console.log(check1);
  let check2 = /^\d{3}$/.test(vaEle2.value);
  console.log('check2:', check2); // why check2 is false even after input becomes 3 digit ==> the thing is I missed '.value'.
  if (check1) {
    if (check2) {
      for (let j = 1; j < claNo; j++) { // j=2
        if (ele2.value == '') {
          // console.log('return');

          return 0;
        } else if (ele2.value == vaEle2.value) {
          data = 0;
          // console.log('this is else if expression');
          vaEle2.title = 'This number has already chosen.';
          vaEle2.style.outline = "2px solid red";
          break;
        }
        // else if(vaEle2.value = ''){
        //           vaEle2.title = 'Must be 3 digit';
        //           vaEle2.style.outline = "2px solid black";
        // }
        else {
          data = 1;
          vaEle2.title = '';
          vaEle2.style.outline = "2px solid green";
        }

        // for (let k = 2; k < claNo; k++) {
        //           ele2 = document.querySelector(`.D3${k}`);
        //                     console.log('ele2:',ele2);
        // }
        ele2 = document.querySelector(`.D3${j + 1}`);

      }
    } else {
      vaEle2.title = 'Must be 3 digit.';
      vaEle2.style.outline = "2px solid red";
    }
  } else {
    ele2.title = 'must be 3 digit';
    ele2.style.outline = "2px solid red";
  }



  vaEle2.addEventListener('focusout', () => {
    if (data == 1) {
      vaEle2.style.outline = "0px solid green";
    } else {
      vaEle2.style.outline = "2px solid red";
    }
  });
}