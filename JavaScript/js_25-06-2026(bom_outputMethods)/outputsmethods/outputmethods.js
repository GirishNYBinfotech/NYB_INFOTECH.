//output methods
console.log("hai")
// alert("enter the text")

// let a=prompt("enter your name")
// console.log(a)

document.write("write hello")


let c=document.getElementById("hello").innerHTML="<b>world</b>"
console.log(c)

let c1=document.getElementById("wel").innerText="thank you"
console.log(c1)

let c2=document.getAnimations("old").textContent="old"
console.log(c2)

let students=[
  {name: "king", age: 20},
  {name: "queen", age: 22}
]
console.table(students)
console.log(students)

console.error("error intiated")
console.warn("low power")

