//1
const numbers = [2, 5, 100]
const doubleNumbers = numbers.map(function(num){
    return num * 2
})
console.log(doubleNumbers)
//2
const numberStrings = numbers.map(function(num){
    return num.toString()
})
console.log(numberStrings)
//3
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizedNames = names.map(function(name){
    return name.toUpperCase()
})
console.log(capitalizedNames)
//4
const users = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const namesOnly = users.map(function(user){
    return user.name
})
console.log(namesOnly)
//5
const goToTheMatrix = users.map(function(user){
    if (user > 18){
        return user.name + " can go to The Matrix"
    } else {
        return user.name + " is under age"
    }
})
console.log(goToTheMatrix)
//6
const inElements = users.map(function(user){
    const nameElement = document.createElement("h1")
    const test = nameElement.textContent = user.name
    document.body.append(nameElement)
    const ageElement = document.createElement("h2")
    const test2 = ageElement.textContent = user.age
    document.body.append(ageElement)
    console.log(nameElement)
    return nameElement + ageElement
})
console.log(inElements)