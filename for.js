const chd=require('readline-sync')
var i,n
n=chd.questionInt('enter loop size')
console.log('value is:------')
for(i=0;i<n;i++)
{
    console.log(i)
}