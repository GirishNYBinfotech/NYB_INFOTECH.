//synchronous to asynchronous
//setTimeout
console.log("one")
setTimeout(()=>{
console.log("two")
},2000)
console.log("three")

//setInterval
var x=setInterval(()=>{
 console.log("interval")
 },2000)

//clearinterval
setTimeout(()=>{
clearInterval(x)
},5000)

//cleartimeout
function sayHello() {
  console.log("Hello!")
}
let timer = setTimeout(sayHello, 3000)
clearTimeout(timer)

//To print the hello world 2 times
let count=0
var a=setInterval(()=>{
  console.log("hello world")
  count++
  if (count===2)
    clearInterval(a)
},4000)

  


