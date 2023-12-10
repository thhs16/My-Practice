#include"stdio.h"
#include"conio.h"
#include"stdlib.h"

int main(){

char f_name[15];
int age;
int u_id;
int lnumber;
int Pmoney;//played money
int e;
int OwnMoney;
int a=1;
int b;


     printf("****** Welcome to the lottery game ******\n");
     printf("Please enter your name : ");//name
        scanf("%s",&f_name);
     printf("Your name is %s.\n",f_name);
     printf("Please enter your age : ");
           scanf("%d",&age);
 if(age>=5){
     printf("You can play the game.\n");
     printf("Please describe your money amount,you have that have to be at least 100ks : ");
           scanf("%d",&OwnMoney);
     printf("Your id is '8425'.\n");
  while(age>=5){
     printf("Please enter your id  : ");
           scanf("%d",&u_id);
 if(u_id==8425){
     printf("Now,you can enter the game and have fun.\n\n");
  while(u_id==8425){
     printf("Enter the money amount that you want to play with(the minimum amount is '100ks'): ");
           scanf("%d",&Pmoney);
 if(Pmoney>=100){
     printf("Please select your favorite number(within 01 to 99) : ");
           scanf("%d",&lnumber);
 if(lnumber==79){
     printf("* Wow!You win the lottery. * \n");
    OwnMoney=OwnMoney*5;
     printf("Now,you earn '%dks'.\n\n",OwnMoney);
    }else{
     printf("Sorry!Good luck in next time.\n\n");}
    OwnMoney=OwnMoney-Pmoney;
     printf("Your remaining money is '%dks'.\n\n",OwnMoney);
 if(OwnMoney<100){
     printf("You are not able play the game now due to your money being less than '100ks' !!!\n");
     break;
    }
    }else{
     printf("You are nearly broke or have less money.\n.");
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
     break;
        }
}break;
 }
    else{
    printf("Sorry!You are in wrong id.\n");}
      }
    }
    else{
     printf("You are not able play the game.");
    }
getch();
return 0;
}
