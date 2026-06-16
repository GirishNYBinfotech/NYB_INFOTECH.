let timeLeft=10
let a
function startTimer(){
    clearInterval(a)
    timeLeft=10
    document.getElementById("timer").textContent=timeLeft
    a=setInterval(()=>{
        timeLeft--
        document.getElementById("timer").textContent=timeLeft
        if(timeLeft===0){
            clearInterval(a)
            alert("Time's up!")
        }
    },1000)
}
function resetTimer(){
    clearInterval(a)
    timeLeft=10
    document.getElementById("timer").textContent=timeLeft
}