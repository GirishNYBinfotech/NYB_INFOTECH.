//Event capturing
let a=document.getElementById('child')
let a1=function af(){
    console.log("outer child")
}
a.addEventListener("click",a1,true)

let b=document.getElementById("parent1")
function a1f(){
    console.log("outer parent1")
}
b.addEventListener("click",a1f,true)

let c=document.getElementById("child1")
function bf() {
    console.log("inner child1")
}
c.addEventListener("click",bf,true)

let d=document.getElementById("child2")
function df(){
    console.log("inner child2")
}
d.addEventListener("click",df,true)

let e=document.getElementById("parent2")
function ef(){
    console.log("inner parent2")
}
e.addEventListener("click",ef,true)