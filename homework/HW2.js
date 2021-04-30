//01
function star(t)
{
    for(var i=0; i<t; i++)
    {
        console.log('*')
    }
    console.log("\n")
}
star(5)

//02
function number(m, n)
{
    for(; m<=n; m++)
    {
        console.log(m);
    }
    console.log("\n")
}
number(3, 8)

//03
function prime(a,b)
{
    for(; a<=b; a++)
    {
        for(var i=2; i<a; i++)
        {
            if(parseInt(a/i)==a/i)
            {
                break
            }
            else if(i==a-1)
            {
                console.log(a)                
            }
        }
    }
    console.log("\n")
}
prime(3,15)