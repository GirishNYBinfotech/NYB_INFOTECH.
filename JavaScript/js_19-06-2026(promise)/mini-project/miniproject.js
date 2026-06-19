//quiz
var resultEl=document.getElementById("result")
let timeLeft=30
//callback function
function showResult(message,callback){
    callback(message)
}
//promise
function checkAnswer(answer){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(answer==="Delhi"){
                resolve("Correct Answer")
            }
            else{
                reject("Wrong Answer")
            }
        },1000)
    })
}
const quiz=document.getElementById("quiz")
quiz.addEventListener("click",(event)=>{
    if(event.target.classList.contains("option")){
        let answer=event.target.textContent
        checkAnswer(answer)
        .then((msg)=>{
            result.textContent=msg
            showResult(msg,(message)=>{
                console.log(message)
            })
        })
        .catch((err)=>{
            result.textContent=err
            showResult(err,(message)=>{
                console.log(message)
            })
        })
    }
})

const timer=document.getElementById("timer")
let timer1=setInterval(()=>{
    timeLeft--
    timer1.textContent=`Time Left: ${timeLeft}`
    if(timeLeft===0){
        clearInterval(timer1)
        result.textContent="Time Over!"
        quiz.innerHTML="<h3>Quiz Closed</h3>"
    }
},1000)