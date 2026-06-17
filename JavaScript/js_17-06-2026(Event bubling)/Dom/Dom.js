//Event bubbling

let a=document.getElementById("child")
function action(){
    console.log("child element")
}
a.addEventListener("click",action)


// let a1=document.getElementById("div1")
// function hello(){
//     console.group("parent element")
// }
// a1.addEventListener("click",hello)

//Event capturing
let b=document.getElementById("child1")
function hai(){
    console.log("child bubbling")
}
b.addEventListener("click",hai,true)

let b1=document.getElementById("div1")
function hai1(){
    console.log("parent bubbling")
}
b1.addEventListener("click",hai1,true)


//Event deligation
let c=document.getElementById("list")
function hai2(){
    console.log("deligation")
}
c.addEventListener("click",hai2)

