// var peopleArray = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]
// const olderThan18 = peopleArray.filter(function(person){
//     if(person.age >= 18){
//         return true
//     }
// })
// console.log(olderThan18)

// olderThan18.sort(function(a, b){
//     return a.lastName.localeCompare(b.lastName)
// })
// console.log(olderThan18)

// const finalResult = olderThan18.map(function(person){
//     var ageString = person.age.toString()
//     return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
// })
// console.log(finalResult)


const sayTie = (game) => {
    game.every((x) => x === game[0]) ? console.log('tie') : console.log('winner')
}
const game1 = ['S', 'S']

sayTie(game1)

// const isEqual = (x) => x === "R"

// console.log(game1.every(isEqual))

// game1.every(isEqual) ? console.log('tie') : console.log('winner')