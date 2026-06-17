//>>scope
//let  is block scope
{
    let xy=10
    console.log(xy)
}
// console.log(xy) /Error xy is not defined

//var is function scope
function test() {
    var yx=25
    console.log(yx)
}
test()
//console.log(yx)//Error yx is not defined

function demo() {
    if (true) {
        var a=10
        let b=20
        const c=10
    }
    console.log(a)
    // console.log(b) // Error b is not defined
    // console.log(c) //c is not defined
}
demo()

//const is block scope
{
    let yz=100
    console.log(yz)
}
//console.log(yz)//Error yz is not defined

//Global scope
var a=10
let b=20
const c=30
function hello(){
    console.log(a)
    console.log(b)
    console.log(c)
}
hello()
console.log(a)
console.log(b)
console.log(c)


