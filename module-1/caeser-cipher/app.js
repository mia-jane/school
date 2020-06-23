var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
//loop through input
//recognize shift value on scale of [0,26] of the alphabet
//equate index of each letter to shift value

//string
var alphabet = "abcdefghijklmnopqrstuvwxyz"
// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function encrypt(input,shift){
    var newInput = ""
    console.log(newInput)
    for(let i = 0; i < input.length; i++){
        if(alphabet.indexOf(input[i]) !== -1){
            var position = alphabet.indexOf(input[i])
            newInput += alphabet[(position + shift)%26]
            console.log((position + shift)%26)
            
        }else {
            newInput += input[i]
        
        }
    }
    return (newInput)
}
// encrypt(input,shift)
console.log(encrypt(input, shift))