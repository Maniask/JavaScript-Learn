// Programs to understand the working of returning and parametrized functions.

function addTwoNumbers(first,second = 10){
    console.log('first parameter is :',first)
    console.log('second parameter is :',second)
    return first+second;
}

console.log("case 1 sum:",addTwoNumbers(20)) 
console.log("case 2 sum:",addTwoNumbers(2,3))
console.log("case 3 sum:",addTwoNumbers())
console.log("case 4 sum",addTwoNumbers(1,null))//null passed
console.log("case 5 sum",addTwoNumbers(3,undefined))

Output
-------
first parameter is : 20
second parameter is : 10
case 1 sum: 30
first parameter is : 2
second parameter is : 3
case 2 sum: 5
first parameter is : undefined
second parameter is : 10
case 3 sum: NaN
first parameter is : 1
second parameter is : null
case 4 sum 1
first parameter is : 3
second parameter is : 10
case 5 sum 13
