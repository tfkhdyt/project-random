let j = 10;
for (let i = 0; i < 9; i++) {
  process.stdout.write(j + ' ');
  if (i & 1) j++;
  else j+=4;
}

(async () => {
  while (alive) {
    eat();
    // sleep();
    code();
    repeat();
  }
})();