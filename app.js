// NOTE this is variables
console.log('Howdy 🤠')

// NOTE Primitive Data types (dumb 🧌)
// number, string, bool

let myName = 'mick'

let lastName = 'WorldWide'

myName = 'Mr.' + myName
// console.log(myName, lastName)

let score = 100

score = 1000 + score

score += 500

score + 10000000000 // there is no = sign in this 'expression', so score is never REASSIGNED

// console.log('My Score', score)


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

// console.log(array[5][1])

let battleship = [
  ['🌊', '🌊', '🌊'],
  ['🌊', '🌊', '🚢'],
  ['🌊', '🌊', '🌊'],
]

// console.log('💥', battleship[1][2])

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


// ------------------END OF EXAMPLE------------------------------


let fruitForSale = [
  {
    name: 'Apple',
    price: .50,
    qty: 0
  },
  {
    name: 'Banana',
    price: .75,
    qty: 0
  },
  {
    name: 'Melon',
    price: 2.33,
    qty: 0
  },
]


function buyApple() {
  // console.log('buying 🍎')
  let apple = fruitForSale[0]
  apple.qty += 1
  // console.log(apple)
  // Aliases for Primitive types don't modify the original
  // let appleQTY = fruitForSale[0].qty
  // appleQTY += 1
  // console.log(appleQTY);
}

function buyBanana() {
  // console.log('🍌');
  let banana = fruitForSale[1]
  banana.qty += 1
  // console.log(banana);
}


// Abstraction - useful when repeating yourself across functions
// fruitPosition is and example of a function "Parameter"
function buyFruit(fruitPosition) {
  let fruit = fruitForSale[fruitPosition]
  console.log('buying', fruitPosition, fruit);
  fruit.qty += 1
  console.log('bought', fruit);

  calculateTotal()
}


// Iteration (loops) - useful for repeating yourself inside of a function
function calculateTotal() {
  // let apple = fruitForSale[0]
  // console.log('apple total', apple.price * apple.qty)

  let grandTotal = 0

  for (let loop = 0; loop <= 2; loop += 1) {
    let fruit = fruitForSale[loop]
    // console.log('loop', loop, fruit)
    console.log(fruit.name, fruit.price * fruit.qty)
    grandTotal += fruit.price * fruit.qty
  }

  console.log('end', grandTotal)
  let totalElm = document.getElementById('total')
  console.log(totalElm);
  totalElm.textContent = grandTotal.toFixed(2)
}

// NOTE breakdown of the for loop
// ..⬇️start......⬇️continue while true
for (let x = 0; x < 10; x += 1) {
  //.............................⬆️ Run after each "loop"
  // the for loop will repeat the code between the { }, adding + 1 after each "loop", Once x is no longer < 10, the loop will finish
  console.log('loop', x)
  // this loop just console logs 0-9
  // after the all the code in the block runs, it runs our x += 1, checks the "condition", then runs again if condition is still true
}
