const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const randomNumber = Math.floor(Math.random() * 100 + 1);
let chances = 5;

const checkResult = (guess) => {
  if (guess > randomNumber) 
    return 'too large';
  else if (guess < randomNumber)
    return 'too small';
  else
    return 'You win';
}


console.log(`GUESSING GAME
Guess the number!
You only have 5 chances`);

while (true) {
  if (chances == 0) {
    console.log(`You have no more chance.
You lose!
The random number is: ${randomNumber}`);
    break;
  }
  rl.question('Input your guess> ', (guess) => {
    const result = checkResult(guess);
    if (isNaN(result)) {
      console.log('Please input a number!');
    } else if (result != 'You win') {
      chances--;
      console.log(`Your guess is ${result}! Try again
You have ${chances} chance(s) left`);
    } else {
      console.log(result);
      break;
    }
  });
}

