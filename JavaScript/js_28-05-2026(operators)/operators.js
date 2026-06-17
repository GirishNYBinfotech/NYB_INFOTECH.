//operators
//1.Arthematic operator
//addition
let a=10
let b=20
let c=a+b
console.log(c)

//substraction
let s=10
let s1=5
let s3=s-s1
console.log(s3)

//modules% reminder
let d=10
let d1=2
let d3=10%2
console.log(d3)

//division / coefcient
let r=10
let r1=3
let r2=r/r1
console.log(r2)

//multiplication
let m=12
var m1=13
var m2=m*m1
console.log(m2)

//increment operator
let i=10
console.log(i)
//preincrement
console.log("preincrement",++i)
//postincrement
console.log("postincrement",i++)
console.log(i)

let de=10
console.log(de)
//predecrement
console.log("predecrement",--de)
//postdecrement
console.log("predecrement",de--)
console.log(de)

//exponitial
let e=12
let e1=2
console.log(e**e1)

//assignment operator
let x=12
let y=4
console.log(y)
y+=x
console.log(y)
y-=x
console.log(y)
y*=x
console.log(y)
y/=x
console.log(y)

//comparision operator
var a1=15
var a2=10
var a3=15
var a4="10"
console.log("greaterthan",a1>a2)
console.log("lessthan",a1<a2)
console.log("lessthanequal",a1<=c)
console.log("gretherthanequal",a1>=a2)
console.log("loose inequality",a1!=a3)
console.log("strigt inequality",a2!==a4)
console.log("loose equality",a2==a4)
console.log("strict equality",a2===a4)

//logical operator
var l=13
var l1=17
console.log((l<l1)&&(l>l1))
console.log((l<l1)||(l>l1))
console.log(!(l<l1))

//bitwise
let b1=5
let b2=3
console.log("bitwiseAND",b1 & b2)
console.log("BitwiseOR",b1|b2)
console.log("bitwiseNOT",~b1)
console.log("bitwiseXOR",b1^b2)
console.log("leftshift",b1<<1)
console.log("rightshift",b1>>1)

//Ternary operator
let t1=3
let t2=5
t3=t1<t2?true:false
console.log(t3)
let x1=5
x1<10?console.log("x1 is greaterthan 10"):console.log("x1 is lessthan 10")

//concate operator
let st="hello"
let st1="how are you"
console.log(st+" "+st1)

//template literal
console.log(`hello,my name is ${"girish"}.I am working in NYBinfortech`)
console.log(`hello ${"hai"}`)
