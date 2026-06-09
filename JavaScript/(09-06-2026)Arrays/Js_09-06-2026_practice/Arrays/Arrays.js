//Arrays
var a=[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(a)
//push
a.push(10)
a.push(11)
a.push(12)
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
a.splice(2,1,1)

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

//number
let numbers=[10, 20, 30, 40, 50]
console.log(numbers)

//string type
let fruits = ["Apple", "Banana", "Mango"]
console.log(fruits)

//Boolean Array
let bool=[true, false, true]
console.log(bool)

//Multidimensional array
//1dimensional array
let mat=[1,2,3,4,4]
console.log(mat)

//2dimensional array
let matrix1=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
console.log(matrix1)

let colors=["Red", "Green", "Blue"]
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])

let matrix2=[
    [10, 20],
    [30, 40]]
console.log(matrix2[0][0])
console.log(matrix2[0][1])
console.log(matrix2[1][0])
console.log(matrix2[1][1])