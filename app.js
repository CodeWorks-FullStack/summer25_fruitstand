// NOTE this is variables
console.log('Howdy 🤠')

// NOTE Primitive Data types (dumb 🧌)
// number, string, bool

let myName = 'mick'

let lastName = 'WorldWide'

myName = 'Mr.' + myName
console.log(myName, lastName)

let score = 100

score = 1000 + score

score += 500

score + 10000000000 // there is no = sign in this 'expression', so score is never REASSIGNED

console.log('My Score', score)


let mickIsCool = true
let jakeIsCool = true
let jermyIsCool = false // Jeremy's evil twin is Jermy

let createdBool = 10 < 100
let evilTwin = 'Jermy'
let peoplesChamp = 'Jeremy'

let theRealJeremy = evilTwin == peoplesChamp

let knownNothing = null
let unknownNothing

//  -----------------------------------

// NOTE Reference Data type (smart🧑‍🏫)
// Objects, array, sets, maps

// Array data is accessed and ordered by POSITION (INDEX)
let nums = [-5, 28, 999999999999999999999999]

let array = [1, 2, -10, null, evilTwin, ['howdy', 'partner']]

console.log(array[5][1])

let battleship = [
  ['🌊', '🌊', '🌊'],
  ['🌊', '🌊', '🚢'],
  ['🌊', '🌊', '🌊'],
]

console.log('💥', battleship[1][2])

// Object

// Objects store data unordered, in a KEY : VALUE pair, and the VALUE is accessed by KEY

let object = { num1: -100, num2: 200000 }

let instructor = {
  name: 'mick',
  age: 22,
  isCool: true,
  hasDogs: 2,
  rentingDogs: 1,
  dogNames: ['Dipper', 'Pluto', 'Jaxon'],
  job: {
    title: 'code instructor',
    pay: 100000000000000000
  }
}

// What is the difference between Primitive data types, and Reference data types (dumb🧌 vs smart🧑‍🏫)

let dumbNumber = 10

let smartObj = { name: 'Wyatt', emoji: '🤠' }