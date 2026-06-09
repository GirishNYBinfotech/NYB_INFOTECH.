//some -->any one condition should  satcified.it returns boolean values  
let arr=[1,2,3,4,5,10,20,30,6,7]
console.log(arr.some(i=> i>2))
//every -->every condition should  saticify
console.log(arr.every(i=> i<6))

//join -->used to join the array elements
console.log(arr.join("/"))
//sort
arr.sort()
console.log(arr)
//for ascending order
arr.sort((a,b)=>a-b)
console.log(arr)
//for decending order
arr.sort((a,b)=>b-a)
console.log(arr)

//flatting
var x=[1,2,3,4,[5,6,7,8]]
let x1=x.flat(2)
console.log(x1)

//removing duplicates
let y=[1,2,3,4,1,2,3]
console.log(...new Set(y))

var n=[]
for (i of y){
    if (n.indexOf(i)==-1){
        n.push(i)
}}
console.log(y)
console.log(n)

//map
let xy=[2,4,6,8,9]
console.log(xy.map(i => i+1))

//reduce
var z=[10,20,30,40,50]
let z1=z.reduce((acc,cv)=>{
    return acc+cv
},0)
console.log(z1)
//filtring
console.log(z.filter(i => i>30))

//Some
let numbers=[10,20,30,60,80]
let result=numbers.some(num=> num>50)
console.log(result)

let marks=[25,30,35,45,55]
let passed=marks.some(i=> i>=40)
console.log(passed)

//every
let numbers1=[10,20,30,40]
let result1=numbers1.every(num=> num>0)
console.log(result1)

let marks1=[25,30,35,45,55]
let passed1=marks1.every(i=>i>=40)
console.log(passed1)
