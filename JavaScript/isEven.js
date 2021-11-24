const args = process.argv;
const regex = /\b(?:-n|--number)\b/gi;
const indeks = args.indexOf(regex);
console.log(indeks);
const angka = process.argv[indeks + 1] || 69;
// console.log(process.argv);

if (angka & 1) {
  console.log(`${angka} is an odd number`);
} else {
  console.log(`${angka} is an even number`);
}
