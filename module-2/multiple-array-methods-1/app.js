<<<<<<< Updated upstream
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
const olderThan18 = peopleArray.filter(function(person){
    if(person.age >= 18){
        return true
    }
})
console.log(olderThan18)

olderThan18.sort(function(a, b){
    return a.lastName.localeCompare(b.lastName)
})
console.log(olderThan18)

const finalResult = olderThan18.map(function(person){
    var ageString = person.age.toString()
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
})
console.log(finalResult)
||||||| constructed merge base
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
=======
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

// rock scissors
//rock paper
// paper scissors

//abigail wins:
const withRock = ['R', 'S']
const withScissors = ['S', 'P']
const withPaper = ['P','R']

const arraysMatch = function (arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
};

const score = (gameSet) => {
  const abbyWinsScissors = ['S', 'P']
  const abbyWinsRock = ['R', 'S']
  const abbyWinsPaper = ['P', 'R']

  const tally = gameSet.map(game => {
    if(game.every((x) => x === game[0])){
    return "Tie"
    } else if(arraysMatch(game, abbyWinsRock) ){
      return "Abigail"
    } else if(arraysMatch(game, abbyWinsScissors)) {
      return "Abigail" 
    } else if(arraysMatch(game, abbyWinsPaper)) {
      return "Abigail"
    } else {
      return "Benson"
    }
  })
  const reducedScore = tally.reduce((accumulation, current) => {
    if(current === "Abigail"){
      accumulation.Abigail++
    }else if(current === "Benson"){
      accumulation.Benson++
    }else if(current === "Tie"){
      accumulation.Tie++
    }
    return accumulation
  }, {Abigail: 0, Benson: 0, Tie: 0})

  if(reducedScore.Abigail === 1 && reducedScore.Benson === 1 && reducedScore.Tie ===1){
    return "Tie"
  }else if(reducedScore.Tie === 3){
    return "Tie"
  }else if(reducedScore.Abigail >=2){
    return "Abigail"
  }else if(reducedScore.Abigail === 1 && reducedScore.Tie === 2){
    return "Abigail"
  }else {
    return "Benson"
  }
}

//Tie: Abby: 1, Ben: 1, Tie: 1
//Abby: Abby >= 2
//Abby:  Abby: 1 Tie: 2
//Benson: Benson: 1, Tie: 2
//Benson: Benson: >= 2

game1 = [["S", "R"], ["R", "S"], ["R", "S"]]
game2 = [["R", "R"], ["R", "S"], ["S", "R"]]

game3 = [["R", "S"], ["S", "P"], ["S", "P"]]
console.log(score(game2))


module.exports = {score}

// if(game.every((x) => x === game[0])){
  //   return 0
  // } else if(arraysMatch(game, abbyWinsRock) ){
  //   return 1
  // } else if(arraysMatch(game, abbyWinsScissors)) {
  //   return 1 
  // } else if(arraysMatch(game, abbyWinsPaper)) {
  //   return 1
  // } else {
  //   return 0
  // }
>>>>>>> Stashed changes
