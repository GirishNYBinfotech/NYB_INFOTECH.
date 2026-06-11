let student={
    name:"Girish",
    age:22,
    marks:89.7,
    address:{
        city:"Kakinada"
    }
}
// Shallow Copy
let shallowCopy={ ...student }
// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(student))
shallowCopy.address.city="Vizag"
deepCopy.address.city="Hyderabad"
console.log("Student Details:")
for (let key in student) {
    console.log(`${key}:${student[key]}`)
}
let today = new Date()
console.log(`Date: ${today.toDateString()}`)
console.log(`Rounded Marks:${Math.round(student.marks)}`)
let course=new String("JavaScript")
console.log(`Course:${course.toUpperCase()}`)
console.log("Original Object:",student)
console.log("Shallow Copy:",shallowCopy)
console.log("Deep Copy:",deepCopy)