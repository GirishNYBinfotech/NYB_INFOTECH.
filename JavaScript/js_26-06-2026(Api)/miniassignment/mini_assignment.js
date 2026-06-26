//mini assignment
const output = document.getElementById("output")

// Promise--A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise Completed")
        },ms)
    })
}

// Async Await--This async function always returns a Promise. And await pauses execution of an async function until a Promise is resolved.
async function promiseExample(){
    try{
        let result = await delay(2000)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
promiseExample()

// API Integration--(Appliction programming Interface)
async function getUser(){
try{
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
if(!response.ok){
throw new Error("Unable to fetch")
}
const data=await response.json()

// Destructuring--used to store the elements parllalely in other variable, like without using the index values
const {name,email,phone} = data
output.innerHTML=`
<h3>User Details</h3>
<p>Name : ${name}</p>
<p>Email : ${email}</p>
<p>Phone : ${phone}</p>`


// Local Storage--: It will store in every tab in browser by using the port/URL .It is a permanent storage
localStorage.setItem("username",name)

// Session Storage--It will store only the particular tab only .It is temporary storage.
sessionStorage.setItem("email",email)
console.log(localStorage.getItem("username"))
console.log(sessionStorage.getItem("email"))
}
catch(error){
console.log(error.message)
}
}
document.getElementById("loadBtn").addEventListener("click",getUser)


// Iterator--:used to call the next methods.and it returns current value and done state
const numbers=[10,20,30]
const iterator=numbers[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// Generator--it is special functions that can pause and resume execution. They are defined using function* and use the yield keyword.
function* employee(){
yield "John"
yield "David"
yield "Smith"
}
const emp=employee()
console.log(emp.next())
console.log(emp.next())
console.log(emp.next())
console.log(emp.next())

// Error Handling--: To handle the errors and not to stop the flow of execution.
function divide(a,b){
try{
if(b===0){
throw new Error("Cannot divide by zero")
}
return a/b
}
catch(error){
console.log(error.message)
}
}
console.log(divide(20,5))
