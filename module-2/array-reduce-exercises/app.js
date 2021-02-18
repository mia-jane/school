const numbers = [1, 2, 3]
var voters = [
    {name:'Bob' , age: 19, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
//1
const sum = (arr) => {
    return arr.reduce((final, number) => final += number, 0)
}
console.log(sum(numbers))

//2
const stringConcat = (arr) => {
    return arr.reduce((final, current) => final.concat(current), "")
}
console.log(stringConcat(numbers))

//3
const totalVoters = (arr) => {
    return arr.reduce((final, voter) => voter.voted ? final + 1 : final, 0)
}
console.log(totalVoters(voters))

//4
const buyEverything = (arr) => {
    return arr.reduce((final, item) => final += item.price, 0)
}
console.log(buyEverything(wishlist))

//5
const flattenArray = (arr) => {
    return arr.reduce((final, current) => [...final, ...current])
}
console.log(flattenArray(arrays))

//6
const voteDemographics = (arr) => {
    return arr.reduce((final, current) => {
        if(current.age >= 18 && current.age <= 25){
            final.young++
        } else if(current.age >= 26 && current.age <=35){
            final.middle++
        }else {
            final.old++
        }
        return final
    }, {young: 0, middle: 0, old: 0})
}

console.log(voteDemographics(voters))