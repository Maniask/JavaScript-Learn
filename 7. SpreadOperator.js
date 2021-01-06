// Program to understand the usage of spread operator.

/* 
Spread Operator can convert the array into individual elements, 
copy one array into another and 
concatenate two or more arrays. 
*/

------------------------------------------------------------------------------------
Program-1
----------
function addThreeNumbers(a,b,c){
    return a+b+c;
}
const arr = [100,200,300]
let arr1 = [10,20,30]
let arr2 =[40,50,60]
let arr3 = [...arr2] // Copying arr2 in arr3 using spread operator.
let arr4 = [...arr1,...arr2,...arr3]// Concatenating arr1, arr2 and arr3.

console.log('sum is :',addThreeNumbers(...arr))
console.log('sum is ',addThreeNumbers(...[1,2,3]))
console.log("Sample array",...[1,2,3])

console.log("Copied array is : ",arr3)

console.log("Concatenated array is : ", arr4)
console.log("Concationation : ",...arr1,...arr2)

Output- 1
-------
sum is : 600
sum is  6
Sample array 1 2 3
Copied array is :  [ 40, 50, 60 ]
Concatenated array is :  [
  10, 20, 30, 40, 50,
  60, 40, 50, 60
]
Concationation :  10 20 30 40 50 60
---------------------------------------------------------------------------------
Program- 2
-----------
//copy object
let student1 ={firstName:'Mohtashim',company:'TutorialsPoint'}
let student2 ={...student1}
console.log(student2)
//concatenate objects
let student3 = {lastName:'Mohammad'}
let student4 = {...student1,...student3}
console.log(student4)

Output- 2
-----------
{firstName: "Mohtashim", company: "TutorialsPoint"}
{firstName: "Mohtashim", company: "TutorialsPoint", lastName: "Mohammad"}
