// Programs to understand the difference between var and let.
----------------------------------------------------------------
Program-1
----------
"use strict" 
function test() { 
   var num = 100 
   { 
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : "+num)  
   } 
   console.log("value of num in test() "+num);
} 
test()

Output-1
---------
Inner Block begins
value of num : 200
value of num in test() 100
------------------------------------------------------------------
Program-2
----------
"use strict" 
function test() { 
   let num = 100 
   { 
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : "+num)  
   } 
   console.log("value of num in test() "+num);
} 
test()

Output-2
---------
Inner Block begins
value of num : 200
value of num in test() 100
-------------------------------------------------------------------
Program-3
---------
"use strict" 
function test() { 
   var num = 100 
   { 
      console.log("Inner Block begins") 
      var num = 200 
      console.log("value of num : "+num)  
   } 
   console.log("value of num in test() "+num);
} 
test()

Output-3
---------
Inner Block begins
value of num : 200
value of num in test() 200
-------------------------------------------------------------------
Program-4
----------
"use strict" 
function test() { 
   let num = 100 
   { 
      console.log("Inner Block begins") 
      var num = 200 
      console.log("value of num : "+num)  
   } 
   console.log("value of num in test() "+num);
} 
test()

Output-4
---------
SyntaxError: Identifier 'num' has already been declared
--------------------------------------------------------------------
Program-5
----------
"use strict" 
function test() { 
   var num = 100  
   console.log("Inner Block begins") 
   var num = 200 
   console.log("value of num : "+num)  
   console.log("value of num in test() "+num);
} 
test()

Output-5
---------
Inner Block begins
value of num : 200
value of num in test() 200
--------------------------------------------------------------------
Program- 6
-----------
"use strict" 
function test() { 
   let num = 100  
   console.log("Inner Block begins") 
   var num = 200 
   console.log("value of num : "+num)  
   console.log("value of num in test() "+num);
} 
test()

Output- 6
----------
SyntaxError: Identifier 'num' has already been declared
-------------------------------------------------------------------
Program- 7
----------
"use strict" 
function test() { 
   let num = 100  
   console.log("Inner Block begins") 
   let num = 200 
   console.log("value of num : "+num)  
   console.log("value of num in test() "+num);
} 
test()

Output- 7
----------
SyntaxError: Identifier 'num' has already been declared
------------------------------------------------------------------
Program-8
----------
"use strict" 
function test() { 
   var num = 100  
   console.log("Inner Block begins") 
   let num = 200 
   console.log("value of num : "+num)  
   console.log("value of num in test() "+num);
} 
test()

Output- 8
----------
SyntaxError: Identifier 'num' has already been declared
