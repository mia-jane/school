const numbers = [1, 3, 5, 2, 90, 20]
//1
numbers.sort(function(a,b){
    return a - b
})
console.log(numbers)
//2
numbers.sort(function(a,b){
    return b - a
})
console.log(numbers)
//3
const arr = ["dog", "wolf", "by", "family", "eaten"]
arr.sort(function(a, b){
    return a.length - b.length
})
console.log(arr)
//4
arr.sort(function(a, b){
    return a.localeCompare(b)
})
console.log(arr)
//5
const users = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

users.sort(function(a, b){
   return a.age-b.age
})
console.log(users)