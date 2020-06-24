var readlineSync = require("readline-sync")

//beginning stats
var isAlive = true
yourHealth = 50

//choices
var attackOrRun = ["attack", "run"]


//death function
function death(){
    console.log("you are part of the forest now ^-^")
    isAlive = false
}

//confront creature function
function confrontCreature(){
    index = readlineSync.keyInSelect(attackOrRun, "What will you do?")
    //if attacking
    if(attackOrRun[index] === "attack"){
        attackEnemy()
    } else if(attackOrRun[index] === "run"){
        runAway()
    } else {
        console.log("you froze and and let the creature devour you")
        death()
    }
}

//attack function
function attackEnemy(){
    var enemyHealth = 15
    while(enemyHealth > 0 && yourHealth > 0){
        //var enemyHealth = 15
        console.log("you attack")
        var enemyDamage = Math.floor(Math.random() * 11)
        console.log("you did " + enemyDamage + " points of damage")
        enemyHealth = enemyHealth - enemyDamage
        //console.log("the creature has" + enemyHealth)
        console.log("the creature attacks")
        var yourDamage = Math.floor(Math.random() * 16)
        yourHealth = yourHealth - yourDamage
        console.log("You lost " + yourDamage + " HP")
        console.log("You have " + yourHealth + " HP left")
    }if (yourHealth <= 0){
        death()
    }else if(enemyHealth <= 0){
        console.log("You did great.. Now let's go deeper into the woods")
        isAlive = true
    }
}

//attempt to escape function
function runAway(){
    var attemptToEscape = Math.random()
    if (attemptToEscape >= 1 / 2){
        console.log("You ran away deeper into the woods")
    }else if(attemptToEscape < 1 / 2) {
        console.log("You can't escape.. you have no choice but to fight")
        attackEnemy()
    }
}


//meet the will-o'-the-wisp
console.log("Hello!!")
var name = readlineSync.question("May I have your name? ")
console.log("... " + name + "? That's a nice name.")
if (readlineSync.keyInYN("Want me to show you the forest?  It has lots of things you've never seen before.")){
    //Y key was pressed
    console.log("...yes?  Okay, let's begin ^-^")
    isAlive = true
} else {
    console.log("... Oh.  That's a shame.  It would have been really fun")
    isAlive = false
}

//while walking through the woods
while (isAlive === true){
    var walk = readlineSync.question("please press w to walk ")
    //walking
    if(walk == "w"){
        console.log("you are walking")
        //are you getting attacked?
        var attackChance = Math.random()
        if (attackChance <= 0.25 ){
            //which enemy is attacking you?
            var enemy = Math.random()
            if (enemy <= 1 / 3){
                console.log("a kelpie is trying to drown you")
                confrontCreature()
            } else if (enemy >= 2 / 3){
                console.log("a banshee is screaming at you")
                confrontCreature()
            } else{
                console.log("a wraith is trying to steal your soul")
                confrontCreature()
            }
        }else { 
            console.log(walk)
        }
    }
}