//call
function data(city, country,bye) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country} and ${bye}`)
}
const person={
  name: "Girish"
}
data.call(person, "hyd", "India","Bye")

//apply
function data1(city,country){
    console.log(`I am ${this.name} from ${city},${country}`)
}
var person1={
    name:"mahesh"
}
data1.apply(person1,["bnglr","India"])

//bind
function data2(city,country){
    console.log(`I am ${this.name} from ${city},${country}`)
}
let person2={
    name:"ravi"
}
let fulldata=data2.bind(person2,"chennai","India")
fulldata()