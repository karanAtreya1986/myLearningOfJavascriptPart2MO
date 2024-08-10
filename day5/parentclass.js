class employee{
    constructor(name, tech, location){
        this.name=name
        this.tech=tech
        this.location=location
    }

    getemployeedetails(){
        console.log(`employee name ${this.name}, tech is ${this.tech}, and location is ${this.location}`)
    }
}

class hr extends employee{

    // //child class has simple constructor
    // constructor(){
    //     console.log("child class constructor")
    // }

    //to solve above constructors reference error, use super()
     constructor(){
        super()
        console.log("child class constructor")
    }

        approveleave(){
        console.log(`leave approved`)
    }
}

let h1=new hr();
h1.getemployeedetails()
