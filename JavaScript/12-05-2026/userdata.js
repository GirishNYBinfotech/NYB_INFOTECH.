
let usersData = []
let getDataBtn = document.getElementById("getDataBtn")
let clearBtn = document.getElementById("clearBtn")
let container = document.getElementById("container")

getDataBtn.addEventListener("click", function () {

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
      return response.json()
 })
 .then(function(data){

  usersData = data;


 usersData.forEach(function(user){

let div = document.createElement("div")

 div.innerHTML = `
 <h2>${user.name}</h2>
  <p>Email: ${user.email}</p>
   <p>
   Geo Location:
    ${user.address.geo.lat},
     ${user.address.geo.lng}
    </p>
   <hr>`
 
 container.appendChild(div);
  });

 getDataBtn.hidden = true;

 clearBtn.hidden = false;
 });
 });

clearBtn.addEventListener("click", function () {

container.innerHTML = "";

usersData = [];

 getDataBtn.hidden = false;

 clearBtn.hidden = true;
});