// Program to illustrate function hoisting.

hoist_function()  
function hoist_function() { 
   console.log("foo") 
} 

/*
// Function expression cannot be hoisted.
hoist_function() // TypeError: hoist_function() is not a function  
var hoist_function = function() { 
   console.log("bar") 
}
*/

Output
-------
foo
