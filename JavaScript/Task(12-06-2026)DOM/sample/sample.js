   function changeText() {
    // Manipulate heading
     document.getElementById("heading").textContent = "JavaScript DOM"

    // Manipulate paragraph
    document.getElementById("para").textContent = "Paragraph changed using JavaScript"

    // Manipulate button
    document.getElementById("btn")
    document.getElementById("btn").innerHTML="<h3> iteams has added</h3>"
    // Manipulate list items
    document.getElementById("fruits").innerText="fruits avaliable"

    document.getElementsByTagName("li")[0].textContent="Item 1:apple"
    document.getElementsByTagName("li")[1].textContent="Item 2:mango"
    document.getElementsByTagName("li")[2].textContent="Item 3:orange"
    }