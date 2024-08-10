// // let a=[];
// // console.log(a)
// // console.log(a.length)


// //add values and check the array and its length
// let a=[1,2,3, 'a', "tester", false, 34324.234324];
// // console.log(a)
// // console.log(a.length)

// //access specific element
// // console.log(a[5])


// //for each loop is with array
// a.forEach(function(x){
//     console.log(x)
// })


//try to access index which is not present
let a=[1,2,3,4];
// console.log(a[800])

//add to array using push
// console.log(a.push(true))
// console.log(a)


//add to array using unshift, adds to start of array
// console.log(a.unshift("tester"))
// console.log(a)


//pop to remove the last element from array
// console.log(a.pop())
// console.log(a)


//removes first element from array
// console.log(a.shift())
// console.log(a)


//update value in array
// a[1]="karan";
// console.log(a)


//print all the array values
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// for(let i=0;i<b.length;i++){
//     console.log(b[i])
// }


//this will keep value at index 0 and delete everything from index 1
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// b.splice(1)
// console.log(b)


//this will delete all the elements from array
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// b.splice(0)
// console.log(b)


//this will delete from index 1 to index 4.
//last index is included.
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// b.splice(1,4)
// console.log(b)


/**
 * this will add new element to the index.
 * we are adding at index 1, the value as true.
 * 0 in center means use splice for addition.
 */
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// b.splice(1,0,true)
// console.log(b)


//how to add objects to array.
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// let o1={
//     firstname: "karan",
//     num: 45
// }
// b.push(o1)
// console.log(b)


//use unshift and add objects to start of array.
// let b=[1,2,3,4,"karan", 234324.345435435, 'f', false]
// let o1={
//     firstname: "karan",
//     num: 45
// }
// b.unshift(o1)
// console.log(b)


//how to make another variable point to same array.
// let a1=[1,2,3,4]
// let a2=a1
// console.log(a1)
// console.log(a2)


//adding new elements, will add the same element in other reference also.
let a1=[1,2,3,4]
let a2=a1
a1.push(60)
console.log(a1)
console.log(a2)