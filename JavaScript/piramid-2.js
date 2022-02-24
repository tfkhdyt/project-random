let jumlahBaris = 5;
let string = "";

for (let i = 0; i < jumlahBaris; i++) {
  for (let j = 0; j < jumlahBaris - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
