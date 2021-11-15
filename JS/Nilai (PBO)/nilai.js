class Nilai {
  constructor(nilai) {
    this._absensi = nilai.absensi || 0;
    this._quiz = nilai.quiz || 0;
    this._uts = nilai.uts || 0;
    this._uas = nilai.uas || 0;
  }
  get absensi() {
    return this._absensi;
  }
  get quiz() {
    return this._quiz;
  }
  get uts() {
    return this._uts;
  }
  get uas() {
    return this._uas;
  }
  get nilaiAkhir() {
    return (
      (this._absensi * 10) / 100 +
      (this._quiz * 20) / 100 +
      (this._uts * 30) / 100 +
      (this._uas * 40) / 100
    );
  }
}

const nilai = new Nilai({
  absensi: 100,
  quiz: 95,
  uts: 80,
  uas: 90,
});

console.log(`Nilai absensi : ${nilai.absensi}
Nilai quiz    : ${nilai.quiz}
Nilai UTS     : ${nilai.uts}
Nilai UAS     : ${nilai.uas}
Nilai akhir   : ${nilai.nilaiAkhir}`);
