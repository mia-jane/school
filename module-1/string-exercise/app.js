// var hello = ("Hello")
// var upperHello = hello.toUpperCase()
// var lowerHello = hello.toLowerCase()
// var newHello = upperHello + lowerHello
// console.log(newHello)

// var hello = "Hello"
// var helloWorld = "Hello World"

// function divideDown(string){
//     const result = Math.floor(string.length / 2)
//     console.log(result)
// }
// divideDown(hello)
// divideDown(helloWorld)

// function firstHalf(string){
//     const result= Math.floor(string.length / 2)
//     var halfString = string.slice(0,result)
//     console.log(halfString)
// }

// function helloHalf(string){
//     const result = Math.floor(string.length / 2)
//     const firstHalf = string.slice(0,result)
//     const upperHello = firstHalf.toUpperCase()
//     // console.log(firstHalf)
//     var secondHalf = string.slice(result,[string.length])
//     // console.log(secondHalf)
//     const lowerHello = secondHalf.toLowerCase()
//     const newHello = upperHello + lowerHello
//     console.log(newHello)
// }
// helloHalf(hello)
// helloHalf(helloWorld)

var sentence = ("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

var sentenceArr = sentence.split(" ")
console.log(sentenceArr)