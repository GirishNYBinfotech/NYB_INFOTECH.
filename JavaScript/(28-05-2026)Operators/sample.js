//sample program using operator
let itemPrice = 400
let items = 2
let discount = 100;
let total = itemPrice * items
total -= discount
let message = total > 500 ? "Free Delivery" : "Delivery Charges Applied"
console.log(`${'Final Amount:'}`, total)
console.log(message)

//Precedence
let a = 5
let b = 10
let c = a + b * 2
console.log(c)
let result = (a + b) * 2
console.log(result)
let x = 20 / 5 * 2
console.log(x)
