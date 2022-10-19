const chd=require('readline-sync')
var i,n
n=chd.questionInt('enter pattern size')

for(i=0;i<n;i++)
{
    for(j=0;j<=i;j++)
    {
        process.stdout.write("*")
    }
    console.log()
}