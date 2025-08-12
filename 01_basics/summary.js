/* 
Primitive data types - 7types
String, Boolean, Number, Null, Undefined, Symbol, BigInt

Reference (Non-primitive) date types -
Object, Array, Function
*/

// String ""
const score = "100"
console.log(score)
console.log(typeof score)

// Number 123, 12.34
const score1 = 10
console.log(score1)
console.log(typeof score1)

// Boolean = true/false0
//true return
const IsLoggedIn = 1
let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(IsLoggedIn)
console.log(BooleanIsLoggedIn)
console.log(typeof BooleanIsLoggedIn)

// false return
const IsLoggedOut = 0
let BooleanIsLoggedOut = Boolean(IsLoggedOut)
console.log(IsLoggedOut)
console.log(BooleanIsLoggedOut)
console.log(typeof BooleanIsLoggedOut)

// null = a specified value that is empty
const hehe = null
let ValueInNumber = Number(hehe) // return is 0, if ValueInNumber is removed from te code the return of type will be object
console.log(hehe)
console.log(ValueInNumber)
console.log(typeof ValueInNumber)

//undefined = a variable that has been left empty
const abcd = undefined
let ValueInNumberone = Number(abcd) // return is nan, if ValueInNumberone is removed from the code the return of type will be undefined
console.log(abcd)
console.log(ValueInNumberone) 
console.log(typeof abcd)

// Symbol = unique value