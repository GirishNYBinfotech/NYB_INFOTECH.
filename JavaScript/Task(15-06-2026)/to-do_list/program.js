let addbtn=document.getElementById("addbtn")
let taskinput=document.getElementById("taskinput")
let tasklist=document.getElementById("tasklist")
addbtn.addEventListener("click",function(){
    let task=taskinput.value
    if(task!==""){
        let li=document.createElement("li")
        li.innerText=task
        let deletebtn=document.createElement("button")
        deletebtn.innerText="Delete"
        deletebtn.addEventListener("click",function(){
            li.remove()
        })
        li.appendChild(deletebtn)
        tasklist.appendChild(li)
        taskinput.value=""
    }
})