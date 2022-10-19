const chd=require('readline-sync')
var i,n,f=1
n=chd.questionInt('enter any number to find factorial ')

for(i=1;i<=n;i++)
{
    f=f*i
}
    console.log('factorial of number is '+f)
