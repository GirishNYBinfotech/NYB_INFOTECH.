//normal event
let a1=0
let a=document.getElementById("btn")

a.addEventListener("click",function(){
    a1+=1
    console.log("value of a1 is ",a1)
    console.log("normal button  clicked")
})

//Throttling
let b1=0
let lastclick=0
let b=document.getElementById("btn")

b.addEventListener("click",function(){
    let current=Date.now()
    if(current-lastclick>2000){
        b1+=1
        console.log("value of b1 is ",b1)
        lastclick=current
    }
    console.log("throttling button clicked")
})

//debouncing
let t
let c1=0
let c=document.getElementById("btn")
c.addEventListener("click",function(){
    clearTimeout(t)
    t=setTimeout(()=>{
        c1+=1
        console.log("value of c1",c1)
    },2000)
})