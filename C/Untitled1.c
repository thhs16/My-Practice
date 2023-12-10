#include <stdio.h>
#include <stdlib.h>
void lottery();
int main()
{
    int age,id;
    printf("Enter your age: ");
    scanf("%d",&age);
    if(age>17)
    {
        printf("Enter your id: ");
        scanf("%d",&id);
        printf("\n");
        lottery();

    }
    else
    {
        printf("Your age is not old enough to play this game");
    }

    return 0;
}
void lottery()
{
        int money,total_money,num,processing_num=1;
        printf("Enter your total money you have: ");
        scanf("%d",&total_money);
        while ((total_money>0) && (processing_num==1))
        {
            printf("\nEnter your money you want to put in to play: ");
            scanf("%d",&money);
            if(money>=1000)
            {
                printf("\nEnter the number you want: ");
                scanf("%d",&num);
                if(num==99)
                {
                    total_money = total_money + (9*money);

                }
                else
                {
                    total_money = total_money - money;

                }
                printf("\n");
                printf("total money = %d\n",total_money);
                printf("Enter processing number 1 or 0\n");
                scanf("%d",&processing_num);
            }



             else
                {
                     printf("Your money amount is low:You need to enter amount over 1000: ");
                     scanf("%d",&money);
                     while(money<1000)
                     {
                         printf("\nstill nunder 1000.Enter your amount\n");
                         scanf("%d",&money);


                     }


                      if(money>=1000)
                        {
                            while ((total_money>0) && (processing_num==1)&& (money>=1000))
                            {
                                printf("\nEnter the number you want: ");
                                scanf("%d",&num);
                                if(num==99)
                                {
                                    total_money = total_money + (9*money);

                                }
                                else
                                {
                                    total_money = total_money - money;

                                }
                                printf("\n");
                                printf("total money = %d\n",total_money);
                                printf("Enter processing number 1 or 0\n");
                                scanf("%d",&processing_num);
                                if(processing_num==1)
                                {
                                    printf("\nEnter money amount more than or equal to 1000\n");
                                    scanf("%d",&money);
                                    if(money<1000)
                                    {
                                        printf("\nwrong\n");
                                    }
                                }

                            }
                        }

                }
        }

}
