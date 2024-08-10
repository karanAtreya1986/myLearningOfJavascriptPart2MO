let url="https://restcountries.com/v2/all"

import fetch from "node-fetch"
let fetchdata=function(){
    try{
        let response=  fetch(url);
        let countries= response.json(); 
        console.log(countries)
     }
     catch(err){
        console.log("No api response please ," + err.message);
    }   
}




fetchdata()