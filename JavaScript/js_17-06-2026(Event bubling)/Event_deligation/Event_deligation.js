//Event deligation
let a=document.getElementById("list1")
function af(){
    console.log("list clicked")
}
a.addEventListener("click",af)

let b=document.getElementById("list2")
function bf(){
    console.log("unordered list")
}
b.addEventListener("click",function(e){
        console.log(e.target.innerText)
    })

let c=document.getElementById("greeting")
function cf(){
    console.log("printing")
}
c.addEventListener("click",function(x){
    console.log(x.target.innerText)
})

const list = document.getElementById("list")
const addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent = "New Item"
    list.appendChild(li)
})
list.addEventListener("click", function (e) {
    if (e.target.tagName==="LI"){
        alert(e.target.textContent)
    }
})
