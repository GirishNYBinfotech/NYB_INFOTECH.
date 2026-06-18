//Throttling
//clicking
let a1=0
let lastClick=0
let a=document.getElementById("btn")
a.addEventListener("click",function(){
    let current=Date.now()
    if (current-lastClick>3000){
        a1++
        console.log("a1 Count:",a1)
        lastClick = current
    }
    console.log("Button clicked")
})

//mouse moves
let lastMove=0
document.addEventListener("mousemove", function () {
    let current=Date.now()
    if (current-lastMove>2000){
        console.log("Mouse Moving")
        lastMove=current
    }
})

//input
let lastInput=0
let b=document.getElementById("txt")

b.addEventListener("input",function(){
    let current=Date.now()
    if (current-lastInput>1000) {
        console.log(b.value)
        lastInput=current
    }
})
