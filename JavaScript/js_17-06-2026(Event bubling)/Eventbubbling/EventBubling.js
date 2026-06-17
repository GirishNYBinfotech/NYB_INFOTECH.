//Event bubbling

let a=document.getElementById("wel")
function af(){
    console.log("first child")
}
a.addEventListener("click",af)

let a1=document.getElementById("div1")
function a1f(){
    console.log("parent1")
}
a1.addEventListener("click",a1f)

let b=document.getElementById("div2")
function bf(){
    console.log("div child")
}
b.addEventListener("click",bf)

let c=document.getElementById("Hello")
function cf(){
    console.log("inner child2")
}
c.addEventListener("mouseover",cf)

let d=document.getElementById("hai")
let d1=function (){
    console.log("innerchild1")
}
d.addEventListener("click",d1)

let e=document.getElementById("list")
function ef(){
    console.log("list parent")
}
e.addEventListener("click",ef)

let e1=document.getElementById("first")
function e1f(){
    console.log("child list")
}
e1.addEventListener("click",e1f)