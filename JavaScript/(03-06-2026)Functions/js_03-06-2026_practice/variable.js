//>>re-declearation
//var redecleration is allowed
var a=10
console.log(a)
var a=20
console.log(a)

//const redecleration not allowed
// const b=10
// console.log(b)
// const b=20
// console.log(b)

//let redecleration not allowed
// let b=10
// console.log(b)
// let b=30
// console.log(b)

//>>initialize
//let initialization is not required
let i
console.log(i)

//var initialization is not required
var x
console.log(x)

//const must initialization is not required
// const y
// console.log(y)

//>>reassignment 
//let reassignment is allowed
let z=10
console.log(z)
z=200
console.log(z)

//var reassignment is allowed
var p=20
console.log(p)
p=30
console.log(p)

//const ressignment is not allowed
// const ca=100
// console.log(ca)
// ca=20
// console.log(ca)


//>>scope
//let  is block scope
{
    let xy=10
    console.log(xy)
}
// console.log(xy)

//var is function scope
function test() {
    var yx=25
    console.log(yx)
}
test()

//const is block scope
{
    let yz=100
    console.log(yz)
}
//console.log(yz)

//>>hosting
//it cannot host the variable it throws error(Cannot access)
// console.log(h)
// let h=10
// console.log(h)

//it will dislay as undefined
console.log(g)
var g=10
console.log(g)

//it cannot host the variable it throws error(Cannot access)
// console.log(h)
// const h=10
// console.log(h)

//function hosting
//function decleration
//succesfully hosted the hai function
console.log(hai())
function hai() {
  return "Hello"
}

//function expression
//it throw error (sayHi is not a function)
// hi()
// var hi=function(){
//   console.log("Hi");
// }

//arrow function
//it will also throw the error (Cannot access 'hello')
// hello()
// const hello=()=>{
//   console.log("Hello")
// }

//named function
//it will also throw the error (Cannot access 'hello')
// hello()
// let hello=function hi(){
//     console.log("hello,hi")
// } 