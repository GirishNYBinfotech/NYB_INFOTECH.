//forin
let obj={
    name:"girish",
    id:101,
    number:184839902
}

for(let o in obj){
    console.log("key",o)
    console.log("value",obj[o])
    console.log("key-values",o,obj[o])
}

//for getting key from the object
console.log(Object.keys(obj))

//for getting vaues from object
console.log(Object.values(obj))

//for getting key values in an array
console.log(Object.entries(obj))

let obj1={
    a:1,
    b:2,
    c:3,d:{e:4,d:5}
}
for(let o1 in obj1){
    console.log(o1,obj1[o1])
}

//date
let today=new Date()
console.log(today)
let date=today.getDate()
console.log("Date",date)
var weekday=today.getDay()
console.log("weekday",weekday)
var year=today.getFullYear()
console.log("year",year)
var hour=today.getHours()
console.log("hours",hour)
let month=today.getMonth()+1
console.log("month",month)
const minutes=today.getMinutes()
console.log("minutes",minutes)
var time=today.toLocaleTimeString()
console.log("Time",time)


//template string
console.log("Template string")

let name="king"
let age=22
console.log(`My name is ${name} and I am ${age} years old.`)

//expression
let a=10
let b=200
console.log(`the value of a is ${a},the value of b is ${b} and the sum of a,b is${a+b}`)

//function
function hello(name){
    return `Hello ${name}`
}
console.log(hello("girish"))

//for date
let now=new Date()
let Time=now.toLocaleTimeString()
let date1=now.getDate()
console.log(`Today date is ${date1} and the time is ${Time}`)

//by object
let ob={
    name:"girish",
    number:932858798
}
console.log(`my name is ${ob.name} and phone number is ${ob.number}`)
