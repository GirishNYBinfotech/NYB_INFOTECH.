//async and await
console.log("1")
async function test(){
    console.log("2")
    await Promise.resolve()
    console.log("3")
}
test()
console.log("4")


async function greet(){
    return "Hello"
}
greet().then((msg)=>{
    console.log(msg)
})

//by using await function
function get() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received")
        },1000)
    })
}
async function displayData(){
    const result=await get()
    console.log(result)
}
displayData()


function task1(){
    return new Promise(resolve=>{
        setTimeout(() => resolve("Task 1 Completed"), 1000)
    })
}
function task2(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Task 2 Completed"), 2000)
    })
}
async function runTasks(){
    const result1=await task1()
    console.log(result1)
    const result2=await task2()
    console.log(result2)
}
runTasks()


//multi .then()
function step1() {
  return Promise.resolve("Step 1 of .then")
}
function step2() {
  return Promise.resolve("Step 2 of .then")
}

step1()
.then(result=>{
  console.log(result)
})
step2()
.then(result=>{
  console.log(result)
})

//multi await
function step1(){
  return Promise.resolve("Step 1 of await")
}
function step2(){
  return Promise.resolve("Step 2 of await")
}

async function runSteps(){
  let r1 = await step1()
  console.log(r1)
  let r2 = await step2()
  console.log(r2)
}
runSteps()

//
function hai() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Data Reached in promise")
    },2000)
  })
}

hai()
.then((data) =>{ 
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

//async and await
function Data(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("Data Reached in async")
    },2000)
  })
}
async function showData(){
  try {
    const data=await Data()
    console.log(data)
  } 
  catch(err) {
    console.log(err)
  }
}
showData()

//error handling
try {
    console.log("Try block")
} 
catch(error){
    console.log(error)
} 
finally{
    console.log("Always executes")
}

async function getData(){
    try{
        let result=await Promise.reject("Network Error")
    } 
    catch(error){
        console.log(error)
    }
}
getData()

async function hello() {
    try{
        let result = await Promise.resolve("Data")
        console.log(result)
    } 
    catch (error){
        console.log("Error:", error)
    }
}
hello()

async function fun(){
    try{
        let result = await Promise.reject("Server Error")
        console.log(result)
    } 
    catch (error){
        console.log("Caught Error:", error)
    }
}
fun()

async function calculate(){
    try{
        let num1 = await Promise.resolve(10)
        let num2 = await Promise.reject("hello")
        console.log("Sum of two numbers is",num1+num2)
    } 
    catch (error){
        console.log("only numbers allowed")
    }
}
calculate()

async function checkAge(age){
    try{
        if (age<=18){
            throw new Error("You must be 18 or older")
        }
        console.log("Access Granted for voting")
    } 
    catch (error){
        console.log(error.message)
    }
}
checkAge(17)


function userData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id>0){
                resolve("Data fetched successfully")
            } 
            else {
                reject("Invalid ID")
            }
        }, 2000)
    })
}
async function getData1(id){
    try {
        console.log("Fetching data...")
        if (typeof id!=="number"){
            throw new Error("ID must be a number")
        }
        const result=await userData(id)
        console.log(result)
    } 
    catch (error){
        console.log("Error:", error.message || error)
    } 
    finally{
        console.log("Operation completed")
    }
}
getData1("ah")
