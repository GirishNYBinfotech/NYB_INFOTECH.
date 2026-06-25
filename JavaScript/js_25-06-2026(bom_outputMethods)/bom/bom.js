
//Bom(Broswer object model)
//window object:-
console.log(window)

console.log(window.innerWidth)
console.log(window.innerHeight)

window.open("https://google.com")
// setTimeout(()=>{
//   window.close()
// },5000)


//location:-
console.log(location.href)

console.log(location.hostname)

console.log(location.pathname)
setTimeout(()=>{
  location.reload()
},9000)

// location.href = "https://google.com"

//navigator
console.log(navigator.language)
console.log(navigator.platform)
console.log(navigator.onLine)

//history
function goBack(){
    history.back()
}
function goForward(){
    history.forward()
}
// history.go(1)

//screen
console.log(screen.width)
console.log(screen.height)


//dialog box
// alert("hello")
// let result=confirm("Delete file?")
// console.log(result)

// Navigator Object
function showBrowserInfo(){
    alert("Browser: " + navigator.appName +
        "Platform: " + navigator.platform +
        "language: " + navigator.language)
}
// Location Object
function showURL(){ 
    alert("Current URL:" + location.href)
}
function goToGoogle(){
    location.href = "https://www.google.com"
}
// History Object
function goBack(){
     history.back()
}
// Window Object
function showMessage(){
    alert("Welcome to BOM Example!")
}

