// ==========================
// Part 1: Variables & Conditionals
// ==========================

// Variable declarations
let userName = "Happy";  // updated username
let age = 22;

// Conditional example
if (age >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is not an adult.");
}

// Another conditional using ternary operator
let access = age >= 18 ? "granted" : "denied";
console.log("Access " + access);

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greet user
function greet(name) {
    return "Hello, " + name + "!";
}

// Function 2: Calculate square of a number
function square(num) {
    return num * num;
}

console.log(greet(userName));
console.log("Square of 5 is " + square(5));

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration: " + i);
}

// Loop 2: While loop
let count = 1;
while (count <= 3) {
    console.log("While loop count: " + count);
    count++;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// DOM Interaction 1: Change greeting text
const changeGreetingBtn = document.getElementById("changeGreetingBtn");
const greetingEl = document.getElementById("greeting");

changeGreetingBtn.addEventListener("click", function() {
    greetingEl.textContent = "Hi " + userName + "! Welcome to the page!";
});

// DOM Interaction 2: Log message to console on button click
const logMessageBtn = document.getElementById("logMessageBtn");

logMessageBtn.addEventListener("click", function() {
    console.log("Button was clicked!");
});

// DOM Interaction 3: Populate a list dynamically
const populateListBtn = document.getElementById("populateListBtn");
const itemList = document.getElementById("itemList");

populateListBtn.addEventListener("click", function() {
    itemList.innerHTML = ""; // Clear previous items
    const items = ["Item 1", "Item 2", "Item 3"];
    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        li.textContent = items[i];
        itemList.appendChild(li);
    }
});
