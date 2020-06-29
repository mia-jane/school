
//var form = document["math-form"]
var addButton = document.getElementById("add-button")
addButton.addEventListener("click", function(){
    event.preventDefault()
    var field1 = document.getElementById("num1").value
    var field2 = document.getElementById("num2").value
    var result = parseFloat(field1) + parseFloat(field2)
    if(!isNaN(result)){
        var answer = document.getElementById("result")
        answer.textContent = result
    }
})

var subtract = document.getElementById("sub-button")
subtract.addEventListener("click", function(){
    event.preventDefault()
    var subField1 = document.getElementById("sub-num1").value
    var subField2 = document.getElementById("sub-num2").value
    var subResult = parseFloat(subField1) - parseFloat(subField2)
    if(!isNaN(subResult)){
        var subAnswer = document.getElementById("sub-result")
        subAnswer.textContent = subResult
    }
})

var multiply = document.getElementById("mul-button")
multiply.addEventListener("click", function(){
    event.preventDefault()
    var mulField1 = document.getElementById("mul-num1").value
    var mulField2 = document.getElementById("mul-num2").value
    var mulResult = parseFloat(mulField1) * parseFloat(mulField2)
    if(!isNaN(mulResult)){
        var mulAnswer = document.getElementById("mul-result")
        mulAnswer.textContent = mulResult
    }
})