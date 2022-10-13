#include"stdio.h"
#include"conio.h"
#include"stdlib.h"

int main(){

int a=0;
 printf("Hello");
 for(int i = 0; i<15; i++){
 printf("\nHERE IS CODE(%d).",rand());
 printf("\nPlease enter the code : ");
 scanf("%d",&a);
 if(a == rand()){
    printf("You can continue now.");
 }
 else{printf("You are in wrong code.\nPlease try again.");}}

getch();
return 0;
}