var readlineSync = require("readline-sync")

var isAlive = true
console.log("Hello!!")
var name = readlineSync.question("May I have your name? ")
console.log("... " + name + "? That's a nice name.")
if (readlineSync.keyInYN("Want me to show you the forest?  It has lots of things you've never seen before.")){
    //Y key was pressed
    console.log("...yes?  Okay, let's begin ^-^")
    isAlive = true
} else {
    console.log("... Oh.  That's a shame.  It would have been really fun")
    isAlive = false
}

while (isAlive === true){
    var pressW = readlineSync.question("please press w to walk")
}