// Global Scope
var global="Global scope"
function scopeDemo() {
    // Function Scope
    var Function="Function Scope var"
    if(true) {
        // Block Scope
        let blockLet="Block Scope(let)"
        const blockConst="Block Scope(const)"
        console.log("Inside Block:")
        console.log(global)
        console.log(Function)
        console.log(blockLet)
        console.log(blockConst)
    }
    console.log("Inside Function:")
    console.log(global)
    console.log(Function)
    // console.log(blockLet)   // Error blockLet is not defined
    // console.log(blockConst)  // Error blockconst is not defined
}
scopeDemo()
console.log("Outside Function:")
console.log(global)
// console.log(Function);    // Error Function is not defined
// console.log(blockLet);       // Error blockLet is not defined
console.log(blockConst);     // Error blockconst is not defined