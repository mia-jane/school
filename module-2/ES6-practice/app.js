
//0
function runForLoop(pets) {
    let name = "john"
    let age=101
    const man = {name, age}
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

// runForLoop(["cat", "dog"]);
// !((a, b) => {
//     console.log (a + b)
// })(3,6)
//1

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map ((carrot) => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))


// (a, b) => {
//     return a + b
// }

// var answer = sum(3,5)
// console.log(answer)

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFamily =(arr) => {
    return arr.filter(person => person.friendly)
    }

console.log(filterForFamily(people))


const doMathSum = (a, b)  => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}
console.log(doMathSum(2,3))
console.log(produceProduct(4,5))

// let firstName = "jane"
// let lastName = "doe"
// let age = 40

const printString = (firstName, lastName, age) => console.log(`hello ${firstName} ${lastName}, how does it feel to be ${age}`)
console.log(printString("becky", "doe", 15))
console.log(printString("ali", "no", 18))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => {return arr.filter(animal => animal.type ==="dog")}
 console.log(filterForDogs(animals))

const greeting = (name, location) => `Hi ${name}!
Welcome to ${location}.
I hope you enjoy your stay.`
console.log(greeting("jane", "hawii"))