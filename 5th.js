const chd=require('readline-sync')
var i,j,n,k,m=1
n=chd.questionInt('enter pattern size')

for(i=n;i>=1;i--)
{
    for(j=1;j<=i-1;j++)
    {
        console.log()
        for(k=1;k<m;k++){
            process.stdout.write("*")

        }
    
    }

    console.log()
m++}