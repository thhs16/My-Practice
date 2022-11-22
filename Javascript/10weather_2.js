// This works. However, since the codes are confusing, I'll further develop this to be  clean, readable, efficient.

          let city = 'bell';      // user_input
          let nameLC = city.toLowerCase();

          const weatherInfo={

                    taunggyi:{
                              temp: '22°C',                     
                              precipitation: '73%',            //height of cloud
                              humidity: '73%',                 //vapor in air
                              wind: '4mph'                       
                    },
          
                    mandalay:{
                              temp: '31°C',                     
                              precipitation: '1%',            
                              humidity: '48%',                 
                              wind: '11km/h'                       
                    },
          
                    yangon:{
                              temp: '32°C',                     
                              precipitation: '4%',            
                              humidity: '64%',                 
                              wind: '13km/h'                       
                    }
          }

          function cityFun(name){

                    let cityArr = Object.keys(weatherInfo);
                    // console.log(cityArr);      //test

                    let a=0;

                    for(let i=0; i<cityArr.length; i++){
                              
                              if(name === cityArr[i]){

                                        console.log(`Weather Information of ${name}\n`);
                                        console.log(`Temp             : ${weatherInfo[nameLC].temp}`);
                                        console.log(`precipitation    : ${weatherInfo[nameLC].precipitation}`);
                                        console.log(`humidity         : ${weatherInfo[nameLC].humidity}`);
                                        console.log(`wind             : ${weatherInfo[nameLC].wind}`);
                              }else{
                                        --a;      
                              }
                    }
                    // console.log(a);  //test
                    return a;
          }    

          let aValue = cityFun(nameLC);

          if(city === ''){
                    console.log("You haven't written anything yet.")
          }else if(aValue === -3){
                    console.log(`The place "${city}" isn't available. Thank you.`)
          }