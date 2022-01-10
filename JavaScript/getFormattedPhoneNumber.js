const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getFormattedPhoneNumber = (num) => {
  if (isNaN(num))
    throw new Error(`You should put a number!
${num} is not a valid phone number`);
  const splittedNum = num.match(/[\s\S]{1,4}/g);
  const joinedNum = splittedNum.join("-");
  return joinedNum;
};

rl.question("Insert the phone number : ", (phoneNumber) => {
  try {
    readline.clearLine(process.stdout, 0)
    readline.cursorTo(process.stdout, 0)
    const result = getFormattedPhoneNumber(phoneNumber);
    console.log(`Your phone number: ${phoneNumber}
Formatted: ${result}`);
    process.exit(0)
  } catch (err) {
    console.log(err.message);
    process.exit(1)
  } 
});
