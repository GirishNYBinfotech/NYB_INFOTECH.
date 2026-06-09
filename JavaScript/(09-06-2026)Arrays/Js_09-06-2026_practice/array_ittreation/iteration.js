//for loop with arrays
let fruits=["Apple","Banana","Mango","Orange"]
for (let i=0;i<fruits.length; i++) {
    console.log(fruits[i])
}

//while loop wit arrays
let animals=["lion", "cat", "tiger", "cow"]
let i=0
while (i <animals.length) {
    console.log(animals[i])
    i++
}

//dowhile loop with arrays
let num=[20,39,60,57]
let y=0
do{
    console.log(num[y])
    y++
}while(y<num.length)

//forof with array
let phones=["mi","realme","lava","samsung"]
for(phone of phones){
    console.log(phone)
}

//for in with array
for (pho in phones){
    console.log(pho)
}

//forEach
phones.forEach(function(p){
    console.log(p)
})

