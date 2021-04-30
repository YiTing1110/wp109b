# week 8 homework

### Q1

**_CODE_**

        function star(t)
        {
            for(var i=0; i<t; i++)
            {
                console.log('*')
            }
            console.log("\n")
        }  
        star(5)  

**_INPUT_**

        *
        *
        *
        *
        *

---

### Q2

**_CODE_**

        function number(m, n)
        {
            for(; m<=n; m++)
            {
                console.log(m);
            }
            console.log("\n")
        }
        number(3, 8)

**_INPUT_**

        3
        4
        5
        6
        7
        8

---

### Q3

**_CODE_**

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

**_INPUT_**

        3
        5
        7
        11
        13