let url="https://restcountries.com/v2/all"

import fetch from "node-fetch"

//async is always at function level.
//await is always at individual line level where there is waiting involved.
let fetchdata= async function(){
   let response= await fetch(url);
   let countries=await response.json(); //we will get error here, because of sync issues.
   //before line 6 is done, js moves to line 7 and tries to convert.
   console.log(countries)
}

fetchdata()