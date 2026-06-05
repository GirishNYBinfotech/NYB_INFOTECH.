console.log(this)

//inside the object
const person={
  name: "Girish",
  g: function () {
    console.log(this.name)
  }
}
person.g()

//inside the function
function show(){
  console.log(this)
}
show()

//inside the arrow function
const per={
  name:"Girish",
  person1:()=>{
    console.log(this)
  }
}
per.person1()

//change of this refrence
//call
let obj1={
    name1:"girish",
    fun:function ca(x,y) {
    console.log(this)
    console.log(x+y)
}
}
obj1.fun.call(obj1,5,6)

//apply
function ca(city){
  console.log(this.name2,"from",city)
}
const user2={
  name2:"Girish"
}
ca.apply(user2,["hyd"])

//bind
function bi(){
  console.log(this.name)
}
const user3={
  name:"Girish"
}
const Function=bi.bind(user3)
Function()

//passing this as an argume
function t(a){
    console.log("hello")
    console.log(a)
}
t(this)


const o1={
    name:"Giri",
    show() {
        t(this)
    }
}
o1.show()