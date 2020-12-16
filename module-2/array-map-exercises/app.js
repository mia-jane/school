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


//1
const doubleNumbers = (...numbers) => {
    return numbers.map(n => n * 2)
}
console.log(doubleNumbers(1, 2, 3))


//2
const stringifyNumbers = (...numbers) => {
    return numbers.map(n => n.toString())
}
console.log(stringifyNumbers(1, 2, 3))


//3
const capitalize = ([...names]) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
}
console.log(capitalize(["john", "alice"]))


//4
const namesOnly = (arr) => {
    return arr.map(user => user.name)
}
console.log(namesOnly(users))

// //5
const canGoToMatrix = (arr) => {
    return arr.map(user => user.age > 18 ? `${user.name} can go to the matrix` : `${user.name} is underage`)
}
console.log(canGoToMatrix(users))

// //6
const readyToPutInDom = (arr) => {
    return arr.map(user => `<h1>${user.name}</h1><h2>${user.age}</h2>`)
}
console.log(readyToPutInDom(users))


const inDom = (arr) => {
    return arr.map(user => {
        const username = document.createElement("h1").textContent = user.name + " "
        document.body.append(username)
        const age = document.createElement("h1").textContent = user.age + " "
        document.body.append(age)
    })
}

inDom(users)