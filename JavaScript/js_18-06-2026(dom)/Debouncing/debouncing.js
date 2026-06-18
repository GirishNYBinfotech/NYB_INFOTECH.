//debounching
let a1
let a=document.getElementById("btn")
a.addEventListener("dblclick",function(){
    clearTimeout(a1)
    a1=setTimeout(()=>{
        console.log("triggring after 2 seconds when clicked")
    },2000)
})

//input
let b1
let b=document.getElementById("input")
b.addEventListener("input",function(){
    clearTimeout(b1)
    b1=setTimeout(()=>{
        console.log("printed:",this.value)
    },2000)
})

//printing the array after given time
let t
let c=document.getElementById("btn1")
c.addEventListener("click",()=>{
    clearTimeout(t)
    t=setTimeout(()=>{
        let arr=[10,20,30,40]
        for(let value of arr){
            console.log(value)
        }
    },3000)
})

