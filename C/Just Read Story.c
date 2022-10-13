#include"stdio.h"
#include"conio.h"

int main(){

int UserAge;

  printf("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Welcome from 'Just Read Story' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n\n\n");
  printf("Enter Your Age : ");
   scanf("%d",&UserAge);

  if(UserAge>=10){
   while(UserAge>=10){
   printf("\\\\\\Here are the titles of the stories///\n");
   printf("'The Hare and the tortoise'\n\n");
   printf("A Hare was making fun of the Tortoise one day for being so slow.\n\n");
   printf("'Do you ever get anywhere?' he asked with a mocking laugh.\n\n");
   printf("'Yes' replied the Tortoise, 'and I get there sooner than you think'.\n\nI'll run you a race and prove it.'\n\n");
   printf("The Hare was much amused at the idea of running a race with the Tortoise,\nbut for the fun of the thing he agreed.\n\nSo the Fox, who had consented to act as judge, marked the distance and started the runners off.\n\n");
   printf("The Hare was soon far out of sight,\nand to make the Tortoise feel very deeply how ridiculous it was for him\nto try a race with a Hare, he lay down beside the course \nto take a nap until the Tortoise should catch up.\n\n");
   printf("The Tortoise meanwhile kept going slowly but steadily,\nand, after a time, passed the place where the Hare was sleeping.\n\nBut the Hare slept on very peacefully; and when at last he did wake up, the Tortoise was near the goal.\n\n The Hare now ran his swiftest, but he could not overtake the Tortoise in time.\n\n");
   printf("Slow and steady wins the race.\n\n");
   printf("%50s","by Aesop");
     break;
}
}

  else{
    printf("You are too young to read our stories.\nThank You!");
}

getch();
return 0;
}

