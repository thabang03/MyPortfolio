let secret = 7;
//let answer = prompt("Please guess the secret number (1-20)");
// Convert the string guess to an integer so that we can compare
//let guess = parseInt(answer);

let numTurns = 0;

while (true) {
  numTurns++;
  let answer = prompt("Please guess the secret number (1-20)");
  //Convert the string guess to an integer so that we can compare
  let guess = parseInt(answer);

  if (guess == secret) {
    alert("Correct Guess!");
    break;
  } else if (secret > guess) {
    alert("Too low");
  } else if (secret < guess) {
    alert("Too high");
  } else {
    alert("That's not a number");
  }
}
