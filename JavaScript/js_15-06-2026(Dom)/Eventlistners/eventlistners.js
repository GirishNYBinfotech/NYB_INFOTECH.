//EventListners
//button click
let a=document.getElementById("btn")
function fun(){
    alert("button clicked")
    a.innerText="clicked"
}
a.addEventListener("click",fun)

let bc=document.getElementById("section")
function wel(){
    bc.innerText="welcome to web page"
}
bc.addEventListener("click",wel)

//mouse actions
let b=document.getElementById("hai")
function over(){
    b.innerText="mouse over"
}
b.addEventListener("mouseover",over)

let c=document.getElementById("hello")
function click(){
    c.innerText='clicked'
}
// c.addEventListener("dblclick",click)
// c.addEventListener("mouseup",click)
// c.addEventListener("mousedown",click)
// c.addEventListener("mouseenter",click)
//c.addEventListener("mouseleave",click)
//c.addEventListener("mousemove",click)
c.addEventListener("contextmenu",click)

//input
let d=document.getElementById("input")
function input(){
    console.log("input")
}
d.addEventListener("change",input)

let d1=document.getElementById("change")
function change(){
    console.group("change")
}
d.addEventListener("change",change)

let d2=document.getElementById("focus")
function fun(){
    console.log("focus")
}
d2.addEventListener("focus",fun)

let d3=document.getElementById("blur")
function bl(){
    console.log("blur")
}
d3.addEventListener("blur",bl)

let d4=document.getElementById("keydown")
function fun1(){
    console.log("keydown")
}
d4.addEventListener("keydown",fun1)

let d5=document.getElementById("keyup")
function fun2(){
    console.log("key up")
}
d5.addEventListener("keyup",fun2)

let d6=document.getElementById("keypress")
function fun3(){
    console.log("keypress")
}
d6.addEventListener("keypress",fun3)