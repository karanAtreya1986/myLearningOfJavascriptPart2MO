let employee={
    myname:"tester",
    age:50,
    gender:"female"
}

// let {myname, age, gender}=e1;// change this to match object name for it to work.

// console.log(myname)
// console.log(age)
// console.log(gender)


// let {myname, age, gender}=employee;// change this to match object name for it to work.

// console.log(myname)
// console.log(age)
// console.log(gender)


//try to use different names than the one in object
//we get undefined.
// let {my, ag, ge}=employee;// change this to match object name for it to work.

// console.log(my)
// console.log(ag)
// console.log(ge)


//to change name use the below format.
let {gender:ge,myname:my, age:ag}=employee;// change this to match object name for it to work.

console.log(my)
console.log(ag)
console.log(ge)