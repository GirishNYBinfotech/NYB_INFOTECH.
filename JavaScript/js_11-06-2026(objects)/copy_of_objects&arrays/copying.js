//copy of object
//normal copy
//shallow copy
//deep copy

//normal copy
let obj={
    a:"A",
    b:"B",
    c:"c"
}

let x=obj
console.log("obj",obj)
console.log("copy",x)

//changes in orginal object
obj.a="c"
console.log("obj",obj)
console.log("x",x)

//changes in copyed object
x.c="A"
console.log("x",x)
console.log("obj",obj)


//shallow copy
let obj1={
    a:1,
    b:2,
    c:3,new:{d:4,e:5}
}
let x1={...obj1}
console.log("x1",x1)
//changes in orginal object
obj1.b=1
console.log("obj1",obj1)
console.log("x1",x1)

//changes in copyed object
x1.a=4
console.log("x1",x1)
console.log("obj1",obj1)

//drawback
//changes inside the original nested object
obj1.new.d=6
console.log("x1",x1)
console.log("obj1",obj1)

//changes inside the copyed nested object
x1.new.e=6
console.log("x1",x1)
console.log("obj1",obj1)

//copying using object.assign()
const person={
    name:"Girish",
    age:25
}
const copy=Object.assign({},person)
console.log(copy)


//deep copy of object
let obj2={
    a:"one",
    b:"two",
    c:"three",d:{e:"five",f:"six"}
}
let x2=JSON.parse(JSON.stringify(obj2))

//changes in orginal object
obj2.b=2
console.log("obj2",obj2)
console.log("x2",x2)

//changes in copyed object
x2.c=3
console.log("x2",x2)
console.log("obj2",obj2)

//changes inside the original nested object
obj2.d.e=5
console.log("x2",x2)
console.log("obj2",obj2)

//changes inside the copyed nested object
x2.d.f=6
console.log("x2",x2)
console.log("obj2",obj2)

//using structuredClone
const obj3={
    name:"Girish",
    details:{
        age:25
    }
}
const x3=structuredClone(obj3)
x3.details.age=30
console.log(obj3.details.age)
console.log(x3.details.age)


//normal copy of array
let arr=[1,2,3,4,5,8]
let y=arr
console.log(y)
y[0]=2
console.log("arr",arr)
console.log("y",y)

//shallow copy of array
let arr1=["hello","hai","Good morning",["good"]]
let y1=arr1
console.log("y1",y1)
arr1[3][0]="good morning"
console.log("arr1",arr1)
console.log("y1",y1)

//deep copy of arrays
let arr2=["a","b","c",["d","e"]]
let y2=JSON.parse(JSON.stringify(arr2))
console.log("y2",y2)
arr2[3][1]="f"
console.log("y2",y2)
console.log("arr2",arr2)