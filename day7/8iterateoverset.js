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

//using for of loop
// for (const element of s1) {
//     console.log(element)
// }


//using for each loop.
// s1.forEach(element => {
//     console.log(element)
// });

//Using Set.prototype.values() with a for...of loop:
// for (const element of s1.values()) {
//     console.log(element)
// }

//Using Set.prototype.entries() with a for...of loop:
//This method returns an iterator object with [value, value] pairs (similar to a Map but with the same value twice).
// for (const element of s1.entries()) {
//     console.log(element)
// }


//another way to write above loop
// for (const [value1, value2] of s1.entries()) {
//     console.log(value1,value2)
// }


//Converting to an array and using Array.prototype.forEach:
Array.from(s1).forEach(element => {
    console.log(element)
});