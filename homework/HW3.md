**__CODE__**

    class Vector
    {
        constructor(array)
        {
            this.a = array
        }
        add(y)
        {
            var r = []
            for(var i = 0; i < this.a.length; i++)
            {
                r[i] = this.a[i] + y.a[i]
            }
            return new Vector(r)
        }
        sub(y)
        {
            var r = []
            for(var i = 0; i < this.a.length; i++)
            {
                r[i] = this.a[i] - y.a[i]
            }
            return new Vector(r)
        }
        dot(y)
        {
            var r = 0;
            for(var i = 0; i < this.a.length; i++)
            {
                r += this.a[i] * y.a[i]
            }
            return new Vector(r)
        }
        neg(y)
        {
            var r = []
            for(var i = 0; i < this.a.length; i++)
            {
                r[i] = this.a[i] * (-1)
            }
            return new Vector(r)
        }
    }

    var x = new Vector([1,2,3])
    var y = new Vector([1,1,1])

    console.log('x.add(y)=', x.add(y))
    console.log('x.add(y).add(y).add(x)=', x.add(y).add(y).add(x))

    console.log('x.sub(y)=', x.sub(y))

    console.log('x.dot(y)=', x.dot(y))

    console.log('x.neg(y)=', x.neg(y))

**__INPUT__**

    x.add(y)= Vector { a: [ 2, 3, 4 ] }
    x.add(y).add(y).add(x)= Vector { a: [ 4, 6, 8 ] }
    x.sub(y)= Vector { a: [ 0, 1, 2 ] }
    x.dot(y)= Vector { a: 6 }
    x.neg(y)= Vector { a: [ -1, -2, -3 ] }