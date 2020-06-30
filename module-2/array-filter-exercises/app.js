const numbers = [3, 6, 8, 2]
//1
const fiveAndGreaterOnly = numbers.filter(function(num){
    if(num >= 5){
        return true
    }
})
console.log(fiveAndGreaterOnly)
//2
const evenOnly = numbers.filter(function(num){
    if(num % 2 === 0){
        return true
    }
})
console.log(evenOnly)
//3
const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveCharactersOrFewer = strings.filter(function(string){
    if(string.length <= 5){
        return true
    }
})
console.log(fiveCharactersOrFewer)
//4
const people = [
    { name: "Angelina Jolie", member: true, age: 80 },
    { name: "Eric Jones", member: false, age: 2 },
    { name: "Paris Hilton", member: true, age: 5 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }
]
const illuminatiClub = people.filter(function(person){
    if(person.member === true){
        return true
    }
})
console.log(illuminatiClub)
//5
const oldEnough = people.filter(function(person){
    if(person.age > 18){
        return true
    }
})
console.log(oldEnough)