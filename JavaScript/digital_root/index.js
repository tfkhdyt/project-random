function digital_root(n) {
  const x = n
    .toString(10)
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
  if (x.length > 1) return digital_root(x);
  return x;
}

console.log(`The digital root of 69 is ${digital_root(69)}`);
