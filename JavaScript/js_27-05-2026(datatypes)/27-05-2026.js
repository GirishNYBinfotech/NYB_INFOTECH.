//non primitive datatype/refrence
//1.array
let a=[1,2,3,4,5,"hello",{obj:"two"},[[1,4,5,6],6,7,8,9],null]
console.log(a)
console.log(typeof(a))

//2.object
let o={
    name:"girish",
    loc:"hyd",
    detail:{
        name:"king",
        loc:"bnglr"
    }
}
console.log(o)
console.log(typeof(o))
let x={name:"king",obj:{loc:"hyd"},arr:[1,2,3],null:"null"}
console.log(x)
console.log(typeof(x))

//3.function
var sal_perday=500
function fan1(name,days){
    console.log(name)
    return days*sal_perday
}
console.log(fan1("king",15))
console.log(fan1("queen",18))
console.log(fan1("ravi",19))
console.log(typeof(fan1))


//4.date
let today=new Date()
console.log(today)
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getFullYear())
console.log(today.getMinutes())
console.log(today.getMonth())
console.log(today.getSeconds())
console.log(today.getHours())
console.log(typeof(today))

//5.E.S-6
//map
let ob={}
let student = new Map()
student.set("name", "Girish")
student.set(null, "hyd")
student.set(true,"false")
student.set(1,"hai")
student.set(ob,"hello")
console.log(student)

//weakmap
let obj = {}
let wm = new WeakMap()
wm.set(obj, "Private Data")
console.log(wm)

//set
let numbers = new Set()
numbers.add(10)
numbers.add(20)
numbers.add(10)
console.log(numbers)

//weakset
let obj1 = {name:"Girish"}
let obj2 = {age:22}
let ws = new WeakSet()
ws.add(obj1)
ws.add(obj2)
console.log(ws)

//6.regular expression
let pattern = /hello/
console.log(pattern)
console.log(typeof(pattern))
