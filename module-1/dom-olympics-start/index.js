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

