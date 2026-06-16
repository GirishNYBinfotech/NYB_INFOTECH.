//settimeout
console.log("one")
setTimeout(()=>{
    console.log("two")
},2000)
console.log("three")

let a=setTimeout(()=>{
    console.log("hello world")
},1000)

//cleartimeout
    clearTimeout(a)


let c=setTimeout(()=>{
    console.log("welcome")
})

clearTimeout(c)

setTimeout(()=>{
    console.log("hai")
},1000)

setTimeout(()=>{
    console.log("welcome to webpage")
},3000)
setTimeout(() => {
    console.log("Hello")
}, 2000)


//setinterval
let b=setInterval(()=>{
    console.log("print 2 times")
},1000)

//clearinterval
clearInterval(b)

setInterval(() => {
    console.log("print")
}, 3000)

let time=setInterval(function(){
  console.log(new Date().toLocaleTimeString())
}, 1000)
setTimeout(()=>{
    clearInterval(time)
})

let x=setInterval(function hello(){
    console.log("printing...")
},5000)
clearInterval(x)

let y=setInterval(() => {
 console.log("hai1")
}, 2000)
setTimeout(() => {
    clearInterval(y)
},4000)

let i=0
let z=setInterval(function(){
    console.log(i)
    i++
},1000)
setTimeout(() => {
    clearInterval(z)
},2000)
