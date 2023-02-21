let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let attempts = 1;
let guess = parseInt(prompt("Enter your first guess"));

while(parseInt(guess) !== targetNum) {
  attempts++;
  if(guess > targetNum) {
    guess = prompt("Too high! Enter a new guess");
  }
  else if(guess === 'q') {
    break;
  }
  else {
    guess = prompt("Too low! Enter a new guess");
  }
}
if(guess === 'q') {
  alert('Bye buddy')
}
else {
  alert(`You got it!`)
  alert(`It took you ${attempts} guesses`)
}