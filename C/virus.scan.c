#include"stdio.h"
#include"conio.h"

int main(){

int b=0;
int a=0;
int num =rand();
int v_a=0; //virus_amount
int t_a=0; //threats_amount

printf("Are you sure to test the virus and threat in your computer?\n");
printf("(1)Yes,please.\n(2)No,I don't want.\n");
printf("Enter within (1)or(2) : ");
 scanf("%d",&a);

 if(a==1){
while(b==0){
for(b=0 ;b<=10; ++b){
  int num =1+rand()%9;

  switch(num){
  case 1:
  ++v_a;

  case 5:
  ++t_a;
  }
}
 printf("%s%30s\n","Total Virus","Total Threats");
 printf("%6d%29d\n\n",v_a,t_a);
}
}else{
 printf("OK!\nWe got it.");
}
getch();
return 0;
}
