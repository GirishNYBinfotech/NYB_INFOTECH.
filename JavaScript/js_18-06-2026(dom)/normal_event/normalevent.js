//Normal Event

let a=document.getElementById("btn1")
let a1=0
a.addEventListener("click",()=>{
    a1+=1
    console.log(a1,"time button clicked")
})

//click
let b=document.getElementById("btn2")

b.addEventListener("click",function(){
    alert("Button clicked")
})

//change
let b1=document.getElementById("fruits")
b1.addEventListener("change", function() {
    console.log("Selected:", this.value)
})

//submit
let c=document.getElementById("Form")
c.addEventListener("submit",function(e){
    e.preventDefault()
    let value = document.getElementById("msg").value
    alert("submited " +value)
    console.log("submitted", value)
})

//input
let d=document.getElementById("name")
d.addEventListener("input",function(){
    console.log("printing",this.value)
})