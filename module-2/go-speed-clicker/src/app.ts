const button = document.getElementById("click-button") as HTMLButtonElement
const result = document.querySelector(".result") as HTMLSpanElement
let count = +(localStorage.getItem("clicks") as string)
button.textContent = `${count}`
button.onclick = function() {
    console.log("hi")
    count += 1
    localStorage.setItem("clicks", count.toString())
    button.textContent = `${count}`
}

// var button = document.getElementById("click-button")
// var result = document.querySelector(".result")
// var count = +localStorage.getItem("clicks")
// button.textContent = count
// button.onclick = function() {
//     count += 1
//     localStorage.setItem("clicks", count)
//     button.textContent = count
// }