#include"stdio.h"
#include"conio.h"

int main(){

char f_name[15];
int age;
int u_id;
int lnumber;
int money;


     printf("****** Welcome to the lottery game ******\n");
     printf("Please enter your name : ");//name
        scanf("%s",&f_name);
     printf("Your name is %s.\n",f_name);
     printf("Please enter your age : ");
        scanf("%d",&age);
 if(age>=5){
    printf("You can play the game.\n");
    printf("Your id is '1234'.\n");
  while(age>=5){
    printf("Please enter your id  : ");
        scanf("%d",&u_id);
    if(u_id==1234){
    printf("Now,you can enter the game and have fun.\n\n");
    while(u_id==1234){
    printf("Please describe your money amount that have to be at least 1,000ks : ");
        scanf("%d",&money);
    if(money>=1000){
    printf("Please select your favorite number(within 01 to 99) : ");
        scanf("%d",&lnumber);
    if(lnumber==35){
        printf("* Wow!You win the lottery. *\n");
        printf("Thank you!");
    }else{
    printf("Sorry!good luck in next time.\n\n");}
    }else{
    printf("You are nearly broke or have less money and try again\n.");
    printf("Thank you!");
    }
    }}else{
    printf("Sorry you are in wrong id.\n");}

    }
  }else{
     printf("You are not able play the game.\n");}


getch();
return 0;
}
