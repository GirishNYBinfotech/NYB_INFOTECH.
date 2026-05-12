//Loops:-

//1.While loop
let i=0
let count=0
while (count <=10){
    if(i%2==0){
    console.log(i)
    console.log(count)
}
i+=1
count++
}
//2.do-while
do {
    console.log("hello")
} while (false)
    console.log("hi")
//3.for loop
for (let i=4;i<=9;i++){
    console.log(i)
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
//4.for of
let fruits = ["apple", "banana", "mango"]
for (let fruit of fruits) {
    console.log(fruit)
}

//5.for in
let person = {
    name: "Girish",
    age: 22,
    city: "Vijayawada"
}
for (let key in person) {
    console.log(key, ":", person[key])
}
//6.for each