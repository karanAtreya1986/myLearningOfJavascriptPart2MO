// let f1=function(){
//     return "I am in f1"
// }

// let f2=function(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             resolve("I am in function two which has promise resolved")
//         }, 5000);
//     })
// }

// let f3=function(){
//     return "I am in f3"
// }

// //clubbing all functions into one master function
// let masterfunction=function(){
//     let r1=f1()
//     console.log("result 1 is , " + r1)

//     let r2=await f2()
//     console.log("result 2 is , " + r2)

//     let r3=f3()
//     console.log("result 3 is , " + r3)
// }

// //call the master function
// masterfunction()