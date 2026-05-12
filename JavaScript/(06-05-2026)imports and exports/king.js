//exports

//1.default exports:
export default function king(a,b){
    return a-b
}
console.log(king(2,1))

import good from "./queen.js"
console.log(good)


//named export

 var arr=[1,2,3,4]
 export {arr}
console.log(arr)
export function queen(){

} 

export function h1(){

}

export function h2(){

}

export var a=10

