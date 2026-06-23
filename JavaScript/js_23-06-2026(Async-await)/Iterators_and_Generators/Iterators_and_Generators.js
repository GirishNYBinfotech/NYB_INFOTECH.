//itterator
let a=[1,2,3,4,5]
let ab=a[Symbol.iterator]()
console.log(ab.next())
console.log(ab.next())
console.log(ab.next())
console.log(ab.next())
console.log(ab.next())
console.log(ab.next()) 

let b=[2,3,[6,7,[4,5]]]
let bc=b[Symbol.iterator]()
console.log(bc.next())
console.log(bc.next())
let b1=bc.next().value
let bc1=b1[Symbol.iterator]()
console.log(bc1.next())
console.log(bc1.next())
let b2=bc1.next().value
let bc2=b2[Symbol.iterator]()
console.log(bc2.next())
console.log(bc2.next())

//generators
function hello(){
    console.log("hai")
    console.log("hello")
    return "bye"
    console.log("greeting")
}
console.log(hello())

function* hello1(){
    yield 'hai'
    yield "hello"
    yield "bye"
}
let h=hello1()
console.log(h.next())
console.log(h.next())
console.log(h.next())
console.log(h.next())

function* count(){
    let i=1
    while (true){
        yield i++
    }
}
var gen=count()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

