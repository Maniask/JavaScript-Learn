// The purpose of "use strict" is to indicate that the code should be executed in strict mode.
// With strict mode we cannot use undeclared variables.
-----------------------------------------------------------------------------------------------

// Whole-script strict mode syntax 
"use strict"; 
v = "Hi!  I'm a strict mode script!";  // ERROR: Variable v is not declared
-------------------------------------------------------------------------------
    
v = 15 
function f1() { 
    // inner loop ----> will run in strict mode. 
   "use strict"; 
   var v = "Hi!  I'm a strict mode script!"; 
   console.log(v)
}
// outer loop ----> will run without strict mode
console.log(v)
f1()
