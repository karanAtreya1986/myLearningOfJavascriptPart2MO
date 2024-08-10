// // let person={

// // }
// // // console.log(person)

// // //check type of object
// // console.log(typeof person)


// //object with properties
// let person={
//     firstname: "karan",
//     isvalid: true,
//     age: 56,
//     value: 35435.345345,
//     checkvalue: 'N'
// }
// // console.log(person)

// //access specific object property
// console.log(person.firstname)


//nested objects
let person={
    firstname: "karan",
    isvalid: true,
    age: 56,
    value: 35435.345345,
    checkvalue: 'N',
    address: {
        area: "tata",
        locality: "estate",
        pincode: 12423432
    }
}
// console.log(person)


// console.log(person.address.pincode)


//bracket notation
// console.log(person)
// console.log(person["firstname"])
// console.log(person["address"]["locality"])
// console.log(person.firstname)

// console.log(person[firstname])



let num={
    1: "karan",
    2: 'f',
    3: 234234.234234,
    4: 23432,
    5: false,
    6:{
        test: "karan",
        7: true,
        a: 2423434,
        8: 234234.234234324,
        9: 't'
    }
}
// console.log(num[4])
// console.log(num[6]["a"])


//type of value the key holds.
console.log(typeof (num[6]["test"]))
console.log(typeof (num[6][8]))