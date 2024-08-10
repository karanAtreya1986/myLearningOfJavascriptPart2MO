// try{
//     let firstname=10;
//     console.log(firstname.toUpperCase())
// }
// catch(err){
//     console.log("please use strings not numbers")
// }
// console.log("bye")



let firstname;
let secondname;
try{
   console.log(firstname.toUpperCase())
}
catch(err){
    console.log("please use strings not numbers")
    console.log("Error details is ," , err)
    console.log("Error name is , " + err.name)
    console.log("Error number is , " + err.number)
}
console.log("bye")