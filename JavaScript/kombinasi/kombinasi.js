const rl = require('readline-sync');

const fakt = (n) => {
  if (n == 0) return 1;
  return n * fakt(n - 1);
};

const hitungKombinasi = (x, y) => {
  return new Intl.NumberFormat('id-ID')
    .format(fakt(x) / (fakt(y) * fakt(x - y)));
};
const x = rl.question('Masukkan nilai x: ');
const y = rl.question('Masukkan nilai y: ');

console.log(`Kombinasi dari ${x} dan ${y} adalah ${hitungKombinasi(x, y)}`);
