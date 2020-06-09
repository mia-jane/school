const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(name + "... you must escape before it's too late")

var hasEscaped = false
var haveKey = false
function death () {
    console.log("You died")
    hasEscaped = false
}
function foundKey () {
    console.log("You found the key")
    hasEscaped = false
}
function escape () {
    if(haveKey === true) {
        console.log("You escaped!")
        hasEscaped = true
    } else {
        console.log("the door is locked")
        hasEscaped = false
    }
}

while (hasEscaped === false) {
    var readlineSync = require("readline-sync")
        choice = ["Put hand in hole", "Find the key, or", "Open the door"]
        index = readlineSync.keyInSelect(choice, "What will you do?")
        if (choice[index] === "Put hand in hole") {
            var gameOver = death ()
        } else if (choice[index] === "Find the key, or") {
                foundKey ()
                haveKey = true
        } else if (choice[index] === "Open the door") {
                escape ()
        }
}
    
    



