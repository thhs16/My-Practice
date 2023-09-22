// ensure that JavaScript code runs after the HTML document 
// document.addEventListener("DOMContentLoaded", function () {
          let select = document.querySelector("select");
          let quantity = document.querySelector("input");
          let paragraph = document.querySelector("p");
          let heading3 = document.querySelector("h3");

          // changes within select element --> addEventListener('change', fun)
          select.addEventListener('change', foods);

          function foods() {
                    let choice = select.value;

                              if (choice === "coffee") {
                                        console.log("coffee codes work");
                                        paragraph.textContent = "Coffee is so cool!";
                              } else if (choice === "snack") {

                                        paragraph.textContent = "Snack is so delicious!";
                              } else if (choice === "juice") {
                                        
                                        paragraph.textContent = "Juice is refreshing!";

                              } else if (choice === "chicken") {

                                       paragraph.textContent = "Chicken is craving!";
                              }
                    heading3.textContent = "Your order is"+ quantity.value;
          }
// });