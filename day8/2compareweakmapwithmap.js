let m1=new Map()
let wm1=new WeakMap()

// console.log(m1)
// console.log(wm1)


//add any normal datatype as key
//weakmap can have only object as key
//weakmap can have any value as value
// wm1.set("fname", "tata")
// console.log(wm1)

//create objects and pass them as key
let o1={
    fname:"donie",
    age:50
}
wm1.set(o1, "tester")
// console.log(wm1)

//get the value
//pass the key
console.log(wm1.get(o1))