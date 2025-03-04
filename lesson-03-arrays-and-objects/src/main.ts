let stringArr = ['one', 'hey', 'Dave'] //string 

let guitars = ['Strat', 'Les Paul', 5150] //string || number

let mixedData = ['EVH', 1984, true] //string || number || bolean

stringArr[0] = 'John'
stringArr.push('hey')
console.log(stringArr) // ['John', 'hey', 'Dave', 'hey']

guitars[0] = 1984
guitars.unshift('Jim')
console.log(guitars)  // ['Jim', 1984, 'Les Paul', 5150]

let test = [] // any type 
let bands: string[] = []
bands.push('Van Halen')

// Tuple 
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true, 
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U) //1