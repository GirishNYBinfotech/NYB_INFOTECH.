let count = 0
let intervalId
let timeoutId
const countDisplay = document.getElementById("count")

//Update webpage
function updateCount() {
    countDisplay.innerText = count
}
//Start auto increment
document.getElementById("start").addEventListener("click", () => {

    intervalId = setInterval(() => {
        count++
        updateCount()
    }, 1000)
    //Stop automatically after 5 sec
    timeoutId = setTimeout(() => {
        clearInterval(intervalId)
        console.log("Auto Stopped after 5 seconds")
    }, 5000)
})
//Stop button
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    console.log("Stopped manually")
})
//Increase manually
document.getElementById("increase").addEventListener("click", () => {
    count++
    updateCount()
})
// Decrease manually
document.getElementById("decrease").addEventListener("click", () => {
    count--
    updateCount()
})