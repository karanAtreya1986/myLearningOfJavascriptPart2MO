
//an array can have any type of element inside it.
let arr=[1,2,45.67,true, "lion", [4,5,false, "tiger", 67.89], {age:56, value:"monkey"}]
// console.log(arr)


//to access complete element at the index.
// console.log(arr[5])
// console.log(arr[6])


//access specific element from an array and an object which itself in present in larger array
// console.log(arr[5][2])
// console.log(arr[6].value)


//for each is available for arrays to iterate and print all values
// arr.forEach(mangesh=>{
//     console.log(mangesh)
// })

// //this also gives the same output.
// arr.forEach((mangesh)=>{
//     console.log(mangesh)
// })


//for each loop to print values and index
// arr.forEach((mangesh, index)=>{
//     console.log("What is mangesh", +mangesh) // this prints array elements
//     console.log("What is index", +index) //this prints index of array
// })


//for each loop with three arguments to print the array, index and its values.
arr.forEach((mangesh, index, a1)=>{
    console.log("See what is mangesh prinint, ", mangesh) //prints out every array element one by one
    console.log("See what is index printing, ", index) // prints out the index of the array element being printed.
    console.log("See what is a1 printing, " , a1) // prints the complete array for each element traversed
})