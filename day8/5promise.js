//promise using arrow function
new Promise((resolve, reject)=>{
    resolve("I am resolved")
    reject("I am reject")
})


//promise using anonymous function
new Promise(function(resolve, reject){
    resolve("I am resolved")
    reject("I am reject")
})