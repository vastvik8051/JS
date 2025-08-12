console.log(2<3);
console.log(2>=3);
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2"> 1);
console.log("2" == 1);

// comparing null
console.log(null==1);
console.log(null>=1);
console.log(null<=1);
// javaScript treats null as 0 in comparisons, that is why "null<=1" is true but rest value is false

// comparing undefined
console.log(undefined==1);
console.log(undefined>=1);
console.log(undefined<=1);
console.log(undefined==null); // undefined and null are only shown as true in terminal when compared with loose equal "==" but if they are compared with strict equal "===" it will return false in  terminal
console.log(undefined==0)

// strict check example
console.log("2"==2) // this is loose check, it will only check the value. return will be true
console.log("2"===2) // this is strict check, it will check the value and dataType. retun will be false because their dataTypes are diffrent (string and number)
