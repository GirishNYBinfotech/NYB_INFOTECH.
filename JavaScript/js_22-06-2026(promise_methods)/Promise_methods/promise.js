//promise
let a=new Promise(()=>{
    if(false){
        console.log("executed")
    }
    else{
        console.log("failed to execute")
    }
})
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

//promise methods
//Promise.all()--it should resolve all promises 
let p1=Promise.resolve("sucessfull")
let p2=Promise.reject("failed")

Promise.all([p1,p2])
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})


let p11=new Promise((resolve)=>{
  setTimeout(()=>resolve("Task 1"),1000)
})
let p22=new Promise((resolve)=>{
  setTimeout(()=>resolve("Task 2"),2000)
})
let p33=new Promise((resolve)=>{
  setTimeout(()=>resolve("Task 3"), 3000)
})
Promise.all([p11,p22,p33])
  .then((result)=>{
    console.log(result)
  })

let a1=Promise.resolve(100)
let a2=200
let a3=Promise.resolve(300)

Promise.all([a1,a2,a3])
  .then((result)=>{
    console.log(result)
  })

let group1=Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
])
let group2=Promise.all([
  Promise.resolve(3),
  Promise.resolve(4)
])
Promise.all([group1,group2])
  .then(result=>{
    console.log(result)
  })


//promise.race--it will execute first promise and return it may be resolve or rejected 
let ab=Promise.reject("hello1 reject")
let bc=Promise.resolve("hello2 resolved")
let cd=Promise.resolve("hello3 resoved")

Promise.race([ab,bc,cd])
.then((x)=>{
  console.log(x)
})
.catch((bc)=>{
  console.log(bc)
})

let b1=new Promise((resolve,reject)=>{
  setTimeout(()=>reject("Error"),1000)
})
let b2=new Promise(resolve=>{
  setTimeout(()=>resolve("Success"),2000)
})
Promise.race([b1, b2])
  .then(result=>console.log(result))
  .catch(error=>console.log(error))


let c1=Promise.resolve("HTML")
let c2=new Promise(resolve=>{
  setTimeout(()=>resolve("CSS"),1000)
})
Promise.race([c1,c2])
  .then(result=>console.log(result))


let pa=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("hai not executed"),2000)
})
let pb=new Promise((resolve,reject)=>{
  setTimeout(()=>reject("hai executed"),1000)
})
Promise.race([pa,pb])
.then((a)=>{
  console.log(a)
})
.catch((y)=>{
  console.log(y)
})

let pe=Promise.reject("rejected 1")
let pe1=Promise.reject("rejected 2")
Promise.race([pe,pe1])
.then((a)=>{
  consol.log(a)
})
.catch((b)=>{
  console.log(b)
})


//promise.allsettled--it may be resolved or rejected, it will display the all promises.
let px=Promise.resolve("allsetelled 1")
let px1=Promise.reject("allsetelled 2")
Promise.allSettled([px,px1])
.then((a)=>{
  console.log(a)
})


let n1=Promise.resolve("HTML")
let n2=Promise.reject("Error")
let n3=Promise.resolve("JavaScript")
Promise.allSettled([n1,n2,n3])
  .then((result)=>{
    console.log(result)
  })


let m1=new Promise(resolve=>{
  setTimeout(()=>resolve("Task 1 successfull"),2000)
})
let m2=new Promise((resolve, reject)=>{
  setTimeout(()=>reject("Task 2 Failed"),1000)
})
let m3=new Promise(resolve=>{
  setTimeout(()=>resolve("Task 3 succesfull"),3000)
})

Promise.allSettled([m1,m2,m3])
  .then(result=>{
    console.log(result)
  })


//promise.any()--it will give which ever promise is resolved first
let py1=Promise.reject("rejected")
let py2=Promise.reject("rejected")
let py3=Promise.resolve("completed")

Promise.any([py1,py2,py3])
.then((a)=>{
  console.log(a)
})
.catch((b)=>{
  console.log(b)
})

let pm1=Promise.reject("hello")
let pm21=Promise.reject("hello1")
let pm3=Promise.reject("hello3")

Promise.any([pm1,pm21,pm3])
.then((hai)=>{
  console.log("hai")
})
.catch((hi)=>{
  console.log(hi)
})


let x1=Promise.reject("Error 1")
let x2=new Promise((resolve)=>{
  setTimeout(()=>resolve("Success 2"),1000)
})
let x3=Promise.resolve("success 1")
let x4="hello"

Promise.any([x1,x2,x3,x4])
  .then((result)=>{
    console.log(result)
  })
  .catch((error)=>{
    console.log(error)
  })


let y1=new Promise((resolve)=>{
  setTimeout(()=>resolve("completed"),1000)
})
let y2=new Promise((resolve)=>{
  setTimeout(()=>resolve("success 2"),500)
})
Promise.any([y1,y2])
 .then((greet)=>{
  console.log(greet)
})
 .catch((greet1)=>{
  console.log(greet1)
})
