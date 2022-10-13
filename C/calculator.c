#include"stdio.h"
#include"conio.h"

int main(){

int a;
int b;
int c;
int p;
int m;
int mul;
int d;
int r;
int h;
int i;
int j;
int k;

    printf("_Welcome_ and enter your first number :");
        scanf("%d",&a);
    printf("Choose one of them'plus_+(1) Minus_-(2) Multiplication_*(3) division_/(included remainder_%)(4)' :");
        scanf("%d",&b);
    printf("Enter your second number :");
        scanf("%d",&c);
h=1;
p=a+c;
if(b==h){
    printf("The result of combination is %d",p);
}
i=2;
m=a-c;
if(b==i){
     printf("The result of division is %d",m );
}

j=3;
mul=a*c;
if(b==j){
    printf("The result of multiplication is %d",mul);
}

k=4;
d=a/c;
r=a%c;
if(b==k){
    printf("The result of division is %d and the remainder is %d",d,r);

}

getch();
return 0;
}
