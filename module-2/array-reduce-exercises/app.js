const nums = [1, 2, 3]
//1
const sum = nums.reduce(function(final, num){
    final += num
    return final
})
console.log(sum)
//2
const longString = nums.reduce(function(final, number){
    final += number
    return final
},"")
console.log(longString)
console.log(typeof(longString))
//3
var voters = [
    {name:'Bob' , age: 30, voted: true},
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
const totalVote = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
},0)
console.log(totalVote)
//4
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const totalPrice = wishlist.reduce(function(final, thing){
    final += thing.price
    return final
},0)
console.log(totalPrice)
//5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const flatten = arrays.reduce(function(final,array){
    return final.concat(array)
})
console.log(flatten)

//6
var voters = [
    {name:'Bob' , age: 30, voted: true},
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
const organizedVoters = voters.reduce(function(final, voter){
    if(voter.age >= 18 && voter.age <= 25 && voter.voted){
        final.young++
    }else if(voter.age >= 26 && voter.age <= 35 && voter.voted){
        final.mid++
    }else if(voter.age >= 36 && voter.age <= 55 && voter.voted){
        final.old++
    }
    return final
},{young: 0, mid: 0, old: 0}) 
console.log(organizedVoters)