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
const id  = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)
console.log(id)
console.log(typeof id)
console.log(anotherId)
console.log(typeof anotherId)
// symbols are not equal even if they have the same description

// BigInt = large numbers
const bigNumber = 265645612121321655665303211654n // the 'n' at the end indicates a BigInt or use BigInt(yourNuber)
console.log(bigNumber)
console.log(typeof bigNumber)

//***************Reference (NonPrimitive)*************** */

//array = list of values, they are written in square brackets []
const animals = ["dog", "cat", "mouse"]
console.log(animals)
console.log(animals[0]) // access first element
console.log(animals[1]) // access second element
console.log(animals[2]) // access third element
console.log(typeof animals) // arrays are objects in JavaScript

// object = key-value pairs, they are written in curly braces {}

const person = {
    name: "vastvik",
    age: 25,
    isLoggedIn: true,
    location: "Gwalior Madhya Pradesh",
}
    console.log(person)
    // everyThing written in the object is a key-value pair

    // Function with variable
    const myFunction = function(x,y){ //function expression (standard declaration), fntion ke andar x and y are parameters, which can hold multiple values when the function is called
        let ab =x //x is assigned to ab
        let cd = y //y is assigned to cd
        return ab + " " + cd // this will return the values of ab and cd when the function is called.
    }
     // calling the function
    console.log(myFunction(1,2)) // this will return undefined because ab and cd are not defined in the function
    console.log(myFunction("vastvik", "sharma")) // this will return vastvik sharma
    console.log("will be learning about functions in detail later")

    console.table({score, score1, IsLoggedIn, BooleanIsLoggedIn, IsLoggedOut, BooleanIsLoggedOut, hehe, ValueInNumber, abcd, ValueInNumberone, id, anotherId, bigNumber, animals, person,}) // this will print the values in a table format

    /************************************************************/

    // stack (primitive), Heap(non-primitive)

    //stack memory = in stack memory the values are stored directly in the variable, when the value is changed, the original value is changed.
   let learning = "stack Memory"
   let learningAbout = "learning"
   learningAbout = "learning about stack memory and heap memory in JavaScript"
   console.log(learning)
   console.log(learningAbout)

   // Heap memory = when values are updated in heap memory, the original value is not changed, instead a new value is created in memory and the variable points to that new value.
   let user1 = {
    name: "vastvik",
    email: "vastvik@mail.com",
    age: 24,
    paymentMethod: "UPI",
   }
   console.log(user1)

   //changing values
  let  user2 = user1
  console.log(user2)

  // changing value of just user1 mail
  user1.email = "sharma@mail.com" // in objects you just just access the info by (user1.mail or user1.age etc etc..)
  console.log(user1)
  // when you change the value of user1, it will also change the value of user2 because both are pointing to the same object in memory