var a = [[1,2,3],[4,5,6]];
var l = "";
for(var i = 0; i < a.length; i++)
{
    for(var j = 0; j < a[i].length; j++)
    {
        l += a[i][j] + " ";
        console.log(a[i][j]);
    }
    console.log(a[i]);
}
console.log(l);
console.log(a);

console.log();

function add(a, b)
{
    return a + b;
}
//匿名函數
var sub = function(a, b)
{
    return a + b;
}
var plus = sub;
console.log("add(3, 5) = "+add(3, 5));
console.log("sub(5 + 7) =", sub(5, 7), "plus(7 + 9) =", plus(7, 9));

console.log();

var a = 5, b = [0, 2, 4], c = [7, 9, 11];
function changeValue(a, b, c)
{
    a += 1;
    b[0] += b[0] + 1;
    c += 1;
}
console.log(a, b, c[0]);
changeValue(a, b, c[0]);
console.log(a, b, c[0]);