//to empty the array
//by assign the new empty array.it creates a new array
let arr=[10,20,30]
arr=[]
console.log(arr)

//by setting the array length to 0
let arr1=[10,20,30]
arr1.length = 0
console.log(arr1)

//by using the splicemethod(array.splice(startIndex, deleteCount))
let fruits = ["Apple", "Banana", "Mango"]
fruits.splice(0, fruits.length)
console.log(fruits)


//combining the arrays using concate()
let fe=["HTML","CSS"];
let be=["Node.js","js"]
let cources=fe.concat(be)
console.log(cources)

let classA=["Ravi","Girish"]
let classB=["queen","king"]
let allStudents=classA.concat(classB)
console.log(allStudents)

//combaning by using spread operator (...)
let num1=[1,2,3,4]
let num2=[5,6,7,8]
let tnum=[...num1,...num2]
console.log(tnum)

let fruits1=["apple","mango","Grapes"]
let animals=["tiger",'lion',"zebra","cat","cow"]
let com=[...fruits1,...animals]
console.log(com)

let phones=["redmi","lenovo","vivo","poco"]
let laptops=['hp',"lenovo","dell"]
let electronics=phones.concat(laptops)
console.log(electronics)
let shopes=["mart","reliance","mall"]
var s=[...electronics,...shopes]
console.log(s)