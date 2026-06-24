//error handling
try{
     console.log(h)
    
}
catch(error){
    console.log(error)
}
finally{
    console.log("finally block executed")
}

try{
    console.log(hai)
     throw("throw block")
}
catch(e){
    console.log(e)
    console.log(e.message)
    // console.log("catch block ")
}
finally{
    console.log("final block")
}

function checkAge(age){
    if(age<18){
        throw("Age must be 18 or above")
    }
    return "Eligible"
}
try{
    console.log(checkAge(15))
} 
catch(error){
    console.log(error)
}

try{
    console.log("Opening file")
    throw("File not found")
} 
catch (e){
    console.log(e)
}
finally {
    console.log("Closing file")
}

//multi try and catch
try{
    console.log("First try block")
    throw("First error")
} 
catch (error){
    console.log(error)
}

try{
    console.log("Second try block")
    throw("Second error")
}
catch (error) {
    console.log(error)
}

function divide(a,b){
    try{
        if(b===0){
            throw("Cannot divide by zero")
        }
        return a/b
    } 
    catch(err){
        console.log(err)
    }
}
divide(20,0)

function withdraw(balance,amount){
    try{
        if(amount>balance){
            throw("Insufficient balance")
        }
        console.log(`Withdrawal ${amount} ruppes Successful`)
    } 
    catch(error){
        console.log(error)
    }
}
withdraw(1000,500)

function m(marks){
    try {
    if (marks < 0 || marks > 100){
        throw "Invalid Marks"
    }
    console.log("Valid Marks")
} 
catch (error){
    console.log(error)
}
}
m(80)


function P(password){
    try {
        if (password.length<6) {
            throw "Password is too short"
        }
        console.log("Valid Password")
    } catch (error){
        console.log(error)
    }
}
P("12323456")