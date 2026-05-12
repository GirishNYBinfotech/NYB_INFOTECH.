//normal event
var a=0

var but=document.getElementById("button")

but.addEventListener("click",function(){
    a+=1
    console.log("normal button clicked",a)
})
//Throttling
var b=0
lastclick=0

but.addEventListener("click",function (){
    let intialtime=Date.now()
    if(intialtime-lastclick>2000){
        b+=1
    console.log(b)
    lastclick=intialtime
    }
    console.log("Throttling button clicked",b)
})

//Debouncing
var c=0
let time

but.addEventListener("click",function(){
    clearTimeout(time)
    time=setTimeout(function(){
        c+=1
        console.log("Debouncing is clicked ",c)
    },2000)
})


//call back function
function hai(k){
console.log(k)}

function hello(a,b,c){
console.log("executed")
c(a-b)
}

hello(1,2,hai)


//promise

let x=new Promise((resolve,reject)=>{
var a=2
var b=1
var y=a<b
if (y) {
    // console.log("resolved")
    resolve("function true")
}
else
    // console.log("rejected")
    reject("function is false")
})

x.then((p)=>{
    console.log(p)
})

x.catch((h)=>{
    console.log(h)
})