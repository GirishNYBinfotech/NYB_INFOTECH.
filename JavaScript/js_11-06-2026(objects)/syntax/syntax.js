//normal copy of object
let x={
    a:"A",
    b:"B",
    c:"C"
}
let obj=x
console.log("copy",obj)
console.log("orginal object",x)

//shallow copy of object
let x1={
    a:"A",
    b:"B",
    c:"C"
}
let obj1={...x1}
console.log("copy",obj1)
console.log("orginal object",x1)

//deep copy of object
let x2={
    a:"A",
    b:"B",
    c:"C"
}
let obj2=JSON.parse(JSON.stringify(x2))
console.log("copy",obj2)
console.log("orginal object",x2)

//normal copy of array
let arr=[1,3,4,5,"hello","hai"]
let y=arr
console.log("copy",y)
console.log("orginal",arr)

//shallow copy of array
let arr1=["hello","hai",1,3,4,5,6]
let y1=[...arr1]
console.log("copy",y1)
console.log("orginal",arr1)

//deep copy of array
let arr2=["apple","banana","hello","hai"]
let y2=JSON.parse(JSON.stringify(arr2))
console.log("copy",y2)
console.log("orginal",arr2)

//for in
let objj={
    a:1
    ,b:2,
    c:3
}
for(let o in objj){
    console.log(o,objj[o])
}

//for date
let today=new Date()
console.log(today)

//math
let a=10.5
console.log(Math.random()*10)
console.log(Math.round(a))
console.log(Math.ceil(a))
console.log(Math.floor(a))