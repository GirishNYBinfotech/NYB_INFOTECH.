//unshift add first element to an array
let fruits=["Banana","Mango"]
fruits.unshift("Apple")
fruits.unshift("pineapple")
console.log(fruits)

let numbers=[30, 40]
numbers.unshift(10, 20)
console.log(numbers)

//push() will add the element at the end of array
let fruits1=["Apple","Banana"];
fruits1.push("Mango")
console.log(fruits1)

let cities=["Delhi","Mumbai"]
cities.push("Hyderabad")
console.log(cities)


let colors=["Red","Blue","orange"]
colors.splice(1, 0, "Green")
console.log(colors)

//pop() will remove the last element from array
let fruits3=["Apple","Banana","Mango"]
fruits3.pop()
console.log(fruits3)

let cities1=["Delhi","Mumbai","Chennai"]
cities1.pop()
console.log(cities1)


//shift will remove the first element from the array
let fruits4=["Apple", "Banana", "Mango"]
fruits4.shift()
console.log(fruits4)

let colors1=["Red","Blue","orange"]
colors1.splice(1, 0, "Green")
console.log(colors1)

//Splice() array.splice(index, deleteCount, item1, item2)
let fruits5=["Apple","Mango","pineapple"]
fruits5.splice(1, 0, "Banana")
console.log(fruits5)

let students1=["Ravi","Kiran","Suresh"];
students1.splice(2, 0, "Girish")
console.log(students1)

//splice() removing elements from any postion

let fruits6=["Apple","Banan","Mango"]
fruits6.splice(1, 1)
console.log(fruits6)

let numbers1=[10, 20, 30, 40]
numbers1.splice(2, 1)
console.log(numbers1)
