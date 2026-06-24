//import
import g  from "./Exports.js"

console.log(g(2,3))

export default function bad(){
    console.log("bad")
}

//named imports
import {hello,hai,bye} from "./Exports.js"
hello()
hai()
bye()


import{name,greet} from "./Exports.js"
console.log(name)
greet()

import {add,sub} from "./Exports.js"
console.log(add(10,20))
console.log(sub(20,10))

import {obj,arr} from "./Exports.js"
console.log(obj)
console.log(arr)

import * as multiple from "./Exports.js"
console.log(multiple.a)
console.log(multiple.b)
console.log(multiple.mul(10,20))