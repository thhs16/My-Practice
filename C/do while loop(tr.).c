#include"stdio.h"
#include"conio.h"

int main(){

int a;
int b=1;
int c;

    printf("Please enter a number;");
     scanf("%d",&a);


   do{
    c=a*b;
   printf("%d * %d = %d\n",a,b,c);
   b++;
   }while(b<=10);

printf("thank you!");

getch();
return 0;


}
