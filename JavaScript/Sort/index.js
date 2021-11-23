const input = require('input');

class Main {
  constructor() {
    this._array = [];
  }
  cetakGaris() {
    console.log('===============================');
  }
  cetakNama() {
    console.log(`Nama          : Taufik Hidayat
NIM           : 301200032
Kelas         : IF Pagi
Judul Program : Descending Sort`);
  }
  sort(array) {
    return array.sort((a, b) => b - a).join(', ');
  }
  set array(angka) {
    this._array.push(angka);
  }
  get array() {
    return this._array;
  }
}


(async () => {
  const main = new Main();

  main.cetakNama();
  main.cetakGaris();

  const jumlahIndex = await input.text('Masukkan jumlah index:', {
    validate(answer) {
      if (!isNaN(answer)) return true;
      return 'Input tidak valid! Input harus berupa bilangan bulat dan tidak boleh kosong';
    },
  });

  for (let i = 0; i < jumlahIndex; i++) {
    const value = await input.text(`Masukkan angka ke-${i+1}:`, {
      validate(answer) {
        if (!isNaN(answer)) return true;
        return 'Input tidak valid! Input harus berupa bilangan bulat dan tidak boleh kosong';
      }
    });
    main.array = value;
  }
  main.cetakGaris();

  console.log('Array sebelum diurutkan: ' + main.array.join(', '));
  console.log('Array sesudah diurutkan: ' + main.sort(main.array));
})();
