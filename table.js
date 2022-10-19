const chd=require('readline-sync')
var i,n
n=chd.questionInt('enter any number to show the table of that number ')

for(i=1;i<=10;i++)
{
   console.log(`${n}*${i}=${n*i}`) 
    }
    
