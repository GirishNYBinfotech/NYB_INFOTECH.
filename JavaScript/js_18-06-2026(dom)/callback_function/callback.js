//Callback function
function hello(s){
    console.log(s)
    console.log("hello")
}
function hello1(a,b,c){
    console.log("hello1")
    a+b
}
hello1(2,1,hello(5))

function calculate(a,b,callback){
    callback(a,b)
}
calculate(10, 20,function(x,y){
    console.log(x+y)
})

function welcome(name,greeting){
    console.log("Welcom " + name)
    greeting()
}
welcome("Girish",function(){
    console.log("Have a nice day")
})

function processArray(arr,numbers){
    for (let value of arr){
        numbers(value)
    }
}
processArray([10,20,30],function(item){
    console.log(item)
})

function checkNumber(num,number){
    if (num%2===0){
        number(num)
    }
}
checkNumber(8,function(n){
    console.log(n+" is even")
})

setTimeout(function(){
    console.log("Executed after 2 seconds")
},2000)
console.log("Start")

let arr1=[1, 2, 3, 4]
arr1.forEach(function(value){
    console.log(value)
})

//payment
function makePayment(amount,hello){
    console.log("Payment Started...")
    setTimeout(()=>{
        console.log("Payment of ₹" + amount + " Successful")
        hello()
    },3000)
}
function placeOrder(){
    console.log("Order Placed")
}
makePayment(500, placeOrder)