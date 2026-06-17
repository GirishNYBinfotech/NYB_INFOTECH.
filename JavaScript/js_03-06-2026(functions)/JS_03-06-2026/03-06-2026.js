//1.function decleration
function hai() {
    console.log("Hello World")
}
hai()

//2.function expression
//named function
let a=function hello(){
    console.log("hello")
}
a()

//arrow function
const sub=(a, b)=>{
    return a-b
}
console.log(sub(20,5))

//anonymous function
let mul = function(a,b){
    return a*b
}
console.log(mul(5,4))

//recursive function
function num(n){
    if (n>5){
        return
    }
    console.log(n)
    num(n+1)
}
num(1)