const prompt = require("prompt-sync")();
const alert=require("alert-node");
let choice = prompt("Enter your choice: 'G' or 'S' or 'W' ");
while (choice !== "G" && choice !== "S" && choice !== "W") {
  console.log("Enter correct choice");
  choice = prompt("Enter your choice: 'G' or 'S' or 'W' ");
}
let comp = Math.floor(Math.random() * 3);
let compChoice = ["G", "S", "W"][comp];
console.log("Computer choice: ");
console.log(compChoice);
if (choice === compChoice) console.log("Draw");
else if (
  (choice === "G" && compChoice === "S") ||
  (choice === "S" && compChoice === "W") ||
  (choice === "W" && compChoice === "G")
)
  alert("You win");
else if (
  (choice === "G" && compChoice === "W") ||
  (choice === "S" && compChoice === "G") ||
  (choice === "W" && compChoice === "S")
)
alert("You lose");
