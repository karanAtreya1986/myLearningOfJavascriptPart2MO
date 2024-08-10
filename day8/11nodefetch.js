let url="https://restcountries.com/v2/all"

import fetch from "node-fetch"

let fetchdata=function(){
   let response= fetch(url);
   let countries=response.json(); //we will get error here, because of sync issues.
   //before line 6 is done, js moves to line 7 and tries to convert.
   console.log(countries)
}

fetchdata()