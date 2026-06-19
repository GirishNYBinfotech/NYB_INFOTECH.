//promises
let promise=new Promise((resolve,reject)=>{
    let success=true
    if (success){
        console.log("Successful")
    } else {
        console.log("Failed")
    }
})

let age=17
let votePromise=new Promise((resolve,reject)=>{
    if(age>=18){
        console.log("You can vote")
    }
    else{
        console.log("You cannot vote")
    }
})

let a=new Promise((resolve, reject) => {
  if(true){
    resolve("resolved")
  }  
  else{
    reject("rejected")
  }
})
a.then((x)=>{
    console.log(x)
})
a.catch((y)=>{
    console.log(y)
})

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Task completed after 3 seconds")
    },3000)
})
promise1.then(message => console.log(message))


let p=new Promise((resolve, reject)=>{
    resolve(20)
})
.then((num)=>{
    return num*2
    })
    .then((num)=>{
        return num+5
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

let number=8
let b=new Promise((resolve,reject)=>{
    if (number%2===0){
        resolve("Even Number")
    } 
    else {
        reject("Odd Number")
    }
})
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

let calculatorPromise=new Promise((resolve, reject)=>{
    let a=10
    let b=20
    resolve(a + b)
    // reject(a*b)
})
calculatorPromise
    .then((sum)=>{
        console.log("Sum=",sum)
    })
    .catch((err)=>{
        console.log(err)
    })

let marks=55
let student=new Promise((resolve, reject) => {
        if (marks<0||marks>100) {
            reject("Invalid Marks")
            return
        }
        let grade
        switch (true){
            case marks>=85:
                grade="A"
                status="pass"
                break

            case marks >= 70:
                grade="B"
                status="pass"
                break

            case marks>=60:
                grade="C"
                status="pass"
                break

            case marks>=35:
                grade="D"
                status="pass"
                break
            default:
                grade="below 35"
                status="Fail"
        }
        console.log(`Grade:${grade} and the status is ${status}`)
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })