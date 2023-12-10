
let myObj = {
          name: "thhs",
          age: 17,
          for: "embeddedEngineer",
          
          author:{
                    firstN: "David",
                    secondN: "John"
          }
}

console.log(`My name is ${myObj.name}.`);
console.log(`I am ${myObj["age"]}.`);
console.log(myObj.for);
console.log(`The author name is ${myObj.author.firstN} ${myObj["author"]["secondN"]}.`);