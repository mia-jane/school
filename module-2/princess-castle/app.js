
class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    } 
    setName(){
        const readlineSync = require('readline-sync')
            const playerName = ["Mario", "Luigi"]
            let index = readlineSync.keyInSelect(playerName, "which player?")
            if(playerName[index] === "Mario"){
                this.name = "Mario"
            }else{
                this.name = "Luigi"
            }
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Small"
        }else{
            this.status = "Dead"
            gameActive = false
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
        }else if(this.status === "Powered Up"){
            console.log("you got a star!")
            this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoins += 1
    }  
}



const character = new Player(" ", 0, "Small", false)
// character.setName()
// character.gotHit()
// character.addCoin()
// console.log(character)



//put the random range function inside a setInterval function that ends after gameActive === false

//THIS WORKS!!!
// const getRandomInt = (min,max) => {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max-min +1)) + min
// }
// const randomNumber = getRandomInt(0,2)
// if(randomNumber === 0){
//     character.gotHit()
//     console.log(character)
// }else if(randomNumber === 1){
//     character.gotPowerup()
//     console.log(character)
// }else if(randomNumber === 2){
//     character.addCoin()
//     console.log(character)
// }



var gameActive = true
if(character.status === "Dead"){
    gameActive = false
}


//increment timer
var incrementTimer = () => {
    //if(gameActive === "true"){
        const getRandomInt = (min,max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max-min +1)) + min
        }
        let randomNumber = getRandomInt(0,2)
        if(randomNumber === 0){
            character.gotHit()
            console.log(character)
        }else if(randomNumber === 1){
            character.gotPowerup()
            console.log(character)
        }else if(randomNumber === 2){
            character.addCoin()
            console.log(character)
        }
    //}else{
        //gameActive = false
    //}
}
function runGameFunction(){
    if(gameActive === true){
        intervalId = setInterval(incrementTimer, 1000)
    }else if(gameActive ===false){
        clearInterval(intervalId)
    }
}

// character.setName()
// console.log(character)
// if(gameActive === true){
//     runGameFunction()
// }
character.setName()
console.log(character)
runGameFunction()
