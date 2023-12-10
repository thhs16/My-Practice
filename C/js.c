#include"stdio.h"
#include"conio.h"
#include"stdlib.h"
#include"time.h"

int main(){
int a;
for( a=0 ; a<10 ; a++)
    {

        srand(time(NULL));
        printf(" %d\n ",rand());}

    getch();
    return 0;
}

