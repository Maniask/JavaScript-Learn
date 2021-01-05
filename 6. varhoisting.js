// Programs to understand how variable hoisting works.
-----------------------------------------------------------
Program-1
----------
console.log(i)            // Output will be undefined as variable hoisting allows the use of variable without declaration.
for (var i = 1;i <= 5;i++){
    console.log(i)
}
console.log("after the loop i value is ",i)

Output-1
-------
undefined
1
2
3
4
5
after the loop i value is  6
------------------------------------------------------------
Program- 2
-----------
var balance = 5000
console.log(typeof balance)
var balance = {message:"hello"}
console.log(typeof balance)

Output- 2
----------
number
object
