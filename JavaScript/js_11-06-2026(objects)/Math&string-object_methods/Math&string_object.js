//Math
let a=100
let b=10.4
let c=10.6
console.log(Math.floor(b))
console.log(Math.floor(c))
console.log(Math.round(b))
console.log(Math.round(c))
console.log(Math.ceil(b))
console.log(Math.ceil(c))
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*100))
console.log(Math.sqrt(9))
console.log(Math.pow(2,3))

//string object methods
//to find the length of an string
let str=" Hello World,hai "
console.log(str.length)
//to find the length of an array
let arr=[1,2,3,4,4]
console.log(arr.length)

//to change a string into the upper case
let d=str.toUpperCase()
console.log(d)
//to change a string into lowercase
let e=d.toLowerCase()
console.log("to lower case: ",e)

//slice //to get the specfic part from string
console.log(str.slice(0,6))
console.log(str.slice(-4))//if we use - then counting will come from end

//trim //it is used to remove the wide space front and end of a string
console.log(str.trim())

//sub string //returns charcters between two chacters
console.log(str.substring(0, 4))
console.log(str.substring(3))//it will print from 3rd index

//replace //used to replace the string
console.log(str.replace("World","girish"))

//charAt //used to get character at a specified index.
console.log(str.charAt(4))

//index of //to know the index of the given string
console.log(str.indexOf("W"))

//includes //Checks if a string contains a value.And it returns true and false
console.log(str.includes("Hello"))

//split //Converts a string into an array.
console.log(str.split(","))