          const ncc={

                    name:{
                              firstname:['n','a','t','i','o','n','a','l'],
                              secondname: 'cyber city'
                    },
                    
                    subject(){
                          console.log('Wed Dev');    
                    }
          }

          let data = ncc.name.firstname;
          
      //     console.log(typeof(ncc.name.firstname));

          for(i=0; i<data.length; i++){
                  if(data[i] == 'n'){
                        console.log(`We found ${data[i]}`);
                  }else{
                        console.log(`data : ${data[i]}`);
                  }
          }