//DOM(Document Object Model)
//getElementsById()
var id1=document.getElementById("heading")
var id2=document.getElementById("subheading")
console.log(id1)
console.log(id2)

//getElementsByClassName
var classname=document.getElementsByClassName("hq")
console.log(classname)
//getElementsByTagName
var tagname=document.getElementsByTagName("h3")
console.log(tagname)
//queryselector
var selector=document.querySelector("h1")
console.log(selector)
//queryselectorall
var selectorall=document.querySelectorAll("h1")
console.log(selectorall)

//DOM traversing
//parent element
var traversing=document.getElementById("name")
console.log(traversing)
var parent=traversing.parentElement
console.log(parent)

//children element
var child=document.getElementById("resume")
console.log(child.children)
//first elementchild
console.log(child.firstElementChild)
//lastelementchild
console.log(parent.lastElementChild)

//creating a DOM elelment
var element=document.createElement("h1")
element.innerText="Element created"
console.log(element)
//for last
parent.appendChild(element)
//for first
parent.prepend(element)

//button
var butn=document.getElementById("btn")
console.log(butn)
// alert("button")
// butn.onclick=function(){
//     console.log("button clicked")
// }

//addEventListner
function clickhere(){
alert("clickable")
butn.innerText="clickable"
traversing.innerText="GIRISH"
parent.appendChild(element)
}
butn.addEventListener("click",clickhere)

var button=document.getElementById("b")
function task(){
button.innerText="99999"
}
button.addEventListener("click",task)
//button.addEventListener("mouseover",task)
//button.addEventListener("dblclick",task)
//button.addEventListener("mouseout",task)
//button.addEventListener("keydown",task)
//button.addEventListener("keyup",task)
//button.addEventListener("submit",task)


var a=document.getElementById("sub")
function hello(){
    console.log("inner element")
}
a.addEventListener("click",hello)

var b=document.getElementById("main")
function hai(){
    console.log("outer text")
}
b.addEventListener("click",hai)



//Event bubbling
//console.log("Event Bubbling")
// var element1=document.getElementById("child")
// function inner element(){
//     console.log("inner text h1")

// }
// element1.addEventListener("click",inner element)

// var element2=document.getElementById("parent")
// function outer(){
//     console.log("outer text h1")

// }
// element2.addEventListener("click",outter)


//Event capturing
console.log("Event Capturing")
var element3 = document.getElementById("child")
function innerelement1(){
    console.log("child element captured")
}
element3.addEventListener("click",innerelement1,true)

var element4=document.getElementById("parent")
function outer1(){
    console.log("parent outer element captured")
}
element4.addEventListener("click",outer1,true)

//Event Delegation
var c=document.getElementById("list")
function Delegation(){
    console.log("Event Delegation")
}
c.addEventListener("click",function(l){
    console.log(l.target.innerText)
})

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
//promise
// new Promise(()=>{

// })

//Promise.all

var a=Promise.resolve("done")
 var b=Promise.reject("failure")
var c=Promise.resolve("success")
Promise.all([a,b,c])
.then(()=>{
console.log("success")
})
.catch(()=>{
console.log("failure")
})


//promise.race()
// let pa=Promise.reject("pa done")
// let pb=Promise.resolve("pb rejected")
// let pc=Promise.resolve("pc")
let pa =new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("pa executed")
}, 100);
})

let pb=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("pb executed")
},2000)
})

Promise.race([pa,pb])
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

//promise.allsettled()

var xa=new Promise((resolve)=>{
    setTimeout(()=>{
            resolve("x is executed")
    },2000)
})

var y=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("y is executed")
    }, 1000);
})

Promise.allSettled([xa,y])
.then((a)=>{
    console.log(a)
})

//promise.any()
var xy=new Promise((resolve)=>{
    setTimeout(()=>{
            resolve("xy is executed")
    },2000)
})

var yx=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("yx is executed")
    }, 1000);
})
Promise.any([xy,yx])
.then((a)=>{
    console.log(a)
})


//async and await
function king(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve("king executed")
    }, 2000);
    })

}

async function queen(){
    return await king()
}
let s=queen()
console.log(s)

// Destructing Array
 var a=[10,20,30,40,50,[60,70]]
 console.log(a[0])
 console.log(a[2])
 console.log(a[4])

 var [A,B,C,D,E,F]=a
console.log(A,B,C)
console.log(F)
var [xb,y]=F
console.log(xb)

//Destructuring object

var c={name1:"king",name2:"queen",locations:{loc1:"hyd",loc2:"bnglr"}}
console.log(c.name1)
var c1=c.name1
var c2=c.name2

var c3=c.locations.loc1
console.log(c3)

console.log(c1)
console.log(c2)

//itterators and generators
let num =[1,2,3,4,]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

//generator
function* h1(){
yield "hello"
yield "king"
yield "queen"}
var a=h1()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
