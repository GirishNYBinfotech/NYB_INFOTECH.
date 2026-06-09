//map
let numbers=[1,2,3,4,5]
let n=numbers.map(num => num * 2)
console.log(n)

let n1=numbers.map(num=>num-1)
console.log(n1)

let vari=["hello","hai","who"]
let v=vari.map(v1 =>v1.toUpperCase())
console.log(v)

let V1=v.map(v1 =>v1.toLocaleLowerCase())
console.log(V1)

//filter
let marks=[41,30,40,60,50,80]
let m=marks.filter(m1 =>m1>=50)
console.log("pass",m)

let m2=marks.filter(m1 =>m1<40)
console.log("fail",m2)

//reduce
let red=[10,20,30,40,50]
var r=red.reduce((num1,num2)=>num1+num2,0)
console.log(r)

let words=["girish","harish","ravi"]
const w=words.reduce((acc,word)=> acc+word.length,0)
console.log(w)