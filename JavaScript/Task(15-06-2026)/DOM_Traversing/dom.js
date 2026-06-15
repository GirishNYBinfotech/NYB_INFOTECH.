let mango=document.getElementById("mango")

// Parent
console.log("Parent:")
console.log(mango.parentElement)

// Siblings
console.log("Previous Sibling:")
console.log(mango.previousElementSibling)
console.log("Next Sibling:")
console.log(mango.nextElementSibling)

// Children
let list=document.getElementById("list")
console.log("Children:")
console.log(list.children)
console.log("First Child:")
console.log(list.firstElementChild)
console.log("Last Child:")
console.log(list.lastElementChild)

//to create a element and add 
let a=document.createElement("li")
a.innerText="pineapple"
document.getElementById("list").appendChild(a)

let b=document.createElement("h3")
b.innerText="Welcome to webpage"
document.getElementById("section").prepend(b)

let c=document.createElement("li")
c.innerText="grapes"
mango.before(c)
mango.after(c)
