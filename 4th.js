const chd=require('readline-sync')
var i,j,n
n=chd.questionInt('enter pattern size')

for(i=n;i>=1;i--)
{
    for(j=1;j<=i;j++)
    {
        process.stdout.write(`${j}`)
    }
    console.log()}