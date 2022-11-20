// This project hasn't finished yet

let cityName = 'Yangon';

const weatherInfo={

          Taunggyi:{
                    temp: '22°C',                     // *C
                    precipitation: '73%',            //height of cloud
                    humidity: '73%',                 //vapor in air
                    wind: '4mph'                       //mph
          },

          Mandalay:{
                    temp: '31°C',                     // *C
                    precipitation: '1%',            //height of cloud
                    humidity: '48%',                 //vapor in air
                    wind: '11km/h'                       //mph
          },

          Yangon:{
                    temp: '32°C',                     // *C
                    precipitation: '4%',            //height of cloud
                    humidity: '64%',                 //vapor in air
                    wind: '13km/h'                       //mph
          }
}

function cityFun(name){
          return weatherInfo[name];
}

console.log(cityFun(cityName));