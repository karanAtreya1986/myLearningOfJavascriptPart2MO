let s1=new Set()
s1.add(1)
s1.add(45.67)
s1.add(true)
s1.add("tiger")
s1.add('c')
s1.add(1)
s1.add(45.67)
s1.add(true)
s1.add("tiger")
s1.add('c')

//returns only unique elements.
//set will anyway remove duplicates when adding elements.
//1. Using the Array.from() method:
// let a1=Array.from(s1)
// console.log(a1)

//2. Using the spread operator (...):
let a1=[...s1]
console.log(s1)