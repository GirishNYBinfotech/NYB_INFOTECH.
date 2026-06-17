//Functions
function hello(a,b){
    console.log(a*b)
}
hello(2,4)

function fruits([]) {
    console.log(["apple","mango"])
}
fruits([])


//default parameter
function greet(name="") {
    console.log("Hello " + name)
}
greet()
greet("Girish")


function printItems(items=[]) {
    return items
}
console.log(printItems(["Pen", "Book"]))

function test(a=100) {
    console.log(a)
}
test()        
test(undefined)
test(null)
test(50)

function add(a = 0, b = 0) {
    return a + b
}
console.log(add())
console.log(add(10, 5))

function countArgs() {
    console.log("Number of arguments:", arguments.length)
}
countArgs(1, 2, 3)
countArgs("a", "b")

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
let arguments =sum(10, 20, 30, 40)
console.log(arguments)

function practice(a=2,b=3,c=4){
    console.log(a,b,c)
}
practice("hai",[1],true)
practice(1,null,undefined)

//rest parameter
function arr(...a) {
    console.log(a)
}
arr(4,23,5,6)

function add(w,...d){
    return d
}
console.log(add(1,2,2,2,2,3))

function h(z=12,s=12,t=100){
    console.log(z,s,t)
}
h(1,2,4)

function prac(...f){
    console.log(...f)
}
prac(10,null,"hai",[3],undefined,true,false)