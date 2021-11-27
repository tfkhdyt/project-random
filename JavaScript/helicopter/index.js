const clear = (ms) => {
  const date = Date.now();
  let currentDate;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
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
  clear(100);
  console.log(`         :LOL:ROFL:ROFL
           A
       /--------
 LOL====      []\\
  L    \\         \\
        \\---------]
           I     I
        -----------/`);
  clear(100);
}
