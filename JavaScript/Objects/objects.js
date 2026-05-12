//objects

// var a={
//     key:"value",
//     key:"value"
// }

var a={a:"A",b:"B",c:"C",d:"D"}

//to update 
a.b="c"
console.log(a)
//to delete 
delete a.a
console.log(a)

//to get perticular element
console.log(a.d)
console.log(a["c"])

//to create new object
var x= new Object()
console.log(x)

//constractor
function employee(q,w,e){
    this.capital1=q;
    this.capital2=w;
    this.capital3=e;

}
let emp1=new employee("Q","W","E")
let emp2=new employee("q","w","e")
console.log(emp1)
console.log(emp2)

//class

class School{
    constructor(s1,s2,s3){
        this.student1=s1
        this.studying=s2
        this.idNo=s3
    }
}
var a=new School("king","4th","45")
var b=new School("queen","5th","55")
console.log(a)
console.log(b)

//copying of objects
//normalcopy
var a={a:"b",b:"c",c:"d",d:"e",b:{c:"hello"}}
var a1=a
console.log(a1) 

//deep copy
var a3=JSON.parse(JSON.stringify(a))
a3.d="D"
a3.b.c="A"
console.log(a3)
console.log(a)

//shallow copy
var a2={...a}
a2.f="g"
console.log(typeof(a2))
console.log(a2)
console.log(a)

//Math object
var x=4
var y=10.25
console.log(Math.floor(y))
console.log(Math.ceil(y))
console.log(Math.pow(5,4))
console.log(Math.sqrt(3))
console.log(Math.round(y))
console.log(Math.floor(Math.random()*100))


//Strings
var a="hello"
console.log(a.length)

//touppercase
var a="Hello world"
let str=a.toUpperCase()
console.log(str)
//tolowercase
var a="HELLO WORLD"
let str1=a.toLowerCase()
console.log(str1)

//getting the random value for certain range
var a=100
console.log(Math.floor(Math.random()*100-80))