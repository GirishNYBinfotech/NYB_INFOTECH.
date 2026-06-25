//API(Application Programming Interface)
//get method
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
  })
  .catch(error=>{
    console.log(error)
  })

//push method
fetch("https://jsonplaceholder.typicode.com/posts",{
  method: "POST",
  headers:{
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "JavaScript",
    body: "Learning Fetch API",
    userId: 1
  })
})
.then(response=>response.json())
.then(data=>{
  console.log(data)
})

//put method
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Body",
    userId: 1
  })
})
.then(response=>response.json())
.then(data=>{
  console.log(data)
})

//patch method
fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method:"PATCH",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    title:"New Title"
  })
})
.then(response=>response.json())
.then(data=>{
  console.log(data)
})

//delete method
fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method: "DELETE"
})
.then(response=>{
  console.log("Deleted Successfully")
})


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users=>{
    const container = document.getElementById("container")
    users.forEach(user=>{
        container.innerHTML += `<div class="card">
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>City: ${user.address.city}</p>
        </div>`
    })
})

//success
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json())
  .then((data)=>{
    console.log("Success:",data)
  })
  .catch((error)=>{
    console.log("Error:",error)
  })

//using async/await
async function getUser() {
  try {
    const response=await fetch("https://jsonplaceholder.typicode.com/users/1")
    if (response.ok) {
      throw new Error("Request failed")
    }
    const data = await response.json()
    console.log(data)
  } catch (error){
    console.log(error.message)
  }
}
getUser()

//error
fetch("https://invalid-url.com/users")
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data)
  })
  .catch((error)=>{
    console.log(error)
  })

//using asyn/await
async function getUser1() {
  try {
    const response1=await fetch("https://jsonplaceholder.typicode.com/invalid");
    if (response1.ok) {
      throw new Error("Status Code: " + response1.status);
    }
    const data = await response1.json()
    console.log(data)
  } 
  catch (error) {
    console.log("Error:", error.message)
  }
}
getUser1()