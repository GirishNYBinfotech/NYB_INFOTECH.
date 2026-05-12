//primitive type
var a=10
var b=11
var booll=true
var str="lak"
var i
const c=10n
let d=null
let id = Symbol("id");
console.log("hello world")
console.log(a,typeof(a))
console.log(b)
console.log(booll,typeof(booll))
console.log(str,typeof(str))
console.log(c,typeof(c))
console.log(d)
console.log(i)
console.log(typeof(str))
console.log(id,typeof(id))

//reference/non-primitive type
//object
let person={name:"girish",
    age:23
}
console.log(person,typeof(person))

//Array
let animals=["tiger","lion","deer"]
console.log(animals,typeof(animals))

//function
function greet(name,months){
    var permonth=20000
    console.log(name,months,"months salary is",permonth*months)
}
greet("girish",5)

//Date
let Today= new Date();
console.log(Today)
console.log("date",Today.getDate())
console.log("year",Today.getFullYear())
console.log("month",Today.getMonth()+1)
console.log("hours",Today.getHours())
console.log("Minutes",Today.getMinutes())
console.log("seconds",Today.getSeconds())
console.log("day",Today.getDay())

//Map
var p={
    name:"Girish","date":1
}
console.log(p)
let m=new Map()
m.set("name","Girish")
m.set("date",1)
console.log(m)
