//use variables before declaring them

// a=5
// console.log(a)
// var a


//hoisting will not work with let
//only var is allowed with hoisting
// a=5
// console.log(a)
// let a



//hoisting with functions
//call and then define-declare.
// show()
// function show(){
//     console.log("hello world")
// }


//hoisting with function expression
//hoisting doesnt work with function expression
f1()
let f1=function(){
    console.log("hello world")
}