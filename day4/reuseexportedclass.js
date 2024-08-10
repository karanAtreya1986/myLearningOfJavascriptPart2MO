import { employee } from "./classexport.js"; //giving extension is mandatory else it will give error

let e1=new employee("Sampat", "tech guru", "germany")
let e2=new employee("Johnson", "master", "philly")

e1.getemployeedetails();
e2.getemployeedetails();


/**
 * no extension provided in import statement
 */
// import { employee } from "./classexport"; //giving extension is mandatory else it will give error

// let e1=new employee("Sampat", "tech guru", "germany")
// let e2=new employee("Johnson", "master", "philly")

// e1.getemployeedetails();
// e2.getemployeedetails();
