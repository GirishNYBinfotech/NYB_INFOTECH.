//functions
function hello(name,age){
    console.log(`"name" ${name} "and age is" ${age}`)
}
hello("h",34)

function sub(a,b){
    return a-b
}
let output=(sub(2,4))
console.log(output)

//function decleration
const greet = function() {
  console.log("Hello")
}

greet()
//function expression
//named function
let h=function named() {
  console.log("Hello")
}
h()
//anonmus function
let g=function(){
  console.log("hi")
}
g()
//arrow function
const arrow = () => {
  console.log("Hello")
}
arrow()


// varying parameters and arguments
function vary(a,b,c,...f){
    console.log(a,b,c,...f)
    console.log(arguments)
    console.log(f)
}
vary(1,undefined,null,4,5,6,7,8)

//recursive function
let value=0
let a=function rec(b){
  if(b==0){
    return 0
  }
  return b+rec(b-1)
}
console.log(a(20))

//Function currying
function y(){
  return function(x){
    console.log("function2",x,y)
    return "finished"
  }
}
var c=y(10)(20)
console.log(c)

//getting the random numbers
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log(getRandomNumber());

//this keyword
function hello(){
  console.log(this)
}
hello()

let arr = () =>{
  console.log(this)
}
arr()

let obj={
  name: "girish",
  hello1: ()=>{
    console.log(this)
  },
  hello(){
    console.log(this)
  }
}
console.log(obj.hello)
console.log(obj.hello1)

//call()
function hi(a,b){
  console.log(this)
  console.log(a,b)
}
hi.call(obj,5,6)
//apply
hi.apply(obj,[34,32])
//bind
hi.bind(obj,12,30)()
//using arrow function
let x = (a,b)=>{
  console.log("this",a,b)
}
x.call(x,10,20)
x.apply(x,[5,6])
x.bind(x,5,7)()

//call back functions
// function hai(s) {
//     console.log(s)
// }
// function hello(a,b,C) {
//     console.log("executed")
//     C(a+b)
// }
// hello(1, 2, hai)