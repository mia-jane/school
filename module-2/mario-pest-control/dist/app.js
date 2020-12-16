"use strict";
// const form = document.getElementById("baddie-count-form")
// const submitButton = document.querySelector("button")
// submitButton.addEventListener("click", function(){
//     event.preventDefault()
//     const goombaNumber = form.elements["goomba-count"].value
//     const goombaTotal = goombaNumber * 5
//     const bobombsNumber = form.elements["bob-omb-count"].value
//     const bombTotal = bobombsNumber * 7
//     const cheepNumber = form.elements["cheepcheep-count"].value
//     const cheepTotal = cheepNumber * 11
//     const totalSum = goombaTotal + bombTotal + cheepTotal
//     const totalCost =  document.getElementById("total-cost")
//     totalCost.textContent= "Price = " + totalSum + " coins"
//     totalCost.style.fontSize = "30px"
// })
var form = document.getElementById("baddie-count-form");
var submitButton = document.querySelector("button");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    // const goombaNumber = form["goomba-count"].value;
    var goombaNumber = +form.querySelector('input[name="goomba-count"]').value;
    var goombaTotal = goombaNumber * 5;
    var bobombsNumber = +form.querySelector('input[name="bob-omb-count"]').value;
    var bombTotal = bobombsNumber * 7;
    var cheepNumber = +form.querySelector('input[name="cheepcheep-count"]').value;
    var cheepTotal = cheepNumber * 11;
    var totalSum = goombaTotal + bombTotal + cheepTotal;
    var totalCost = document.getElementById("total-cost");
    totalCost.textContent = "Price = " + totalSum + " coins";
    totalCost.style.fontSize = "30px";
});
