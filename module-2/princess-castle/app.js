
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
        }
    }  
}


const character = new Player("someone", 10, "Small", false)
character.setName()
character.gotHit()
console.log(character)

