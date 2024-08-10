class employee{

    constructor(name, tech, location){
        this.name=name;
        this.tech=tech
        this.location=location
    }

    getemployeedetails(){
        console.log(`name is ${this.name} and tech is ${this.tech} and location is ${this.location}`)
    }
}


let e1=new employee("arjun", "java", "poland")
let e2=new employee("tiger", "developer", "britain")


//export instance objects of the classes.
export{e1,e2}
