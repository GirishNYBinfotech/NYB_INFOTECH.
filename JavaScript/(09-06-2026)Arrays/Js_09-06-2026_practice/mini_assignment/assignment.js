//1.Array creation
let fruits=["Apple","Banana","Mango"]
console.log("Fruits:")
console.log(fruits)

//multidimensional array
let students = [
    ["Girish", 85],
    ["Rahul", 90],
    ["king", 95]]
console.log(students)
console.log("First Student Name:", students[0][0]) 
console.log("First Student marks:", students[0][1])

//adding and removing elements
let num=[1,2,3,4,5]
num.push(8)//used to add at last element of array
console.log("after push():",num)
num.unshift(9)//used to add first element of array
console.log("after unshift():",num)
num.pop()//will remove the last element of array
console.log("after pop():",num)
num.shift()//wiil remove the first element of array
console.log("after shifft()",num)
num.splice(1,1)//will remove the given index element and will delete it(index,delete count)
console.log("after splice()",num)

//serching element
let colors=["Red","Blue","Green","Yellow","Green"]
console.log(colors.includes("Blue"))//includes() will check the given element is present or not
console.log("index of Green:", colors.indexOf("Green"))//will come from first and gives the index number
console.log("last index of",colors.lastIndexOf("Green"))//will come from last and gives the index number

//combang arrays
let arr1=[1, 2, 3]
let arr2=[4, 5, 6]
let arr=arr1.concat(arr2)//concate is used to join the arrays
console.log(arr)
let arr3=[...arr,arr1]//.... will represent the spread oprator used to merge the array
console.log(arr3)

//array ittretion technique
let marks=[70,80,90,100]
console.log("for loop")
for (let i=0;i<marks.length;i++) {
    console.log(marks[i])
}//here we will get by ittretating the index numbers

console.log("for of loop")
for (let mark of marks) {
    console.log(mark)
}//here wewil get the values

console.log("for in loop")
for (let mark in marks) {
    console.log(mark)
}//here we get the index values

console.log("foreach loop")
marks.forEach(function(mark) {
    console.log(mark);
})//it executes a function once for each element in an array