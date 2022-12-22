let totalNumber = document.querySelector('button');
totalNumber.addEventListener("click", numOf3D);
                    function numOf3D(){
                              for(let i=1; i<totalNumber.value; i++){
                                        let content = document.querySelector('input[name="totalNumber"]');
                                        let copy = content.cloneNode(true);     
                                        // document.querySelector('form')
                                        content.after(copy);
                                        // const renderedText = htmlElement.innerText;.insertAdjacentHTML('afterend', element);                              }
                    }
          }
          //childnotes 