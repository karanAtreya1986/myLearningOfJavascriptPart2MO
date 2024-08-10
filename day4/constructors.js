class employee{

    constructor(name, tech, location){
        this.name=name
        this.tech=tech
        this.location=location
    }

    getemployeedetails(){
        console.log(`employee name is ${this.name}, tech is ${this.tech}, location is ${this.location}, email is ${this.email}`)
    }

    //setting properties on the fly
    setemail(email){
        this.email=email
}
}

let e1=new employee(); //constructor expects parameters but we are not passing
// e1.getemployeedetails()




// let e2=new employee("jacky", "tester", "usa")
// e2.setemail("jacky@jacky.com")
// e2.getemployeedetails()


// //dont pass email
let e2=new employee("jacky", "tester", "usa")
e2.getemployeedetails()