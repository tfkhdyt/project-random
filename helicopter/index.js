const clear = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
  console.clear();
};

console.clear();

while (true) {
  console.log(`ROFL:ROFL:LOL:
           A
  L    /--------
 LOL====      []\\
       \\         \\
        \\---------]
           I     I
        -----------/`);
  clear(200);
  console.log(`         :LOL:ROFL:ROFL
           A
       /--------
 LOL====      []\\
  L    \\         \\
        \\---------]
           I     I
        -----------/`);
  clear(200);
}
