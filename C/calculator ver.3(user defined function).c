#include"stdio.h"
#include"conio.h"
#include"stdlib.h"

int addition(int a,int b);
int subtraction(int a,int b);
int multiplication(int c,int b);
int divition(int a,int b);

int main(){
int w=0;
int number;
int number1;
int number2;
int number3;
int c;
int number5;
int number6;
int sub;
int a;
int b;
int code;
   printf(">>>>>>>>>> THHS calculator <<<<<<<<<<\n");
while(w==0){
int ccode=rand()%9999;
   printf("Here is your code to continue - %d \n",ccode);
   printf("Enter the code : ");
    scanf("%d",&code);
if(code==ccode){
   printf("Enter your first number : ");
    scanf("%d",&a);
   printf("Enter your second number : ");
    scanf("%d",&b);
   printf("***Choose one of them.***\n");
   printf("If you want to combine (a+b),press'1'.\n");
   printf("If you want to subtract(a-b),press'2'.\n");
   printf("If you want to multiply(a*b),press'3'.\n");
   printf("If you want to divide  (a/b),press'4'.\n\n>>>>>>>>>>>>>>>>>>>>>>>>>");
    scanf("%d",&c);

  if(c==1){
     printf("The result is %d.\n",addition(a,b));
     }
  if(c==2){
     printf("The result is %d.\n",subtraction(a,b));
  }
  else if(c==3){
     printf("The result is %d.\n",multiplication(a,b));
  }
  else if(c==4){
     printf("The result is %d.\n ",divition(a,b));
  }

   ending();}
   else{
     printf("You are in wrong code.\nPlease try again!\n\n\n");}


getch;}
return 0;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
int addition(int a,int b){
   return a+b;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
int subtraction(int a,int b){
   return a-b;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
int multiplication(int c,int d){
   return c*d;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
int divition(int num1,int num2){
   return num1/num2;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

void ending(){
  printf("Thank you!\n\n");
}





