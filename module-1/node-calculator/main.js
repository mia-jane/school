const readlineSync = require('readline-sync');
function add(num1, num2) {
    return +num1 + +num2
}
function mul(num1, num2) {
    return +num1 * +num2
}
function div(num1, num2) {
    return +num1 / +num2
}
function sub(num1, num2) {
    return +num1 - +num2
}
var num1 = readlineSync.question("Please enter your first number.")
console.log(num1)
var num2 = readlineSync.question("Please enter your second number.")
console.log(num2)

operations = ["add", "sub", "mul","div"],
index = readlineSync.keyInSelect(operations, "Please enter the operation to perform:")
if(operations[index] == "add") {
    var sumResult = add(num1, num2)
    console.log("The result is: " + sumResult)
} else if(operations[index] == "sub") {
    var subResult = sub(num1, num2)
    console.log("the result is: " + subResult)
} else if(operations[index] == "mul") {
    var mulResult = mul(num1, num2)
    console.log("The result is: " + mulResult)
} else if(operations[index] == "div") {
    var divResult = div(num1, num2)
    console.log("The result is: " + divResult)
}

