const collectAnimals = (...animals) => {
    console.log(animals)
}
collectAnimals("dog", "cat", "mouse", "jackalope", "platypus")
//
const combineFruit = (fruit, sweets, vegetables) => {
    return {
        fruit,
        sweets,
        vegetables
    }
}
const food = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"])
console.log(food)
//
const vacation = {
    location: "burly idaho",
    duration: "2 weeks"
}
const parseSentence = (obj) => {
    const{location, duration} = obj
    return `We're going to have a good time in ${location} for ${duration}`
}
const sentence = parseSentence(vacation)
console.log(sentence)
//
const returnFirst = (items) => {
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
const items = [2, 3, 4, 5]
const answer = returnFirst(items)
console.log(answer)
//

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [activity1, activity2, activity3, activity4, activity5] = arr
    return `My top three favorite activities are ${activity1}, ${activity2}, ${activity3}, ${activity4}, and ${activity5}`
}

console.log(returnFavorites(favoriteActivities))
//

const combineAnimals = (...arr) =>{
    const [item1, item2, item3] = arr
    const newArr = [...item1, ...item2, ...item3]
    return newArr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const newAnimals = combineAnimals(realAnimals, magicalAnimals ,mysteriousAnimals)
console.log(newAnimals)

//
const product = (a, b, c, d, e) => {  
    var numbers = [a,b,c,d,e];
    const result = numbers.reduce((acc, number) => {
        return acc * number
    }, 1)
    console.log(result)
}

product(1,2,3,4,5)

//
const unshiftArray = (array) => {
    array.unshift("cereal") 
    //return [a, b, c, d, e].concat(array);
  }
  const testToUnshift = [1,2,3,4]
  unshiftArray(testToUnshift)
  console.log(testToUnshift)

  //