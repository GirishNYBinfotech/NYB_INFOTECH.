//getElementByID()
let h2=document.getElementById("h2")
console.log(h2)

let h22=document.getElementById("h2tag")
console.log(h22)

//getElementByClassname()

let boxes=document.getElementsByClassName("box")
console.log(boxes)

//getElementByTagName()
let par=document.getElementsByTagName("h4")
console.log(par[0])

let h=document.getElementsByTagName("h3")
console.log(h[0])

//queryselector
let q=document.querySelector("h1")
console.log(q)

let q1=document.querySelector("#h2")
console.log(q1)

let c=document.querySelector(".box")
console.log(c)


//querySelectorAll
let s=document.querySelectorAll(".h2")
console.log(s)

let s1=document.querySelectorAll(".box")
console.log(s1)

//read and modify
//reading dom properties
let text=document.getElementById("demo").textContent
console.log(text)

//modifying the text in dom
document.getElementById("demo").textContent="Welcome"

// adding new line in html
document.getElementById("demo").innerHTML="<h2>New Heading</h2>"

//for changing id in dom
let i=document.getElementById("title").id
console.log(i)
document.getElementById("title").id="newTitle"

//for updating ad exiting line
document.getElementById("newtitle").innerText="new title"

//for changing class name in dom
let cls=document.getElementById("newtitle").className
console.log(cls)
document.getElementById("newtitle").className="mainHeading"

//to change the link 
console.log(document.getElementById("link").href)
document.getElementById("link").href="https://google.com"

//to remove element from dom
document.getElementById("h1tag").remove()

//to change the colour
let value=document.getElementById("text").style.color
console.log(value)

//for the checkbox
let value1=document.getElementById("check").checked
console.log(value1)

//for reading the element
let value2=document.getElementById("demo").title
console.log(value2)
