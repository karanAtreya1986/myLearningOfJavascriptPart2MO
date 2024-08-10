class employee{

    constructor(name, tech, location){
        this.name=name
        this.tech=tech
        this.location=location
    }

    // constructor(age){
    //     this.age=age
    // }

    //getters use get keyword if you want to, or normal name also works.
    get employeedetails(){
        console.log(`employee name is ${this.name}, tech is ${this.tech}, location is ${this.location}, email is ${this.email}`)
    }

     //setters use set keyword or normal name also works if you want to.
    set emaildetails(email){
            this.email=email
    }
}

//how to set values using setters directly.
//see for getting values, we dont have to use (), because we have used get and set keywords
//now getters and setters are properties
let e1=new employee("test", "developer", "usa")
e1.emaildetails="test@test.com"
e1.employeedetails