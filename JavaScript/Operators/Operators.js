i=10
x=4
//Arthematic operator(+,-,*,/,%,++,--,**)
console.log(i/x) //returs coecient
console.log(i%x) //returns reminder

//increment operator
//preincrement(++a)
//postincrement(a++)
console.log(i)//10
console.log(i++)//11
console.log(++i)//11
console.log(i)//12
//decrement operator
//predecrement(++a)
//postdecrement(a++)
console.log(i)//12
console.log(i--)//11
console.log(--i)//11
console.log(i)//10

console.log(i**x)//**for exponential

// Assignment operator
var A=20
var B=30
B+=A
console.log(B)
B-=A
console.log(B)
B*=A
console.log(B)
B/=A
console.log(B)

//comparision operator
let a=20
var b="20"
console.log("greaterthan",a>b)
console.log("lessthan",a<b)
console.log("greaterthan or equal",a>=b)
console.log("lessthan or equal",a<=b)
console.log("loss equality",a==b)
console.log("strict equality",a===b)
console.log("loss inequality",a!=b)
console.log("strict inequality",a!==b)

//LOgical operators
//And(&&)
console.log((8>10) && (10<8))
//or(||)
console.log((8>10) || (8<10))
//not(!)
console.log(!(8>10))

//Bitwise
//bitwiseAND(&)
let f = 5 // 101
let g = 3 // 011
 

//ternary -? :
//condition? true:false
let cost=500
cost>500?console.log("buyable"):console.log("notbuyable")

//typeof
let e = "100"
console.log(typeof(e),"type")

//concate
let first="hi"
let last="hello"
console.log(first+" "+last)

//template litrels
console.log(`i am ${first} going to trip`)