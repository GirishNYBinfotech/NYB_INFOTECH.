//for loop
let fruits=["apple","banana","mango"]
for (let i = 0; i < fruits.length; i++) 
    console.log(fruits[i])

//for of loop
let animals= ["tiger","lion","cat","cow"]
for (let animal of animals) 
    console.log(animal)


//forEach loop
let phones=["vivo","poco","realme","nokia"]
phones.forEach(phone=>console.log(phone))
phones.forEach((phones,index)=>{
    console.log(index,phones)
})