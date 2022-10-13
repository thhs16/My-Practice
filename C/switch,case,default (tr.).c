#include"stdio.h"
#include"conio.h"

int main(){

int a;

   printf("Please enter the number :");
   scanf("%d",&a);

 switch(a){

 case 1:
 printf("The number is 1 that you enter.");
 break;

 case 2:
 printf("The number is 2 that you enter.");
 break;

 default:
 printf("error");
 break;



 }


getch();
return 0;

}
