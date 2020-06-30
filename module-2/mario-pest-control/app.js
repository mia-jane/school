var form = document.getElementById("baddie-count-form")
var submitButton = document.querySelector("button")

submitButton.addEventListener("click", function(){
    event.preventDefault()
    var goombaNumber = form.elements["goomba-count"].value
    var goombaTotal = goombaNumber * 5
    var bobombsNumber = form.elements["bob-omb-count"].value
    var bombTotal = bobombsNumber * 7
    var cheepNumber = form.elements["cheepcheep-count"].value
    var cheepTotal = cheepNumber * 11
    var totalSum = goombaTotal + bombTotal + cheepTotal
    var totalCost =  document.getElementById("total-cost")
    totalCost.textContent= "Price = " + totalSum + " coins"
    totalCost.style.fontSize = "30px"
})
