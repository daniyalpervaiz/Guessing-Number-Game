#!/usr/bin/env node
import inquirer from "inquirer";
let guessgameNumber = Math.floor(Math.random() * 6);
let answer = await inquirer.prompt([
    { message: "Guess The Number between 1-6", type: "number", name: "guessNumber" },
]);
if (answer.guessNumber === guessgameNumber) {
    console.log("Congratulations You Win");
}
else {
    console.log("Sorry You Lose");
}
