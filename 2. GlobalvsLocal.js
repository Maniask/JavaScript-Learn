// Program to understand the scope of local and global variable.

var v=100
function test(){
    var v=200
    console.log("Local Variable "+ v)
}
console.log("Global Variable "+ v)
test()
