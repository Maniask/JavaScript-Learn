// Program to illustrate anonymous functions and the function constructor.

var hello = function(){return "Hello World"}
var func = function(x,y){ return x*y }; // Anonymous Function
var func1 = new Function("x", "y", "return x*y;");  // Function Constructor

function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
console.log(hello())
console.log(func(30,40))
console.log(func1(100,3))
product()

Output
-------
Hello World
1200
300
The product : 200
