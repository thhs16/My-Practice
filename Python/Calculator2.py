UserName=input("Please enter your name - ")
print('Your name is',UserName,'.')
UserAge=int(input("Your age,please - "))

if UserAge>=10:
   print('You can enter now.\n  >>>>>Have fun<<<<<')
   f_num = float(input("Number:"))
   s_num = float(input("Another number"))
   Function = int(input("To add,press 1.\nTo subtract,press 2.\nTo multiply,press 3.\nTo divide,press 4.\n Enter one of the number of function: "))
   if Function ==1:
       print(f_num,'+',s_num,'=',f_num+s_num)

   elif Function ==2:
       print(f_num,'-',s_num,'=',f_num-s_num)
   elif Function ==3:
       print(f_num,'*',s_num,'=',f_num*s_num)
   elif Function ==4:
       print(f_num,'/',s_num,'=',f_num/s_num)
   print('Thank you')
else : 
   print("You can't enter. ")