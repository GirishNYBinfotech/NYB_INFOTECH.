//map
//rupees to dollor
const price =[1,10,50,500,2000]
const rupees=price.map(price=>price*80)
console.log(rupees)

//changing lowercase to uppercase
let names=["girish","rahul","queen"]
let uppercase=names.map(user=> user.toUpperCase())
console.log(uppercase)

//filter
//to know pass marks
const marks=[35,80,25,90,45]
const passed = marks.filter(mark =>mark>=35)
console.log(passed)
//user activity
const users=[
  { name:"A",active:true },
  { name:"B",active:false }
]
const activeUsers=users.filter(user=>user.active)
console.log(activeUsers)

//reduce
//count all cart iteams
const cart=[100,200,300]
const total=cart.reduce((sum,item)=>sum+item, )
console.log(total)

//multiple of all numbers
const numbers=[1,2,3,4,5]
const sum=numbers.reduce((acc,num)=>acc*num,0)
console.log(sum)