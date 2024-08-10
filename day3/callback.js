// function show(){
//     console.log("hello js")
// }

// function sum(a,b,c,callbackfunction){
//     let result=a+b+c;
//     console.log(result)
//     callbackfunction()
// }

// sum(1,2,3,show)


//see how confusing it becomes when parameters are involved

function show(value){
    console.log(`value is ${value}`)
}

function sum(a,b,c,superman){
    let result=a+b+c;
    superman(result)
}

// sum(1,2,3,show)

// sum(1,2,3,batman())

sum(1,2,3,batman)