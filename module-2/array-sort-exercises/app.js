const numbers = [1, 3, 5, 2, 90, 20]
const words = ["dog", "wolf", "by", "family", "eaten"]
const users = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
//1
const orderLeastToGreatest = (arr) => {arr.sort((a, b) => a - b)}
console.log(orderLeastToGreatest(numbers))

//2
const greatestToLeast = (arr) => {arr.sort((a, b) => b - a )}
console.log(greatestToLeast(numbers))

//3
const orderByLength = (arr) => {arr.sort((a, b) => a.length - b.length)}
console.log(orderByLength(words))

//4
const sortAlphabetically = (arr) => {arr.sort()}
console.log(sortAlphabetically(words))

//5
const sortByAge = (arr) => {arr.sort((a, b) => a.age - b.age)}
console.log(sortByAge(users))