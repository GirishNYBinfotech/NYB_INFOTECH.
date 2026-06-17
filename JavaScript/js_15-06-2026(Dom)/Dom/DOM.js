//Dom traversing
//geting parent element by using child
let a=document.getElementById("web")
console.log(a)
let parent=a.parentElement
console.log(parent)

//getting child element by parent element
let b=document.getElementById("section2")
console.log(b)
let child=b.children
console.log(child)

//for gettibg the first child by parent
let b1=document.getElementById("section2")
console.log(b1)
console.log(b1.firstElementChild)
console.log(b1.lastChild)

//for getting last child
let lastchild=b.lastElementChild
console.log(lastchild)
console.log(b.lastChild)

//getting the nextelementsiblings
let c=document.getElementById("h2")
console.log(c)
let sibling=c.nextElementSibling//To get the next element sibling 
console.log(sibling)

//get the previous sibling element
let c1=document.getElementById("h2")
console.log(c1)
let sibling1=c1.previousElementSibling
console.group(sibling1)

//for creating a element
let d=document.createElement("p")
d.innerText="hai hello"
console.log(d)

//to display in UI or to add as child element at last
parent.appendChild(d)

//to add at first child element
parent.prepend(d)

//to add a element before a element
let e1=document.getElementById("h3")
d.before(e1)

//to add a element after a element
d.after(e1)

//to remove a element
let f=document.createElement("h1")
f.innerText="removing item"
parent.appendChild(f)
console.log(f)
// b.removeChild(b.lastElementChild)
// b.removeChild(b.firstElementChild)

//eventlistners
let g=document.getElementById("12")

function event(){
    alert("name changed")
    g.innerText="number changed"
}
document.addEventListener("click",event)

