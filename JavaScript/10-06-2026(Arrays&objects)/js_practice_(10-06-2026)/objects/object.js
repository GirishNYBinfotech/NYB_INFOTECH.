//objects
//diffrent ways to create an object
//literal way
let obj={
     name:"girish",
    company:"nyb infotech",
    location:"hyd"
}
console.log(obj)

//by using new keyword
let a=new Object()
console.log(a)

//by using constructor
function Person1(name,age,city){
    this.name=name
    this.age=age
    this.city=city
}
let p1=new Person1("Girish",25,"Mumbai")
console.log(p1)

//by using class
class Person{
    constructor(name,age,city) {
        this.name=name;
        this.age=age;
        this.city=city;
    }
}
let p2=new Person("Girish",20,"Hyd")
console.log(p2)

let ba={a:"A",b:"B",c:"C",d:"D",e:"E",f:"F"}
console.log(ba)

//to access the properties
console.log(ba.a)
console.log(ba["d"])

//to update 
ba.e="EE"
console.log(ba)

//to delete
delete ba.e
console.log(ba)

//to add a new property to an object
ba.gh="GH"
console.log(ba)

//nested object
let z={
    name:"girish"
    ,loc:"BNGLR",z1:
    {name:'ravi'
     ,loc:"HYD"
    }
}
console.log(z)
//to access the properties for nested object
console.log(z.z1.loc)
console.log(z["z1"]["name"])


//to update the nested object
z.z1.loc="Chennai"
console.log(z)

//to delete a property from nested object
delete z.z1.name
console.log(z)

//to add a new property to nested array
z.z1.age=25
console.log(z)

//object literals with method
let student={
    name:"Girish",
    age:22,
    g:function(){
        console.log("Hello, my name is " + this.name)
    }
}
student.g()

//adding properties and method dynamically
let car={
    brand: "TATA"
}
car.year = 2024
car.display=function(){
    console.log(this.brand+" "+this.year)
}
car.display()

//updating object prperties
let employee={
    id:101,
    name:"Girish",
    salary:30000
}
employee.salary=45000
console.log(employee)

//deleting object
let product={
    id:1,
    name:"Laptop",
    price:50000
}
delete product.price
console.log(product)

//using loop
let person2={
    name:"Kiran",
    city:"Mumbai",
    age:25
}
for(let key in person2) {
    console.log(key+":"+person2[key])
}
