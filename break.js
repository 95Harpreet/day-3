const chd=require('readline-sync')
var i,n
n=chd.questionInt('enter loop size')
console.log('values are:------')
for(i=0;i<n;i++)
{
    if(i==3)
    {
        break
    }
    console.log(i)
}