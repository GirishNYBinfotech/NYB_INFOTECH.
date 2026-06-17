const menu = document.getElementById("menu")
const addItemBtn = document.getElementById("addItem")
const itemInput = document.getElementById("itemInput")
menu.addEventListener("click", function (e) {
    console.log(e.target.innerText)
})
addItemBtn.addEventListener("click", function () {
    const text=itemInput.value.trim()
    if (text !== "") {
        const newItem=document.createElement("li")
        newItem.textContent=text
        menu.appendChild(newItem)
        itemInput.value=" "
    }
})