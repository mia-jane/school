//var clicks = 0
var button = document.getElementById("click-button")
var result = document.querySelector(".result")
var count = +localStorage.getItem("clicks")
button.textContent = count
button.onclick = function() {
    count += 1
    localStorage.setItem("clicks", count)
    button.textContent = count
}