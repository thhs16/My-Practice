//pseudo code

/*



class Dog{
          let name = "bobo";
          let age = 10;

          function myFun(){
                    console.log("myFun");
          
          }
}

Dog mydog;
console.log("mydog.name");
console.log("mydog.age");

mydog.myfun();





*/

//actual code

class Car{
          constructor(name, year){
                    this.name = name;
                    this.year = year;
          }
          age() {
                    let date = new Date(); // Date() _built in class
                    return date.getFullYear() - this.year;
          }
}
 let myCar = new Car("Ford", 2014);
 let mycar1 = new Car(); // wrong _ no parameters

 let age_car= myCar.age();

 console.log(myCar.year);
 console.log("age",age_car);