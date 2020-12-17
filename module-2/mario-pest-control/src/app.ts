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

const form = document.getElementById("baddie-count-form") as HTMLFormElement
const submitButton = document.querySelector("button") as HTMLButtonElement

submitButton.addEventListener("click", function(event){
    event.preventDefault()
    const goombaNumber = +(form.querySelector('input[name="goomba-count"]') as HTMLInputElement).value
    const goombaTotal = goombaNumber * 5
    const bobombsNumber = +(form.querySelector('input[name="bob-omb-count"]') as HTMLInputElement).value
    const bombTotal = bobombsNumber * 7
    const cheepNumber = +(form.querySelector('input[name="cheepcheep-count"]') as HTMLInputElement).value
    const cheepTotal = cheepNumber * 11
    const totalSum = goombaTotal + bombTotal + cheepTotal
    const totalCost =  document.getElementById("total-cost") as HTMLDivElement
    totalCost.textContent= "Price = " + totalSum + " coins"
    totalCost.style.fontSize = "30px"
})



