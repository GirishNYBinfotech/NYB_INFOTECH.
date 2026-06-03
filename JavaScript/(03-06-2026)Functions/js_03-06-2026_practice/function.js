//Function decleration
//postive or negitive
function checkNumber(num) {
    if (num>0) {
        return "Positive"
    } else if (num<0) {
        return "Negative"
    } else {
        return "Zero"
    }
}

//squres
function square(num) {
    return num*num
}
console.log(square(6))

//even or odd
function evenodd(num) {
    if (num%2===0) {
        return "Even"
    }
    return "Odd"
}
console.log(evenodd(8))
console.log(evenodd(7))

//adding
function arraySum(arr) {
    let sum=0
    for (let num of arr) {
        sum +=num
    }
    return sum
}
console.log(arraySum([10,20,30,40]))

//function expression
//>>named functions
//no.of charaters
let Char=function getLength(str) {
    return str.length
}
console.log(Char("JavaScript"))

//vote isEligibulity
let vote= function isEligible(age) {
    return age>=18?"Eligible to Vote":"Not Eligible to vote"
}
console.log(vote(20))
console.log(vote(15))

//password length
let P=function checkPassword(password) {
    return password.length>=8
}
console.log(P("admin123"))

//>>arrow function
const add=(a,b)=>a+b
console.log(add(5,15))

//even/odd
let checkEvenOdd=num=>
    num%2===0?"Even":"Odd"
console.log(checkEvenOdd(8))
console.log(checkEvenOdd(7))

//largestnumber
const largest=(a,b)=>(a>b?a:b)
console.log(largest(50,80))

//object with arrow function
const User=()=>({
    name:"Girish",age:25
})
console.log(User())

//postive/negitive
const Number=num=>{
    if (num>0) 
        return "Positive"
    if (num<0)
        return "Negative"
    return "Zero"
}
console.log(Number(-5))

///>>anonymous function
let add1= function(a,b) {
    return a+b
}
console.log(add1(10, 20))

let sub1=function(x,y){
    console.log(x)
}

//Recursive function
//factorial
function factorial(n) {
  if (n===0) {
    return 1
  }
  return n*factorial(n-1)
}
console.log(factorial(5))

//fibonacci
function fibonacci(n) {
  if(n<=1) {
    return n
  }
  return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6))

