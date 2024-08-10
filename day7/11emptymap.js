// let m1=new Map()
// console.log(m1)

//map can contain any damn datatype as key including objects
let m1=new Map()
// m1.set("name", "tata")
// m1.set(false, true)
// m1.set(5, "number five")
// m1.set(56.78, "another number")
// m1.set("string as key", "this is string as key")
// m1.set('f', "hello maps")
// m1.set("address",{
//     state:"KA",
//     pincode:324234324
// })

// console.log(m1)

//map can contain arrays as value.
// m1.set("marks", [56,78,90])
// console.log(m1)


//clear out the map values
m1.set("name", "tata")
m1.set(false, true)
m1.set(5, "number five")
m1.set(56.78, "another number")
m1.set("string as key", "this is string as key")
m1.set('f', "hello maps")
m1.set("address",{
    state:"KA",
    pincode:324234324
})
// m1.clear()
// console.log(m1)

//when we try to print the clear, it gives undefined as nothing inside map.
// console.log(m1.clear())


//pass the key and get the value
// console.log(m1.get(56.78))

//pass key which does not exist and we get undefined.
// console.log(m1.get("undefined key"))


//has method to check if key is present
//returns true or false.
// console.log(m1.has("address"))

//has method to check for non existent key
//returs false
// console.log(m1.has("undefined"))

//delete a key-value by passing in the key name
// m1.delete("f")
// console.log(m1)


//another way to check delete
// console.log(m1.delete("f")) // this will return true or false
// console.log(m1)

//delete key which is not present
// console.log(m1.delete("frwerwre")) //this will return false.
// console.log(m1)

//get the size of the map
// console.log(m1.size)

//for each with map
//first argument is for values
//second argument is for keys
// m1.forEach(function(x,y){
//     // console.log(x)
//     console.log(y)
// })

//for of loop to print the maps.
//this prints in key, value format.
// for (const element of m1) {
//     console.log(element)
    
// }

//another way to write for of loop
// for (const [k,v] of m1) {
//     console.log(k,v)
    
// }


//to get all the keys
// console.log(m1.keys())


//to get all the values
console.log(m1.values())