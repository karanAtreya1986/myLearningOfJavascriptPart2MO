let ws1=new WeakSet()
// console.log(ws1)


//try to add non object and print
// ws1.add(10)
// console.log(ws1)


//try to add object to weak set and print
let o1={
    fname:"karan",
    age:20
}
ws1.add(o1)
console.log(ws1)