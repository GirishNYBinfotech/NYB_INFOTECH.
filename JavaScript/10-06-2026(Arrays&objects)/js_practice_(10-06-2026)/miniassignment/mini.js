//Array operations
let numbers=[10,20,30,40,50]
console.log("Original Array:", numbers)
// Add Elements
numbers.push(60)// Add at end
numbers.unshift(5)// Add at beginning
console.log("After Adding:", numbers)

// Remove Elements
numbers.pop()// Remove last element
numbers.shift()// Remove first element
console.log("After Removing:", numbers)

// Insert and Delete using splice
numbers.splice(2,0,25)// Insert 25 at index 2
console.log("After Inserting:", numbers)
numbers.splice(2,1)// Delete 1 element from index 2
console.log("After Deleting:", numbers)

//Array Searching Techniques
let arr = [10,20,30,40,50,30]
console.log("indexOf(30):", arr.indexOf(30))
console.log("lastIndexOf(30):", arr.lastIndexOf(30))
console.log("includes(40):", arr.includes(40))

//Array Transformation Methods
let nums = [1,2,3,4,5]
//map()//creates a new array by transforming each element
let squares=nums.map(num=>num*num)
console.log("Squares:",squares)
//filter()//used to create a new array with elements that pass a condition.
let evenNumbers=nums.filter(num=>num%2===0)
console.log("Even Numbers:",evenNumbers)
//reduce()//used to get a single value from the array by adding
let sum=nums.reduce((acc,curr)=>acc+curr,0)
console.log("Sum:",sum)
//flat()//converting a nested array into a single-level array
let nestedArray=[1,[2,3],[4,[5]]]
console.log("Flattened:", nestedArray.flat(2))

//Array Iteration Methods
let num1=[12,23,4,76]
// forEach()//It is an array method that executes a function once for each element in an array.
num1.forEach(num=>console.log("forEach:",num))

// forof //used get the values
for (let value of num1){
    console.log("forof:",value)
}

//forin //used get the index number
for (let value1 in num1){
    console.log("forin",value1)
}

// for loop 
for (let i=0;i<num1.length;i++){
    console.log("for loop:",num1[i])
}

//Array Sorting
//for numbers
//acending order
let a=[1,2,3,4,4,3,2,1]
console.log(a.sort((a,b)=>a-b))
//decending order
console.log((a,b)=>b-a)

//for alphabets
let b=["hello","apple","hai","banana"]
console.log(b.sort())

let c=[12,34,25,10]
for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c.length - 1 - i; j++) {
        if (c[j] > c[j + 1]) {
            [c[j],c[j + 1]]=[c[j + 1],c[j]]
        }
    }
}
console.log(c)

//Object Creation and Manipulation
//object literals
let student={
    id:101,
    name:"girish",
    course:"javascript",add:{loc1:"hyd",loc2:"bnglr"}
}
console.log(student)

//access
console.log(student.id)
console.log(student["course"])
console.log(student.add.loc1)

//update the object
student.id=102
console.log(student)
student.add.loc1="chennai"
console.log(student)

//add new property to an object
student.course1="HTML"
console.log(student)
student.add.loc3="hyd"
console.log(student)

//deleting
delete student.course1
console.log(student)
delete student.add.loc3
console.log(student)