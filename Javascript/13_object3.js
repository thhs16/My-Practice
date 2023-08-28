// JS nested object

const object_name = {
          name : "THHS",
          age : 18,
          hobby : {
                    h1 : "Using phone",
                    h2 : "Speaking in Eng"
          },

          work : function(){
                    console.log("This is from work Key");
          },

          success : function(){
                    console.log("Success True");
          }

}
 console.log(object_name.hobby.h1);
 console.log(object_name["hobby"]['h1']);

 console.log(object_name["work"]); // [Function: work] >>> asking what is 'work'
 console.log(object_name.work()); // undefined >>> wrong*** function declaration
 object_name.work();
 

