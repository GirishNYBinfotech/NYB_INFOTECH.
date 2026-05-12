//Arrays
var a=[1,2,3,4,5,6,7,8,9]
console.log(a)
//push
a.push(10)
console.log(a)

//pop
a.pop()
console.log(a)

//shift
a.shift()
console.log(a)

//unshift
a.unshift(1)
console.log(a)

//splice
a.splice(1,2,"hi")
console.log(a)
a.splice(1,1)
console.log(a)
//to get perticular element
console.log(a[2])


var b=()=>{
console.log(a)
a.unshift(100)
console.log(a)
a.push(11)
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a.length)
console.log(a)
}
b()

let num=[10,20,30,40,50,30]
console.log(num.indexOf(10))
console.log(num.includes(1))
console.log(num.lastIndexOf(30))
//splice to remove all elements
num.splice(0,5)
console.log(num)
//making array length to 0
a.length=0
console.log(a.length)
//assign a empty array
var num1=[1,2,3]
var num1=[]
console.log(num1)

//to merge 2 arrays
var a=[1,2,3,4]
var b=[6,5,4,9]
var c=a.concat(b)
console.log(c)

var d=[...a,...b]
console.log(d)

for(e of d){
    console.log(e)
}

//testing array
//every
let numbers = [2, 4, 6, 9];
let result = numbers.every(num => num % 2 === 0)
console.log(result); // true (all are even)
//every
let numbers1 = [2, 4, 6, 9];
let result1 = numbers.some(num => num % 2 === 0)
console.log(result); // true (all are even)

///join
console.log(numbers1.join("--"))
//sort
var a=[0,1.,2,6,8,7,9]
//asending
a.sort((a, b) => a - b);
console.log(a)
//Decending
a.sort((a, b) => b - a);
console.log(a)

//reduce
var b=[5,6,8]
let sum=b.reduce((acc,curr)=>acc+curr,0)
console.log(sum)

//copying of array
var a=[1,12,1,3,156]

//normaly copy
var copy=a
copy.push("100")
console.log(copy)
console.log(a)

//shallow copy
var copy1=[...a]
copy1 [3]=123
console.log(copy1)

//deepcopy
var copy3=JSON.parse(JSON.stringify(a))
copy3.unshift("100")
console.log(copy3)
console.log(a)