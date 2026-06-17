//this keywoard

function hello(){
    console.log(this)
}
hello()

let obj={
    name:"girish",
    hello(){
        console.log(this.name)
    },
    hello1: ()=>{
        console.log(this)
    }
}
obj.hello()
obj.hello1()

var x=function hai(a,b,c,d){
    console.log(this)
    console.log(a+b+c+d)
}
//call n no.of arguments
x.call(obj,12,13,12,13)

function Hello(a,b){
    console.log(this)
    console.log(a+b)
}
//apply 2 arguments allowed
Hello.apply(obj,[10,20])
//bind we can store in variable and we can call it later
Hello.bind(obj,12,34)()

//function decleration
let obj1={
    loc:"bnglr",
    cobj1: function hello1(a,b){
        console.log(this)
        console.log(a+b)
    }
}
obj1.cobj1.call(obj1,5,6)
obj1.cobj1.apply(obj1,[4,6])
let o=obj1.cobj1.bind(obj1,7,8)
o()

//function expression
//arrow function
let obj2={
    loc:"hyd",
    cobj2:(a,b)=>{
        console.log(this)
        console.log(a-b)
    }
}
obj2.cobj2.call(obj2,2,1)
obj2.cobj2.apply(obj2,[2,1])
obj2.cobj2.bind(obj2,5,2)()

//anonymous function
var obj3={
    loc:"ctr",
    cobj3: function(a,b){
        console.log(this)
        return a*b
    }

}
console.log(obj3.cobj3.call(obj3,2,3))
console.log(obj3.cobj3.apply(obj3,[3,2]))
// console.log(obj3.cobj3.bind(obj3,4,5)())
let vari=obj3.cobj3.bind(obj3,4,5)
console.log(vari())

var obj4={
    name:"girish",
}
let y=function x1(a,b){
    console.log(a+b)
    console.log(this)
    console.log(a+b)
}
y.call(obj4,4,5,6)
y.apply(obj4,[5,6])
let z=y.bind(obj4,2,3)
z()


let s="hello"
var n={
    s2:"hai",
    s3:()=>{
        let s4="hii"
        console.log(this.s)//undefined
        console.log(this.s2)//undefined
        console.log(this.s4)//undefined
    }
}
n.s3()

//if we want to use this key word in arrow function we wamnt to use inside method
let m={
    name1:"girish"
    ,fun1:function (){
        let inf=()=>{
            console.log(this.name1)
        }
        inf()
    }
}
m.fun1()

// in the above The arrow function inf inherits this from fun1, where this refers to m.
