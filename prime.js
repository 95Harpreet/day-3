const chd=require('readline-sync')
var i,n,check=0
n=chd.questionInt('enter any number')

for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        check++
        break
    }
}
    if(check==0)
    {
        console.log('it is a prime number')
    }
    else{
        console.log('it is not a prime number')
    }

