// Program to understand how variable hoisting works.

console.log(i)            // Output will be undefined as variable hoisting allows the use of variable without declaration.
for (var i = 1;i <= 5;i++){
    console.log(i)
}
console.log("after the loop i value is ",i)

Output
-------
undefined
1
2
3
4
5
after the loop i value is  6
