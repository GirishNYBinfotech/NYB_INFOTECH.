//Ternary Operator:
let number = -5;
 (number >= 0) ? console.log("Positive number") :console.log("Negative number");

 //loops
 //for loop
 for (let i = 0; i <= 5; i++) {
    console.log("total steps:", i)
}

//While loop
let a=1
let count =0
while (count<10) {
    if(a%2==0){
        console.log(a)
        count++
    }
    a+=1
}

//dowhile
do {
    console.log("Hello")
} while (false)

//for of
let fruits = ["Apple", "Mango", "Orange"]
for (let fruit of fruits) {
    console.log(fruit)
}

//for in
console.log("for in")
for (let f in fruits) {
    console.log(f)
}

//functions
function hello(){
    console.log("hai")
}
hello()
function hai(x,y){
    console.log(x+y)
    return x-y
}
console.log(hai(3,2))

//default parameters
function fun(a=2,b=3){
    console.log(a+b)
    return a*b
}
console.log(fun())

//rest parmeter
function l(a,b,c,...f){
    console.log(...f)
}
l(1,2,3,4,4,6)