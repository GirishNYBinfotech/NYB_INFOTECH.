//API methods

//get
//post
//put
//patch
//delete


let a=fetch("https://jsonplaceholder.typicode.com/comments")
console.log(a)

fetch("https://jsonplaceholder.typicode.com/comments")

.then((x)=>{
    return x.json()
    //console.log(x)
})
.then(y=> console.log(y))

.catch((y)=>{
    console.log(y)
})
 