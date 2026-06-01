//Function Declaration
//A simple function that displays a welcome message.
function welcomeMessage() {
    console.log("JavaScript Loops and Functions")
}
welcomeMessage()

//for Loop
//Used when the number of iterations is known.
function ForLoop() {
    console.log("for Loop:")
    for (var i = 1; i <= 5; i++) {
        console.log("Iteration:", i)
    }
}
ForLoop()

//while Loop
//Executes as long as the condition remains true.
function WhileLoop() {
    console.log("while Loop:")
    var count = 1
    while (count <= 5) {
        console.log("Count:", count)
        count++
    }
}
WhileLoop()

//do...while Loop
//Executes at least once before checking the condition.
function DoWhileLoop() {
    console.log("do...while Loop:")
    var number = 1
    do {
        console.log("Number:", number)
        number++
    } while (number <= 5)
}
DoWhileLoop()

//for...in Loop
//Used to iterate through object properties.
function ForInLoop() {
    console.log("for...in Loop:")
    var student = {
        id: 101,
        name: "Girish",
        course: "JavaScript"
    }
    for (var key in student) {
        console.log(key + " : " + student[key])
    }
}
ForInLoop()

//for...of Loop
//Used to iterate through iterable objects like arrays.
function ForOfLoop() {
    console.log("for...of Loop:")
    var technologies = ["HTML","JavaScript","CSS"]
    for (var tech of technologies) {
        console.log(tech)
    }
}
ForOfLoop()

//Function with Parameters
//This function accepts two numbers and displays them.
function displayNumbers(num1, num2) {
    console.log("Function with Parameters:")
    console.log("First Number :", num1)
    console.log("Second Number:", num2)
}
displayNumbers(10, 20)

//Function with Return Value
//This function returns the sum of two numbers.
function addNumbers(a, b) {
    return a + b
}
var result = addNumbers(15, 25)
console.log("Function with Return Value:")
console.log("Sum =", result)

//default parameter
//in parameter values will be decleared but we can over write them by giving the arguments
 function Default(a=10,b=20){
    console.log(a,b)
 }
 console.log("default parameters")
 Default()
 Default(null,"hai")
Default(["apple"],true)

//Rest Function
//The rest parameter (...) collects multiple argumentsinto a single array.
function calculateTotal(...numbers) {
    var total = 0
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}
console.log("Rest Function:")
console.log("Total =", calculateTotal(10, 20, 30, 40, 50))

//Fibonacci series
//A Fibonacci series is a sequence of numbers where each number is the sum of the two preceding numbers.
//formula:f=f(n-1)+f(n-2)
function fibonacci(n) {
    var first=0
    var second=1
    var next
    console.log(first)
    console.log(second)
    for (var i=3;i<=n;i++) {
        next = first + second
        console.log(next)
        first=second
        second=next
    }
}
fibonacci(7)

//Natural numbers
function Naturalnumbers(){
    for(let i=0;i<=5;i++){
        console.log(i)
    }
}
Naturalnumbers()
