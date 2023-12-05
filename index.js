//document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// let myAge = 23

// console.log(myAge)

// let myAge = 7
// let humanDogRatio = 8

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

let count = 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


function increment() {
     count = count + 1;
     console.log("count")
     countEl.textContent = count
}


// DOM => Document Object Model
// how you use JavaScript to modify a website

function save(){
     let previousEntries = count + " - "
     saveEl.textContent += previousEntries
     countEl.textContent = 0
     count = 0
}

// let name = "Khin Su Su Chit"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)

//string and number, string always win


/*
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Khin Su Su Chit"
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋"
*/