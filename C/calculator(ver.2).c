
#include"stdio.h"
#include"conio.h"

int main(){

int a;
int b;
int c;
int d=1;

     printf("******WELCOME FROM THHS CALCULATOR*****\n");

  do{
    printf("Enter your first number: ");
      scanf("%d",&a);
    printf("Enter your second number: ");
      scanf("%d",&b);
    printf("Type (1) if you want to combine(+).\n");
    printf("Type (2) if you want to subtract(-).\n");
    printf("Type (3) if you want to multiply(*).\n");
    printf("Type (4) if you want to divide(/).\n");
    printf(":");
      scanf("%d",&c);

  switch(c){

   case 1:
   printf("The result is %d.\n",a+b);
   break;

   case 2:
   printf("The result is %d.\n",a-b);
   break;

   case 3:
   printf("The result is %d.\n",a*b);
   break;

   case 4:
   printf("The result is %d.\n",a/b);
   printf("The remainder is %d.\n",a%b);
   break;

   default:
   printf("Your typing is wrong.");

  }
  printf("(Thank you for your consuming our application.)\n");
  }while(d=1);


getch();
return 0;
}
