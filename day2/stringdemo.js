//chatat function
// let x="my name is karan atreya and lets check the, . char at function"
// console.log(x.charAt(6))

//get the length of string
// console.log(x.length)


//starts with method
// console.log(x.startsWith("my"))
// console.log(x.startsWith("Dyane"))


//ends with
// console.log(x.endsWith("function"))
// console.log(x.endsWith("tester"))

//to upper case method
// console.log(x.toUpperCase())

//to lower case
// console.log(x.toLowerCase())



//use string functions and check value of original string
// console.log(x.toUpperCase())
// console.log(x)



//to change string, capture in new variable
// let str1=x.toUpperCase();
// console.log(str1)
// console.log(x)


//includes
// console.log(x.includes("function"))
// console.log(x.includes(2123.234324))
// console.log(x.includes("func"))


//replace
// console.log(x.replace("karan", "the rock"))


//replace all
// let str="this is a repeating function, this is a repeating text"
// console.log(str.replaceAll("repeating", "once"))


//trim - removes spaces at start and end
// let str=" this is my string with spaces at start, middle, and end "
// console.log(str.trim())


//trim start -- removes spaces from start
// let str="             this is my string with spaces at start, middle, and end "
// console.log(str.trimStart());


//trim end -- removes spaces from end
// let str="             this is my string with spaces at start, middle, and end                   "
// console.log(str.trimStart());


//split - returns array
// let str="             this is my string with spaces at start, middle, and end                   "
// console.log(str.split());
// console.log(str.split(" "));


//use split and access specific element inside array
// let str="             this is my string with spaces at start, middle, and end                   "
// console.log(str.split(" ")[18]);


//use split along with length
// let str="             this is my string with spaces at start, middle, and end                   "
// console.log(str.split(" ").length);


//use substring -- give start index and end index. end index wont be considered.
// let str="             this is my string with spaces at start, middle, and end                   "
// console.log(str.substring(12,15));


//check with nice string
// let str1="this is my string with spaces at start, middle, and end                   "
// console.log(str1.substring(4,7));


//check with another nice string
// let str2="this is my string with spaces at start, middle, and end                   "
// console.log(str2.substring(5,11));


//when you give more than length of string, then everything returned.
// let str3="this is my string with spaces at start, middle, and end                   "
// console.log(str3.substring(5,110));



//when we dont give end index, it will give everything till end from start index
// let str4="this is my string with spaces at start, middle, and end                   "
// console.log(str4.substring(4));


//start index is mandatory else we get error.
// let str5="this is my string with spaces at start, middle, and end                   "
// console.log(str5.substring(, 4));


//locale compare
//0 means true, 1 means false
// let str1="hello js";
// let str2="hello js";
// console.log(str1.localeCompare(str2));


//when there is one character difference also we get -1
// let str1="hello js";
// let str2="hEllo js";
// console.log(str1.localeCompare(str2));


//when strings are same but in different cases we get -1
// let str1="hello js";
// let str2="HELLO JS";
// console.log(str1.localeCompare(str2));


//when strings are completely different we get -1
// let str1="hello js";
// let str2="Tiger Singh";
// console.log(str1.localeCompare(str2));


//see when we get 1, its little confusing.
let str1="hello js";
let str2="hello java";
console.log(str1.localeCompare(str2));
