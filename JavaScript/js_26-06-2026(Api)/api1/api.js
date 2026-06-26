//get method
//for getting all the post 
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))

//for getting single post 
fetch("https://jsonplaceholder.typicode.com/posts/10")
  .then(response => response.json())
  .then(data => console.log(data))

//post method
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    userId:1,
    title: "new api",
  })
})
.then(response=>response.json())
.then(data=>console.log(data))

//put method
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PUT",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    userId: 1,
    id: 1,
    title: "Updated Todo",
  })
})
.then(response=>response.json())
.then(data=>console.log(data))

//patch method
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    completed: true
  })
})
.then(response=>response.json())
.then(data=>console.log(data))

//delete method
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "DELETE"
})
.then(response=>{
  if (response.ok) {
    console.log("deleted successfully");
  }
})