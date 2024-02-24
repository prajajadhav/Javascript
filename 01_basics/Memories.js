// stack (Primitive) memory and heap (Non-Primitive) memory
// WHen we used stack memory we get a copy of a variable
// When we used heap memory we get a reference of the original value


let myChannelname = "Prajakta'sWorlddotcom "
//let anotherName = myChannelname

let anotherName = "PrajusChannel"
console.log(myChannelname);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Praju@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//If we changes anything in the heap memory it will updates it gives you only the refernce not the copy


