const numbers = [3, 6, 8, 2]
const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]
const people = [
    { name: "Angelina Jolie", member: true, age: 80 },
    { name: "Eric Jones", member: false, age: 2 },
    { name: "Paris Hilton", member: true, age: 5 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }
]
//1
const greaterThanFive = (arr) => {
    return arr.filter(n => n >= 5)
}
console.log(greaterThanFive(numbers))
//2
const evens = (arr) => {
    return arr.filter(n => n % 2 === 0)
}
console.log(evens(numbers))
//3
const fiveCharactersAndFewer = (arr) => {
    return arr.filter(n => n.length <= 5)
}
console.log(fiveCharactersAndFewer(strings))
// //4
const illuminatiClub = (arr) => {
    return arr.filter(n => n.member)
}
console.log(illuminatiClub(people))
//5
const oldEnough = (arr) => {
    return arr.filter(n => n.age > 18)
}
console.log(oldEnough(people))