const fs = require('fs');
const mahasiswa = require('./mahasiswa.json');
console.log('Before:\n',mahasiswa);
console.log('After:');
const mhs = mahasiswa.data.map((e,i) => {
  return `${i+1}. Nama     : ${e.nama}
   NIM      : ${e.nim}
   Fakultas : ${e.fakultas}
   Prodi    : ${e.prodi}
   `;
});

mhs.forEach((e) => console.log(e));
/*fs.readFile('./mahasiswa.json', (err, data) => {
  if (err) throw err;
  let mhs = JSON.parse(data);
  mhs.data.push({
    nama: 'Maman Racing',
    nim: '69420',
    fakultas: 'Teknik Pembalap',
    prodi: 'Balap Keong',
  });
  mhs = JSON.stringify(mhs);
  fs.writeFile('./mahasiswa.json', mhs, (err) => {
    if (err) throw err;
    console.log('Input data berhasil');
  });
});*/
