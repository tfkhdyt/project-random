const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const name = await rl.question("What's your name? ", (name) => name);
  console.log(`Good morning, ${name}!`);
  // rl.close();
})();
