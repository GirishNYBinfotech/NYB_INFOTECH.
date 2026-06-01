//loops
let a = [1, 2, 3, 4, 5]
for (let x = 0; x <= a.length; x++) {
    console.log(x)
}

for (var i = 10; i >= 1; i--) {
    console.log(i);
}

for (let y = 0; y <= 10; y++) {
    if (y % 2 == 0) {
        console.log("even number", y)
    }
}

for (var z = 10; z >= 0; z--) {
    if (z % 2 != 0) {
        console.log("odd numbers in reverse 10-0", z)
    }
}

//while loop
let num=2
while (num <= 10) {
    console.log(num)
    num+=2
}

let b= 1
while (b<=5) {
    console.log(b)
    b++
}

let c=1
let sum=0
while (c<= 5) {
    sum += c
    c++
}
console.log(sum)

//table
for (let i=2;i<=2; i++) {
    console.log("Table of", i)
    let j=1
    while (j<=10) {
        console.log(i + " x " + j + " = " + (i * j))
        j++
    }
}

//do while loop
let d= 2
do {
    console.log(d)
    d+= 2
} while (d<= 10)

let e=1
do {
    console.log("Hello");
    e++
} while (e<= 5){
    console.log("DONE")
}

//for of
let nam="girish"
for (let n of nam){
    console.log(n)
}

console.log("for of")
let fruits = ["Apple", "Mango", "Orange"]
for (let fruit of fruits) {
    console.log(fruit)
}


//for in
console.log("for in")
for (let f in fruits) {
    console.log(f)
}


let student = {
    name: "Girish",
    age: 22,
    city: "Vijayawada"
}
for (let key in student) {
    console.log(key, ":", student[key])
}

