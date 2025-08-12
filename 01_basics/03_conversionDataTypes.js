let score = "33"
console.log(typeof score);
console.log(typeof (score));

// changing string into number now.

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* results after conversion
string
string
number
33
*/


// what if score  value was "33abc" would this be shown as a number?

let scoreOne = "33abc";
console.log(typeof scoreOne);
console.log(typeof (scoreOne));
let valueInNumberOne = Number(scoreOne);
console.log(typeof valueInNumberOne);
console.log(valueInNumberOne);
// "33abc" is not a valid number, so the result will be NaN
// NaN stands for Not a Number
// using scoreOne because value of score has already been set

// what is the value was null?
let scoreTwo = null;
console.log(typeof scoreTwo);
console.log(typeof (scoreTwo));
let valueInNumberTwo = Number(scoreTwo);
console.log(typeof valueInNumberTwo);
console.log(valueInNumberTwo);
// when null is converted to a number, it becomes 0
// if the value null is written in string fromat, the outcome will be NaN

let scoreThree = undefined;
console.log(typeof scoreThree);
console.log(typeof (scoreThree));
let valueInNumberThree = Number(scoreThree);
console.log(typeof valueInNumberThree);
console.log(valueInNumberThree);
// output will be NaN

//what is we use boolean values "true"?
let scoreFore = true
console.log(typeof scoreFore)
console.log(typeof (scoreFore))
let ValueInNumberFore = Number(scoreFore)
console.log(typeof ValueInNumberFore)
console.log(ValueInNumberFore)
// output is 1
// for value false, the output will be 0 this is boolean to number conversion

// is there is a conversion for a unconvertable value, the value will be NaN, for example "Vastvik" can not be converted into a number
// example code
let scoreFive = "Vastvik"
console.log(typeof scoreFive)
console.log(typeof (scoreFive))
let ValueInNumberFive = Number(scoreFive)
console.log(typeof ValueInNumberFive)
console.log(ValueInNumberFive)
// output will be NaN   


// number to boolean conversion
// 0 is false, all other numbers are true
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(typeof (isLoggedIn))
let ValueisLoggedIn = Boolean(true)
console.log(typeof ValueisLoggedIn)
console.log(ValueisLoggedIn)
// output will be boolean "true" because 1 is a truthy value

// what if the value is 0?      
let IsLoggedOut = 0
let booleanIsLoggedOut = Boolean(IsLoggedOut)
console.log(typeof IsLoggedOut)
console.log(typeof (IsLoggedOut))
let ValueIsLoggedOut = Boolean(false)
console.log(typeof ValueIsLoggedOut)
console.log(ValueIsLoggedOut)
// output will be boolean "false" because 0 is a falsy value

// converting empty string to boolean
let IsLoggedOut1 = ""
let booleanIsLoggedOut1 = Boolean(IsLoggedOut1)
console.log(typeof IsLoggedOut1)
console.log(typeof (IsLoggedOut1))
let ValueIsLoggedOut1 = Boolean(false)
console.log(typeof ValueIsLoggedOut1)
console.log(ValueIsLoggedOut1)
// output will be boolean "false" because empty string is a falsy value

// converting name to boolean
let IsLoggedIn2 = "Vastvik"
let booleanIsLoggedIn2 = Boolean(IsLoggedIn2)
console.log(booleanIsLoggedIn2);
// output will be boolean "true" because non-empty string is a truthy value

// converting number into string
let thisNumber = 10
let stringNumber = String(thisNumber)
console.log(typeof stringNumber)
console.log(thisNumber)
// output will be string "10" because the number is converted to a string