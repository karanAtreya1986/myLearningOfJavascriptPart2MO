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



// export {employee}



/**
 * no brackets around class name results in error.
 */
// export employee