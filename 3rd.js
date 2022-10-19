const chd=require('readline-sync')
var i,n,j
n=chd.questionInt('enter pattern size')

for(i=1;i<=n;i++)
{
    for(j=1;j<=i;j++)
    {
        process.stdout.write(`${j,i} `)
    }
    console.log()
}