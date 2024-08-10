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

    //constructor will mention all variables which are needed for parent class
    //constructor will also have its own variables
    constructor(name, tech, location, numberofleaves){
        super(name, tech, location) //super is for calling parent class constructor and pass parameters if any
        this.numberofleaves=numberofleaves // this is to initialise the child class variables.
    }

        approveleave(){
        console.log(`leave approved for ${this.numberofleaves}`)
    }
}

let h1=new hr("tata", "dotnet", "usa", 50);
h1.getemployeedetails()
h1.approveleave()
