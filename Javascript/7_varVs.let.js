// var --> can frequently assigned using the same var name (globally)

          console.log(a); // undefined
          var a = 0;
          var a = 1;
          console.log(a); // 1
          
// let --> let name can't be used more than once  (locally)

          let b = 0;
          //let b = 1;  //error- name"b" has been used

          b = 1; // okay

          console.log(b);

          let x = 1;
          switch(x){
                    case 0:
                    let foo;
                    break;

                    case 1:
                    //let foo; // Syntax error for redeclaration
                    break;
          }

                    // Using scope

                    let y = 1;
                    switch(y){
                              case 0:{
                              let foo;
                              break;
                              }
          
                              case 1:{
                              let foo; // Syntax error for redeclaration
                              break;
                              }
                    }