// Program to illustrate how we can use objects using functions.

function Car() { 
    this.make = "Ford" 
    this.model = "F123" 
 }  
 var obj = new Car() 
 obj.mode = "Running" // adding new property to the previously defined object.
 console.log(obj.make) 
 console.log(obj["model"])
 console.log(obj.mode)
 
 Output
 ------
 Ford
 F123
 Running
