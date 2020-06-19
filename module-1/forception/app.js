
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetArr = alphabet.split("")
console.log(alphabetArr)

function forception(people, alphabetArr){
    var result = []
    for(let i = 0; i < people.length; i++){
        //console.log(people[i] + ":")
        result.push(people[i])
        for (let j = 0; j < alphabetArr.length; j++){
            //console.log(alphabetArr[j])
            result.push(alphabetArr[j])
        }
    }
    console.log(result)
}

forception(people, alphabetArr)


