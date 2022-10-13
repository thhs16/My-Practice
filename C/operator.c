#include<stdio.h>
#include"conio.h"

int main(){

int a;
int division;
int remainder;

    printf("Please enter your number");
    scanf("%d",&a);
division=10/a;
remainder=10%a;
    printf("The result is %d and the remainder is %d",division,remainder);


getch();
return 0;


}
