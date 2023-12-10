#include"stdio.h"
#include"conio.h"
#include"stdlib.h"

int main(){
int a;

 for(a==0 ;a<=30; a++){
    printf("%d..",rand()%9);
     if(a%5 ==0){
     puts("");
     }
    }


getch();
return 0;
}
