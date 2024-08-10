let s1=new Set();
// console.log(s1) //default name of set is set(0)

// let s2=new Set();
// console.log(s2) //default name of set is set(0)

// //name of set is always set(0)
// s2=new Set()
// console.log(s2)

//adding values to set.
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')

// console.log(s1)

//duplicate values are auto removed in set.
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')

// console.log(s1)


//clear values from the set.
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// s1.clear()
// console.log(s1)


//delete value.
//pass the value to delete.
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// s1.delete(true)
// console.log(s1)

//to get the size of the set
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// s1.add(1)
// s1.add(45.67)
// s1.add(true)
// s1.add("tiger")
// s1.add('c')
// console.log(s1.size)


//use has to check if value exist
//returns true or false.
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
console.log(s1.has("tiger"))
console.log(s1.has("biker"))