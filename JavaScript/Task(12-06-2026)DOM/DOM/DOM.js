//DOM(Document object model)
//selecting DOM elements
//getElementsById()
//getElementsByClassname()
//getElementsByTagname()
//querySelector()
//querySelectorall()

console.log(document)
//getElementsById()
let h1=document.getElementById("h1")
console.log(h1)

//getElementsByClassname()
let h2=document.getElementsByClassName("h3tag")
console.log(h2)

//getElementsByTagname()
let h3=document.getElementsByTagName("h3")
console.log(h3)

//querySelector()
let h4=document.querySelector("h1")
console.log(h4)

//querySelectorAll()
let h5=document.querySelectorAll("h1")
console.log(h5)

//tochange the text in the html
document.getElementById("h1").innerText="Hai Hello"

//to add a new line in dom
document.getElementById("h3").innerHTML="<h2>hello<h2>"

//to remove the a element in dom
// document.getElementById("h3").remove()

//to change id an dom
document.getElementById("h3").id="h4"

//to change class NAME
document.getElementById("h4").className="Heading"

