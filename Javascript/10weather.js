// This project hasn't finished yet
// Design is needed.

          // let cityName = 'Yangon';
          // let cLowerCase = cityName.toLowerCase();

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

          let nameLC = name.toLowerCase();
                    console.log(weatherInfo[nameLC]);
          if(nameLC === weatherInfo[nameLC]){
                    console.log(`Weather Information of ${name}\n`);
                    console.log(`Temp             : ${weatherInfo[nameLC].temp}`);
                    console.log(`precipitation    : ${weatherInfo[nameLC].precipitation}`);
                    console.log(`humidity         : ${weatherInfo[nameLC].humidity}`);
                    console.log(`wind             : ${weatherInfo[nameLC].wind}`);}
          else{
                    console.log('The place you are looking for is not available. Thank you!')    
          }
          
}

cityFun('yangon');