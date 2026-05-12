//promise

//Promise.all

var a=Promise.resolve("done")
 var b=Promise.reject("failure")
var c=Promise.resolve("success")
Promise.all([a,b,c])
.then(()=>{
console.log("success")
})
.catch(()=>{
console.log("failure")
})


//promise.race()
// let pa=Promise.reject("pa done")
// let pb=Promise.resolve("pb rejected")
// let pc=Promise.resolve("pc")
let pa =new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("pa executed")
}, 100);
})

let pb=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("pb executed")
},2000)
})

Promise.race([pa,pb])
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

//promise.allsettled()

var x=new Promise((resolve)=>{
    setTimeout(()=>{
            resolve("x is executed")
    },2000)
})

var y=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("y is executed")
    }, 1000);
})

Promise.allSettled([x,y])
.then((a)=>{
    console.log(a)
})

//promise.any()
var xy=new Promise((resolve)=>{
    setTimeout(()=>{
            resolve("xy is executed")
    },2000)
})

var yx=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("yx is executed")
    }, 1000);
})
Promise.any([xy,yx])
.then((a)=>{
    console.log(a)
})


//async and await
function king(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve("king executed")
    }, 2000);
    })

}

async function queen(){
    return await king()
}
let s=queen()
console.log(s)

