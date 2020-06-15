//qualifier
document.querySelector("#header").classList.add("header")
var headerTitle = document.getElementById("header")

var h1 = document.createElement("h1")
h1.textContent = "JavaScript made this!!"
headerTitle.append(h1)

var subTitle = document.createElement("div")
headerTitle.append(subTitle)


var namePart = document.createElement("span")
namePart.className = "name"
namePart.textContent = "Mia"
namePart.style.padding = "5px"
subTitle.appendChild(namePart)

var headerPart = document.createElement("span")
headerPart.textContent = "wrote the JavaScript"
subTitle.appendChild(headerPart)

//bronze
var leftMessage = document.querySelectorAll(".left")
console.log(Array.from(leftMessage))
leftMessage[0].textContent = "Hello :)"
leftMessage[1].textContent = "I like hamsters"

var rightMessage = document.querySelectorAll(".right")
rightMessage[0].textContent = "Hi!"
rightMessage[1].textContent = "Me too. We have so much in common"

var main = document.querySelector("#main")
var messages = document.querySelector(".messages")
var messages2 = document.querySelector(".message")

var clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", function() {
    messages.remove(messages2)
})