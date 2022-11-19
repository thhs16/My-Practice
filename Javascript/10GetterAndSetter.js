
class UserInfo{
          constructor(){}

          setter(Uname){
                 this.name= Uname;  
          }

          getter(){
                    return this.name;
          }
}

let info = new UserInfo;
info.setter('Thae Htape Htar San');
console.log(`Your name is ${info.getter()}.`);
