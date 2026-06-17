//join
let a=[10,20,30,40]
console.log(a.join(' '))
console.log(a.join("/"))
console.log(a.join(","))
console.log(a.join("'"))
console.log(a.join("#"))
console.log(a.join(">"))

//sort
let b=[10,20,40,3,9,65]
console.log(b.sort((a,b)=>a-b))
console.log(b.sort((a,b)=>b-a))

//for alphebets
let c=["a","x",'c',"y","d","z"]
c.sort()
console.log(c)

let people=[
  {name:"queen",age:25},
  {name:"Girish",age:20},
  {name:"King",age:30}
]
people.sort((a,b)=>a.age-b.age)
console.log(people)

//flat
const arr=[1,[2,3],[4,5]]
const result=arr.flat()
console.log(result)
console.log(arr.flat(2))
const result1=arr.flat(Infinity)
console.log(result1)
const result2=[].concat(...arr)
console.log(result2)

//removing duplicates from array
let z=[12,2,3,3,4,56,78,78]
console.log(...new Set(z))

//indexof()
let index=[1,2,3,4,5,6,6,5,4,3,2,1]
console.log(index.indexOf(2))
console.log(index.indexOf(4))
//lastIndexof()
console.log(index.lastIndexOf(2))
console.log(index.lastIndexOf(4))

