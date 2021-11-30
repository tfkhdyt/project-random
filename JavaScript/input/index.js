const rl = require('readline-sync');

const getTime = (hours) => {
  if (hours >= 3 && hours <= 10) return 'morning';
  else if (hours >= 11 && hours <= 3) return 'afternoon';
  else if (hours >= 4 && hours <= 6) return 'evening';
  else return 'night';
};

const name = rl.question("What's your name? ");

const hours = new Date().getHours();
const time = getTime(hours);

console.log(`Good ${time}, ${name}!`);
