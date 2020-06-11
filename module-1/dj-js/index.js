//blue when mouse hovers
//red when mouse button held down
//yellow when mouse button is let go
//green on double click
//orange when scrolling

var square = document.querySelector("#box")

function blueHover() {
    box.style.backgroundColor = "blue"
}
function holdRed() {
    box.style.backgroundColor = "red"
}
function releaseYellow() {
    box.style.backgroundColor = "yellow"
}
function dblClickGreen() {
    box.style.backgroundColor = "green"
}
function scrollOrange() {
    box.style.backgroundColor = "orange"
}
square.addEventListener("mouseover", blueHover)
square.addEventListener("mousedown", function() {
    box.style.backgroundColor = "red"
})
square.addEventListener("mouseup", releaseYellow)
square.addEventListener("dblclick",dblClickGreen)
document.addEventListener("scroll",scrollOrange)

document.addEventListener("keydown",function() {
    if(event.which === 66) {
        square.style.backgroundColor = "blue"
    }
})
document.addEventListener("keydown", function() {
    if(event.which === 82) {
        box.style.backgroundColor = "red"
    }
})
document.addEventListener("keydown", function() {
    if(event.which === 89) {
        box.style.backgroundColor = "yellow"
    }
})
document.addEventListener("keydown", function() {
    if(event.which === 71) {
        box.style.backgroundColor = "green"
    }
})
document.addEventListener("keydown", function() {
    if(event.which === 79) {
        box.style.backgroundColor = "orange"
    }
})


