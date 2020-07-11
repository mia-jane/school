
class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    } 
    pickName(){
        const readlineSync = require('readline-sync')
            const playerName = ["Mario", "Luigi"]
            let index = readlineSync.keyInSelect(playerName, "which player?")
            if(playerName[index] === "Mario"){
                this.name = "Mario"
            }else{
                this.name = "Luigi"
            }
    }  
}


const character = new Player("someone", 10, "alive", false)
character.pickName()
console.log(character)