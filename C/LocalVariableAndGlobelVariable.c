#include"stdio.h"
#include"conio.h"

char name[]="THHS";

int main(){

 printf("Welcome from the %s.",name);
 MyName();

getch();
return 0;
}

void MyName(){
  printf("\nMy Name Is %s.",name);
}
