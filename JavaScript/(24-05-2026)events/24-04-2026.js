var a=document.getElementById("sub")
function hello(){
    console.log("inner element")
}
a.addEventListener("click",hello)

var b=document.getElementById("main")
function hai(){
    console.log("outer text")
}
b.addEventListener("click",hai)



//Event bubbling
console.log("Event Bubbling")
var element1=document.getElementById("child")
function innerelement(){
    console.log("inner text h1")

}
element1.addEventListener("click",innerelement)

var element2=document.getElementById("parent")
function outer(){
    console.log("outer text h1")

}
element2.addEventListener("click",outter)


//Event capturing
console.log("Event Capturing")
var element3 = document.getElementById("child")
function innerelement1(){
    console.log("child element captured")
}
element3.addEventListener("click",innerelement1,true)

var element4=document.getElementById("parent")
function outer1(){
    console.log("parent outer element captured")
}
element4.addEventListener("click",outer1,true)

//Event Delegation
var c=document.getElementById("list")
function Delegation(){
    console.log("Event Delegation")
}
c.addEventListener("click",function(l){
    console.log(l.target.innerText)
})

