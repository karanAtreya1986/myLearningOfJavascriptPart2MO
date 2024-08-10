// function checkmarks(n){
//     if(n<50){
//         throw "please use number greater than 60"
//     }
// }
// checkmarks(10)


//when condition is met and no throw needs to be called.
// function checkmarks(n){
//     if(n<50){
//         throw "please use number greater than 60"
//     }
//     console.log("hi number," +n)
// }
// checkmarks(109)


//when condition is not met and throw is called
// function checkmarks(n){
//     if(n<50){
//         throw "please use number greater than 60"
//     }
//     console.log("hi number," +n)
// }
// checkmarks(10)



//try accessing n outside of block
// function checkmarks(n){
//     if(n<50){
//         throw "please use number greater than 60"
//     }
   
// }
// console.log("hi number," +n)
// checkmarks(108)
// console.log("hi number," +n)


//throw with return keyword and condition not met.
// function checkmarks(n){
//     if(n<50){
//         throw "please use number greater than 60"
//     }
//    return n
// }
// console.log(checkmarks(49))



//throw with return keyword and condition met.
function checkmarks(n){
    if(n<50){
        throw "please use number greater than 60"
    }
   return n
}
console.log(checkmarks(50))