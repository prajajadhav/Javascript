const accoundId = 1234
let accountEmail = "praju@google.com"
var accountpass = "1234sh"
accountCity = "Banaras"
let accounState

//accoundId = 2 //is not allowed 


accountEmail = "saurabh@gmaol.com"
accountCity = "Nashik"
accountpass = "1245754"

console.log(accoundId);
/*
Prefer not to use var because of issue ini block scope and functional scope
*/

console.table([accoundId, accountEmail, accountpass, accountCity, accounState])