//Conditional statements 
//1.if
if(true){
    console.log("true executed")
}
let num=10
if(num<100){
    console.log("num is less than 100")
}

//2.if else
let age=18
if(age>=18){
    console.log("Eligible for vote")
}
else{
    console.log("Not eligible for vote")
}

let number=3
if(number%2!=0){
    console.log("it is an odd number")
}
else{
    console.log("it is an even nuber")
}
let number1=10
if(number1%2==0){
    console.log("it is an even number")
}
else{
    console.log("it is an odd number")
}


//3.elseif ladder
let c=70
if(c>90){
    console.log("A grade")
}
else if(c>80){
    console.log("B grade")
}
else if(c>70){
    console.log("C grade")
}
else if(c>=60){
    console.log("D grade")
}
else{
    console.log("fail")
}

let age1 = 20
if (age1 >= 50) {
    console.log("Old age")
} 
else if (age1 >= 30) {
    console.log("Adult")
}
 else if (age1 >= 18) {
    console.log("Teen age")
}
 else {
    console.log("Child")
}

//4.switch
let grade=7
switch (grade){
    case 10:
        console.log("good")
        break;
        case 9:
            console.log("average")
            break;
            case 8:
                console.log("better")
                break;
                default:
                    console.log("need to improve")
}

var day=5
switch (day) {
    case 1:
        console.log("Monday")
        break;
        case 2:
            console.log("Tuesday")
            break;
            case 3:
                console.log("Wednesday")
                break;
                case 4:
                    console.log("Thursday")
                    break;
                    case 5:
                        console.log("Friday")
                        break;
                        case 6:
                            console.log("Saturday")
                            break;
                            case 7:
                                console.log("Sunday")
                                break;
                                default:
                                    console.log("Invalid day")
}

//5.Ternary 
let b=5
b<100?console.log("b is lessthan 100"):console.log("b is greatherthan 100")

let  B=400
B<500? console.log("will added delivery fee"):
B>500? console.log("above 500 delivery free"):console.log("payment failed")