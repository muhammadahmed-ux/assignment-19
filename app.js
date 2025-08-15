console.log("JavaScript Connected")


// Step 1: Welcome Alert
alert(" Welcome to the Number Guessing Game!");

// Step 2: Set secret number (between 1 and 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Step 3: Prompt user to guess
var Guess = prompt("Guess a number between 1 and 10:");

// Step 4: Check condition
if (isNaN(Guess) || Guess === "") {
    alert(" Invalid input! Please enter a number.");
} else {
    Guess = Number(Guess); // Convert to number

    if (Guess === secretNumber) {
        alert(" You win!  The secret number was " + secretNumber);
    } else {
        alert(" Better luck next time! The secret number was " + secretNumber);
    }
}