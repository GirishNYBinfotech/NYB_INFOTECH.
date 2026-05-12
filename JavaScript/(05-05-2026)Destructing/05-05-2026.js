// Destructing Array
 var a=[10,20,30,40,50,[60,70]]
 console.log(a[0])
 console.log(a[2])
 console.log(a[4])

 var [A,B,C,D,E,F]=a
console.log(A,B,C)
console.log(F)
var [x,y]=F
console.log(x)

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
