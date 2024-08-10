// // // // function add(){
// // // //     console.log("result is 20")
// // // // }

// // // // //calling functions
// // // // // add();


// // // // //use console.log and call function
// // // // // console.log(add())


// // // // //type of function
// // // // console.log(typeof add)


// // // //function expects parameters, but dont pass
// // // function add(x1, x2,x3){
// // //     let result =x1+x2+x3;
// // //     return result;
// // // }
// // // // add();
// // // // console.log(add())


// // // //pass less parameters then required
// // // //returns nan as one value is undefined.
// // // // console.log(add(1,2))


// // // //pass all parameters and it works
// // // console.log(add(1,2,3))


// // // //passing in default values as arguments
// // // function add(x1=0, x2=0,x3=0){
// // //     let result =x1+x2+x3;
// // //     return result;
// // // }
// // // console.log(add())


// // //partially taking in default values and partially from us
// // function add(x1=0, x2=0,x3=0){
// //     let result =x1+x2+x3;
// //     return result;
// // }
// // console.log(add(4,5))


// //function expression
// let fun1=function hello(){
//     console.log("hello js")
// }
// fun1()


//function expression with anonymous function
// let fun1=function(){
//     console.log("hello js")
// }
// fun1()


//function expression with arrow function
// let fun1= () => {
//     console.log("hello js")
// }
// fun1()


//function in one liner
let fun1 = () => console.log("hello js")
fun1()