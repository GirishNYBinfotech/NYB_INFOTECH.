//webstorage
//local storage
//session storage

//1.local storage
localStorage.setItem("name","girish")
localStorage.setItem("location","HYD")
localStorage.setItem("number",959550)
let x=localStorage.getItem("location")
console.log(x)
localStorage.key("girish")
localStorage.removeItem("company")
// localStorage.clear()


//2.session storage
sessionStorage.setItem("a","A")
sessionStorage.setItem("b","B")
sessionStorage.setItem("c","C")
sessionStorage.setItem("s","D")
sessionStorage.setItem("d","D")
console.log(sessionStorage.getItem("a"))
sessionStorage.removeItem("s")
// sessionStorage.clear()
console.log(sessionStorage.key("A"))


const message=document.getElementById("message")
const authBtn=document.getElementById("authBtn")
function Ui(){
    let token=localStorage.getItem("token")
    if(token){
        message.textContent="Welcome User"
        authBtn.textContent="Logout"
    } 
    else{
        message.textContent="Please Login"
        authBtn.textContent="Login"
    }
}
    authBtn.addEventListener("click",function(){
        const token=localStorage.getItem("token")
        if(token){
            localStorage.removeItem("token")
        } 
        else {
            localStorage.setItem("token", "token1")
        }
        Ui()
})
// Check login status when page loads
Ui()