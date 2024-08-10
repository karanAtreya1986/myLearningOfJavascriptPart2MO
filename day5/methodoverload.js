class employee{
    constructor(name, tech, location){
        this.name=name
        this.tech=tech
        this.location=location
    }

    getemployeedetails(name){
        console.log(name)
    }

    getemployeedetails(name, age){
        console.log(name, age)
    }

    getemployeedetails(name, tech, age){
        console.log(name, tech, age)
    }
}

//recent most method is taken and not the first method.
let e1=new employee("tata", "java", "usa");
e1.getemployeedetails()
e1.getemployeedetails("karan")
