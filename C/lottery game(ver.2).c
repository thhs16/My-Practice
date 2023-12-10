#include"stdio.h"
#include"conio.h"
#include"stdlib.h"

int main(){

char f_name[15];
int age;
int u_id;
int lnumber;
int money;
int e;


     printf("****** Welcome to the lottery game ******\n");
     printf("Please enter your name : ");//name
        scanf("%s",&f_name);
     printf("Your name is %s.\n",f_name);
     printf("Please enter your age : ");
        scanf("%d",&age);
 if(age>=5){
    printf("You can play the game.\n");
    printf("Your id is '8425'.\n");
  while(age>=5){
    printf("Please enter your id  : ");
        scanf("%d",&u_id);
    if(u_id==8425){
    printf("Now,you can enter the game and have fun.\n\n");
    while(u_id==8425){
    printf("Please describe your money amount that have to be at least 1,000ks : ");
        scanf("%d",&money);
    if(money>=1000){
    printf("Please select your favorite number(within 01 to 99) : ");
        scanf("%d",&lnumber);
    if(lnumber==35){
        printf("* Wow!You win the lottery. * \n\n");
    }else{
    printf("Sorry!Good luck in next time.\n\n");}
    }else{
    printf("You are nearly broke or have less money and try again\n.");
    printf("Thank you!\n");
    }
    printf("Do you want to play again!\n");
    printf("If you want to keep on playing,press '1'.\n");
    printf("Or Do want to exit? Press '2'.\n :_ ");
         scanf("%d",&e);
    if(e==1){
    printf("You can now play again!\n");
    }
    else if(e==2){
    printf("Good bye for now!\nThank you for always with us.");
        exit(0);
    }
    }}else{
    printf("Sorry!You are in wrong id.\n");}

    }
  }else{
     printf("You are not able play the game.");
     }


getch();
return 0;
}
