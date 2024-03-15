// Variables : A variable is a container that stores a value.
// The value of JavaScript variable can be changed during the execution of a program.
// var a = 7; literal
// let a = 7, declaring variable
// where a is identifier and 7 is operator

// Rules for choosing variable names
// 1.Letters,digits,underscores and $ signs are allowed.
// 2.Must begin with a $, _ or a letter.
// 3.JavaScript reserved words cannot be used as a variable name.
// 4.Hamza & haMZa are different (case sensitive).

// Var vs let in JavaScript
// 1. var is globally scoped while let & const are block scoped.
// 2. var can be updated & re-declared within its scope.
// 3. let can be updated but not re-declared.
// 4. const can neither be updated nor be re-declared.
// 5. var variables are initialized with undefined where let and const variables are not initialized.
// 6. const must be initialized during declaration unlike let and var.

// Primitive Data Types & Objects
// There are 7 primitive datatypes in javascript.
// 1. Null  2.Number  3.String  4.Symbol  5.Boolean 6.Bigint  7.Undefined.

// Object:
// An object in javascript can be created as follows
const item = {
    name: "Led Bulb",
    price: "150"
} // name and price are keys whereas Led Bulb and 150 are values.

// Quick Quiz: Write a JavaScipt Program to store Name,Phone Number and Marks of a Student.
const Profile = {
    name: "Hamza",
    "Phone Number": "0313-0745783",
    Marks: "100/100"
}
console.log(Profile)
// Ans: { name: 'Hamza', 'Phone Number': '0313-0745783', Marks: '100/100' }

// nn ss bb u Primitives in Js
let a = null
let b = 456
let c = "Goku"
let d = Symbol("Goku has mastered Ultra Instinct")
let e = true
let f = BigInt(695) + BigInt(5)
let g = undefined // it will also remain undefined if we just write let g only.
console.log(a, b, c, d, e, f, g)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)
// Non Primitive Data Type - Objects in Js
const items = {
    "Hamza": true,
    "Usman": false,
    "Subhan": 89,
    "Anas": undefined
}
console.log(items["Hamza"])

// Chapter 1 - Practice Set
//Q1 Create a Variable of type string and try to add a number to it.
let ab = "Hamza"
let bc = 34
console.log(ab + bc) //Ans: Hamza34
//Q2 Use typeof operator to find the datatype of the string in the last question
console.log(typeof (a + b)) //Ans: String
//Q3 Create a Const Object in JavaScript Can you change it to hold a number later?
const cd = {
    name: "Harry",
    section: "A",
    isPrincipal:false   
}
//c = 78
//c = {}

//Q4 Try to add a new key to const object in Problem 3 were you able to do it?
cd['friend'] ="Usman"
cd['name'] ="Subhan"
console.log(cd)
//Q5 Write a JS Program to make word-meaning dictionary of 5 words
const dict = {
    appreciate:"recognize the full worth of.",
    ataraxia:"a state of freedom from emotional disturbance and anxiety",
    yakka:"work, especially hard work."
}
console.log(dict.yakka) // or console.log(dict['yakka']) Ans:work, especially hard work.
