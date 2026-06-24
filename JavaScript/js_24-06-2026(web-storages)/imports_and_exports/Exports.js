//imports and exoprts
//default
//named

//default
export default function good(a,b){
    return a+b
}

import bad from "./Imports.js"

bad()

//named exports
export function hello(){
    console.log("hello")
}

export function hai(){
    console.log("hai")
}

export function bye(){
    console.log("by")
}


export const name = "Girish"
export function greet() {
    console.log("Welcome")
}

export function add(a,b){
    return a+b
}
export function sub(a,b){
    return a-b
}

export let obj={
    name:"girish",
    loc:"hyd"
}

export let arr=[1,2,3,4,'hai']

export let a=100
export let b=20
export function mul(x,y){
    return x*y
}