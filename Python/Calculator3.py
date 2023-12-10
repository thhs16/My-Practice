UserName=input("😊 Please enter your name😊 :")
print('Your name is ☞',UserName,'☚.')
UserAge=int(input("Your age,please🙏 - "))

if UserAge>=10:
   print('You can enter now.\n  >>>>>Have fun<<<<<')
   a=1
   while a==1:
        f_num = float(input("Number:"))
        s_num = float(input("Another number"))
   
        Function = int(input("To add,press 1.\nTo subtract,press 2.\nTo multiply,press 3.\nTo divide,press 4.\nTo add power,press 5.\n Enter one of the functions : "))
        if Function ==1:
         print(f_num,'+',s_num,'=',f_num+s_num)

        elif Function ==2:
         print(f_num,'-',s_num,'=',f_num-s_num)
        elif Function ==3:
         print(f_num,'*',s_num,'=',f_num*s_num)
        elif Function ==4:
         print(f_num,'/',s_num,'=',f_num/s_num)
        elif Function ==5:
         print(f_num,'^',s_num,'=',f_num**s_num)
        quit_con=str(input('Do you want to exit?\n'))
        if quit_con == "yeah":
           print('Bye Bye')
           print("Thank you")
           break
        elif quit_con == "Nah":
           print("You can now continue.")
        else:
           print('Your typing is something wrong.Retry again!')
           
         
else : 
   print("You can't enter.")
   print("Thank you")
