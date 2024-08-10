
/**
 * since arrays do not have keys, so during destructure the name mapping auto happens.
 */
let arr=["Shalini", "Rocky", "Jameson"]

// let[a,b,c]=arr;

// console.log(a)
// console.log(c)
// console.log(b)


//what if we dont give a name mapping.
// let[a,,c]=arr;

// console.log(a)
// console.log(c)


/**
 * what if we dont give extra comma and just two variables 
 * but in array there are three variables.
 */
let[a,c]=arr;

console.log(a)
console.log(c)