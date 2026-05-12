//web storage
//1. local storage
localStorage.setItem("name","king")
console.log(localStorage.getItem("name"))

localStorage.setItem("location","hyd")
console.log(localStorage.getItem("location"))
//localStorage.removeItem("location")
console.log(localStorage.getItem("location"))
localStorage.clear()

//2. session storage
sessionStorage.setItem("name","queen")
console.log(sessionStorage.getItem("name"))
sessionStorage.setItem("location","Bnglr")
//sessionStorage.removeItem("name")
console.log(sessionStorage.getItem("name"))
sessionStorage.clear()