const rl = require('readline-sync');

(async () => {
  const name = await rl.question("What's your name? ");
  console.log(`Good morning, ${name}!`);
  // rl.close();
})();
