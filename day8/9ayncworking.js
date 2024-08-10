//aync will start promise
//it means it can be resolved or rejected.

// let square = async function(n){
//     return n*n
// }

// console.log(square(3))


//we always use aysnc with await to know if promise is resolved or not
let square = async function(n){
    return n*n
}

let r1=await square(4)
console.log(r1)