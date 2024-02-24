 // Primitve  Datatypes

//7 types: String, Number, Boolean, Null, undefined, Symbol, Bigint

// JS is Dynamically Typed language
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutSideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 34567884546874n


// Refernce (Non primitive)

// Array , Objects, functions

//If you want to master JS learn Object and browser events in depth

const heros = ["Shaktiman", "Naagraj" ,"Doga"]
let myObj = {
    name : "Prajakta",
    age  : 22,
} //Object Creation

const myFunction = function(){
    console.log("Hello world");
}  //function declaration

console.log(typeof myObj);