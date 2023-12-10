#include"stdio.h"
#include"conio.h"
#include"stdlib.h"

void intro();
void body();


////////////////////////////////////////////////////////////////////////////////////////////////////////

int main(){

int age;
int a;

   intro();
////////////////
             printf("Your age,please! : ");
              scanf("%d",&age);
                   if(age>=18){
          printf("\nYour age is old enough to participate the game.");
                   body();
          }        else{
          printf("\n!!!SORRY!!!\nYou are not allowed to enter the game.");
          }


getch();
return 0;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////


    void intro(){

        char fname[15],lname[15];

          printf(">>>>>>>>>> Welcome From 'THHS' Lottery Game <<<<<<<<<<\n");
          printf("Please enter your first name : ");
           scanf("%s",&fname);
          printf("Please enter your last name : ");
           scanf("%s",&lname);
          printf("Your name is %s %s.\n\n",fname,lname);

       }




 ////////////////////////////////////////////////////////////////////////////////////////////////////////

    void body(){

        int id;

          printf("\nHere is your id '9493'.\n");
          printf("Please enter your id : ");
           scanf("%d",&id);

}
