//get
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

//Post 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "JavaScript",
        body: "POST method example",
        userId: 1
    })
})
.then((response) => response.json())
.then((data) => console.log(data))

//put
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Entire record updated",
        userId: 2
    })
})
.then((response) => response.json())
.then((data) => console.log(data))

//patch
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Patched Title"
    })
})
.then((response) => response.json())
.then((data) => console.log(data))

//delete
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then((response) => console.log("Data Deleted"))