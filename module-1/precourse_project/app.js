//Data Types 
//Strings - " " ' ' good for words, verbaige
//Numbers - numerical values; negative infinity tyo positive
//Boolean - true or false
//Arrays [] encapsulated by square brackets - for lists 
//Objects {} encapsulated by curly brackets - for detailed items

if (3 === 3) {
    console.log("3 equals 3")
} else {
    console.log("3 does not equal 3")
}

var characters = ["red riding hood", "the wolf", "grandma", "the woodsman"]
console.log(characters[1])

for (var i = 0; i < characters.length; i++) {
    console.log(characters[i])
}

var creature = {
    name: "The Wolf",
    age: 3,
    address: {
        street: "332 Wilderness Ln",
        city: "the black forest"
    }
}

console.log(creature.age)
console.log(creature.address.city[0])

document.getElementById("button").addEventListener('click', function () {
    document.body.style.backgroundColor = "floralwhite"
})


var color = "blue"

if (color === "yellow") {
    console.log("the color is blue")
} else if (color === "blue") {
    console.log("the color is purple")
} else {
    console.log("the color is all of the above")
}

