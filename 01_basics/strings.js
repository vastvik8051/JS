// modern way of wrinting strings

const name = "Vastvik"
const age = 20
// use dollar sign ($) to write variables inside strings with curly braces ({})
console.log(`Hellow my Nmame is ${name} and i am ${age} years old.`) // using backSlash = (``) to write string instead of quotes = ("") or ('')

// anoter way to declare strings
const gameName = new String("Hitman") // using string as an object
console.log(gameName)
console.log(typeof gameName) // typeof will return object because we are using String as an object
// accessing the string keyLogs. use [] to access the spefic character in string
console.log(gameName[0]) // natrually 0 = H.
console.log(gameName.length) // accesing the length of the string value
console.log(gameName.toUpperCase) // converting the string to upper case. this does not change the orignal value
console.log(gameName.indexOf("a")) //finding the character position in string.

// slicing string
const newString = gameName.substring(0, 3) // slicing the string from 0 to 3
console.log(newString) // this will return the values  in gameName from 0 to 3, which is "Hit"

const anotherString = gameName.slice(-5, 2) // in this you can put negative values to slice the string from the end
console.log(anotherString)

// remove extra sapces in string
const gameOne = "    GTA V    " // this string has extra spaces
console.log(gameOne) // this will pring all the spaces that we do not want.
console.log(gameOne.trim()) // this will remove the extra spaces in the string. trim() is used to remove extra spaces from the start and end of the string.

// using replace in string
const url = "https://vastviksharmaa8938javascript.com"
console.log(url)
console.log(url.replace("8938", "_")) // this will replace the targated value

// finding keyWords in string
console.log(url.includes("javascript")) // if the keyword is found the return will be true, else it will be false.