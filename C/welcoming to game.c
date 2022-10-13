#include "stdio.h"
#include "conio.h"
#include"stdlib.h"


int main(){


char a[0];
int b;
int age;
   printf("***Welcome to our game***\n");
   printf("Please enter your first name :");
   scanf("%s",&a);
   printf("Your name is : %s\n",a);
   printf("Please enter your age :");
   scanf("%d",&b);

   age=10;
if(b>=age){
        printf("*You can now play the game and have fun");
   }else{
    printf("*Ohh!Sorry,you are not able to play the game*");}



getch();
return 0;

}
