//1.if
let a=10
if (a%2==0){
    console.log("can vote")
}
//2.ifelse
var b=1000
if (b<=800){
    console.log("affortable price")
}
else{
    console.log("not affortable")
}

//3.if else if
let c=60
if(c>90){
    console.log("A grade")
}
else if(c>80){
    console.log("B grade")
}
else if(c>70){
    console.log("C grade")
}
else{
    console.log("D grade")
}
//4.swith
let age=20
switch(true){
    case (age>=18):
        console.log("child")
        break;
        case (age>=40):
            console.log("Teen")
            break;
            case (age>=100):
            console.log("Adult")
            default:
                console.log("invalid age")
       
}

//5. ternary
let num = 0;

let result = num > 0 ? "Positive" : 
             num < 0 ? "Negative" : 
             "Zero"

console.log(result);

let age1 = 20;

let category = age1 < 13 ? "Child" :
               age1 < 20 ? "Teen" :
               age1 < 60 ? "Adult" :
               "Senior";

console.log(category);