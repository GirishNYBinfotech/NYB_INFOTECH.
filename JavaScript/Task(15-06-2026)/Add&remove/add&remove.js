//addinga and removing item
//adding a item
let li=document.createElement("li")
li.innerText="Orange"
let list=document.getElementById("list")
list.appendChild(li)

//removing item
let list1=document.getElementById("list")
list1.removeChild(list.lastElementChild)
