// Program to illustrate various methods by which we can implement lambda functions. 

var foo = x=>10+x 
console.log(foo(10))

var disp = (x)=>console.log("Hello World",x) 
disp(10)

var msg = ()=> { 
    console.log("function invoked") 
} 
msg() 
 
Output
-------
20
Hello World 10  
function invoked
