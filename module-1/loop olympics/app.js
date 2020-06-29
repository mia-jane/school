//preliminaries
for( i = 0; i <= 9; i++){
    console.log(i)
}
for( i = 9; i >= 0; i--){
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for(i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//Bronze

var numberArray = [ ]
for( i = 0; i <= 9; i++){
    numberArray.push(i)
}
console.log(numberArray)

for( i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newFruit = [ ]
for( i = 0; i < fruit.length; i += 2){
    newFruit.push(fruit[i])
}
console.log(newFruit)

silver
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

var names = [ ]
var occupations = [ ]
for( i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupations)

var everyOtherName = [ ]
for(i = 0; i < peopleArray.length; i += 2){
    everyOtherName.push(peopleArray[i].name)
}
console.log(everyOtherName)

var everyOtherOccupation = [ ]
for( i = 1; i < peopleArray.length; i += 2){
    everyOtherOccupation.push(peopleArray[i].occupation)
}
console.log(everyOtherOccupation)

