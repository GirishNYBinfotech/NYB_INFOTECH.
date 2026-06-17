//IIFE(immediatly invoked function expression)
let a=(()=>{
    console.log("iife")
})()


let b=(function (){
    console.log("hello")
})()


var c=(function hai(){
    console.log("hii")
})()

var d=(function (name) {
    console.log("Welcome", name)
})("Girish")


let result = (function () {
    return 10+20
})()
console.log(result)