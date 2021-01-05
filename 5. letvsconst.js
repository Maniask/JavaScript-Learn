// Programs to understand the difference between const and let.
-----------------------------------------------------------------
Program- 1
-----------
let income = 100000
const INTEREST_RATE = 0.08
income += 50000 // mutable
console.log("changed income value is ",income)
INTEREST_RATE += 0.01
console.log("changed rate is ",INTEREST_RATE) //Error: not mutable

Output- 1
----------
changed income value is 150000
Uncaught TypeError: Assignment to constant variable
-----------------------------------------------------------------
Program- 2
-----------
const DEPT_NOS = [10,20,30,50]
DEPT_NOS.push(40)
console.log('dept numbers is ',DEPT_NOS)

const EMP_IDS = [1001,1002,1003]
console.log('employee ids',EMP_IDS)
//re assigning variable employee ids
EMP_IDS = [2001,2002,2003]
console.log('employee ids after changing',EMP_IDS)

Output- 2
----------
dept numbers is (5) [10, 20, 30, 50, 40]
employee ids (3) [1001, 1002, 1003]
Uncaught TypeError: Assignment to constant variable.
