/* 
 Switch-case-break is normally used when the inputs/expression are precise.
          switch(variable, expression){
                    case 'sth';
                    -->
                    break;
          }
*/
let variable = 'car';

          switch(variable){
                    case 'car':
                              console.log("This is car");
                              break;
                    
                    case 'bike':
                              console.log("This is bike");
                              break;

                    case 'boat':
                              console.log("This is boat");
                              break;
                    default:
                              console.log("none of above");
                              break;
          }