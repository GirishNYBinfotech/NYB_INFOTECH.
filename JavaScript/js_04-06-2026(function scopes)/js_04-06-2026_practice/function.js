//recursive_functions:
//sum of nuatural number
function sum(n) {
    if (n===1) {
        return 1
    }
    return n+sum(n-1)
}
console.log(sum(5))

//reverse
function reversecount(n) {
    if (n < 1) {
        return
    }
    console.log(n)
    reversecount(n - 1)
}
reversecount(5)

//pringing multiple times
function Hello(n) {
    if (n === 0) {
        return
    }
    console.log("Hello")
    Hello(n-1)
}Hello(3)

//printing even numbers
function Even(n) {
    if (n === 0) {
        return
    }
    Even(n - 1)
    if (n % 2 === 0) {
        console.log(n)
    }
}
Even(10)

//fabonaccis
function fibonacci(n) {
  if(n<=1) {
    return n
  }
  return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6))

//>>Function currying
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}
console.log(add(10)(20)(30))


function power(a){
    return function(b){
        return a**b
    }
}
console.log(power(2)(3))

//>>closure
function counter() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}
const increment = counter()
increment()
increment()
increment()


function outer() {
    let message = "Hello"
    function inner() {
        console.log(message)
    }
    return inner
}
const myFunc = outer()
myFunc()

//>>First-class function
function greeting(message) {
    return function (name) {
        console.log(message + " " + name)
    }
}
const welcome = greeting("Welcome")
welcome("Girish")

//Passing Functions as Arguments
function g(name) {
    return "Hello, "+name
}
function process(callback) {
    console.log(callback("Girish"))
}
process(g)

//Returning Functions from Other Functions
function multiplier(factor) {
    return function(number) {
        return number * factor
    }
}
const double = multiplier(2)
console.log(double(5))

//>>pure function
function a(a,b){
    return a+b
}
console.log(a(2,3))


function square(num) {
    return num *num
}
console.log(square(4))

//price calculation
function Total(price, quantity) {
    return price * quantity
}
console.log(Total(100, 2))

//>>impure function
function showTime() {
    return new Date().getSeconds()
}
console.log(showTime())


let count = 0
function inc() {
    count++
    return count
}
console.log(inc())
console.log(inc())

//price claculation
var  tax = 10
function calculateTotal(price) {
    return price + tax
}
console.log(calculateTotal(100))