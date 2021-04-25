var a = [[1,2,3],[4,5,6]];

for(var i = 0; i<a.length; i++)
{
    for(var j = 0; i<a[0].length; j++)
    {
        console.log("a[%d] = %d", a, a[j]);
    }
}

function add(a, b)
{
    var i = a + b;
    console.log(i);
}

var sub = function(a, b)
{
    add(a, b);
}

sub(10, 5);