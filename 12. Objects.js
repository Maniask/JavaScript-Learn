// Programs to illustrate the propertis of objects.
-------------------------------------------------------------------------

Program-1
----------
var foo = "bar" 
var baz = { foo } // or var baz = { foo.foo }
console.log(baz.foo)

Output-1
---------
bar
--------------------------------------------------------------------------
Program-2
----------
// Using Object() constructor.
var myCar = new Object(); 
myCar.make = "Ford"; //define an object 
myCar.model = "Mustang"; 
myCar.year = 1987;  

console.log(myCar["make"]) //access the object property 
console.log(myCar.model) 
console.log(myCar.year)
console.log(myCar["current"])

Output-2
---------
Ford
Mustang
1987
undefined
-----------------------------------------------------------------------------
Program-3
----------
// The object’s property key can be a dynamic value.
var myCar = new Object()  
var propertyName = "make"; 
myCar[propertyName] = "Ford"; 
console.log(myCar.make)

Output-3
---------
Ford
------------------------------------------------------------------------------
Program-4
----------
var myCar = new Object()  
myCar.propertyName = "make";  
propertyName = "foo"
console.log(myCar.propertyName)

Output-4
---------
make
