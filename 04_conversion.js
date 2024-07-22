let score = "3"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// "33"=> 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanisLoggedIb = Boolean(isLoggedIn)
console.log(booleanisLoggedIb)

// 1 => true; 0 => false
// " " => false
// "Sumit" => true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



//------------------------ OPERATIONS -----------------------------
let value = 3;
let negValue = -value;
//console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);
 
let str1 = "Hello"
let str2 = " Sumit"
let str3 = (str1 + str2)
console.log(str3)

console.log("1" + 2); 
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

let gameCounter = 100;
gameCounter++;    //Post Increment
console.log(gameCounter)

++gameCounter;    // Pre Increment
console.log(gameCounter);