//output methods

console.log("hello world")
//alert("welocome")


document.write("welcome to webpage")

//prompt

// var d=prompt("eneter the location")
// console.log(d)
var value=prompt("eneter the value")
// let p=parseInt(value)
// console.log(typeof(p))

let o=parseFloat(value)
console.log(typeof(o))

let u=value.toString()
console.log(typeof(u))


let a=document.getElementById("output")
let b=document.getElementById("outcome")
console.log(a)
console.log(b)


//BOM

console.log(screen.height)
console.log(screen.width)

console.log(location.href)
console.log(location.hostname)

console.log(navigator.userAgent)
console.log(navigator.language)


let c=10.18746
console.log(c)
console.log(c.toFixed(1))