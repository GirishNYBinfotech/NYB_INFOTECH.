//Ternary
let num=4
num>10?console.log("num is greater than 10"):console.log("num is lessthan 10")

//to check grades
let marks = 85
let grade = (marks >= 90) ? "A" :(marks >= 75) ? "B" :(marks >= 50) ? "C" : "Fail"
console.log(grade)

//to know weekdays
let day =5
day ===1?console.log("Monday"):day===2?console.log("tuesday"):
day===3?console.log("wednesday"):day===4?console.log("Thursday"):
day===5?console.log("Friday"):day===6?console.log("Saturday"):
day===7?console.log("Sunday"):console.log("invalid day")

//age
let age = 45
let category=(age < 13)?"Child":(age < 20)?"Teenager":(age < 60)?"Adult":"Senior Citizen";
console.log(category);

//login
let Login=true
let message=Login?"Welcome User":"Please Login"
console.log(message)