let emp=require("./olderexport.js")

// let e1=new employee("Sampat", "tech guru", "germany")
// let e2=new employee("Johnson", "master", "philly")


//the object name should be same as the one mentioned in require for the code to work.
let e1=new emp("Sampat", "tech guru", "germany")
let e2=new emp("Johnson", "master", "philly")

e1.getemployeedetails();
e2.getemployeedetails();