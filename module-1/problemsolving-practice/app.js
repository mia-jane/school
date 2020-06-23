
var arrayOfWords = ["cat", "dog", "cow", "ferret"]
function addS(array){
    var newArray = []
    for (i = 0; i < array.length; i++)
        console.log(array[i] + "s")
        newArray += array[i]
}
addS(arrayOfWords)

function isDivisible(num1, num2){
    if(num1 %num2 === 0){
        console.log(num1 + " is divisible by " + num2)
    } else{
        console.log (num1 + " is not divisible by " + num2)
    }
}

var firstTry = isDivisible(6, 3)
var secondTry = isDivisible(7, 5)