let isDisplayed=false
async function toggleUsers(){
    let heading=document.getElementById("heading")
    let button=document.getElementById("btn")
    const usersDiv=document.getElementById("users")
    if (!isDisplayed) {
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const users=await response.json()
        let output=""
        users.forEach(user=>{
            output +=`<div class="card">
                    <h3>${user.name}</h3>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Phone:</b> ${user.phone}</p>
                    <p><b>City:</b> ${user.address.city}</p>
                </div>`
        })
        usersDiv.innerHTML = output
        heading.innerHTML = "Welcome"
        button.innerHTML = "Clear"
        isDisplayed = true
    } 
    else {
        usersDiv.innerHTML = ""
        heading.innerHTML = "Click Here To Display Details"
        button.innerHTML = "Display"
        isDisplayed = false;
    }
}

