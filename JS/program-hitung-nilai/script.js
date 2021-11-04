const data = [];
const btnSimpan = document.getElementById("btnSimpan");
const btnTampilkan = document.getElementById("btnTampilkan");

btnSimpan.addEventListener("click", function () {
  const nama = document.getElementById("nama").value;
  const nilai = document.getElementById("nilai").value;
  const elementIndeks = document.getElementById("indeks");
  const elementKeterangan = document.getElementById("keterangan");
  
  let indeks;
  let keterangan;
  if (nilai >= 80 && nilai <= 100) {
    indeks = "A";
    keterangan = 'Sangat Baik';
  } else if (nilai >= 68 && nilai <= 79) {
    indeks = "B";
    keterangan = 'Baik';
  } else if (nilai >= 20 && nilai <= 67) {
    indeks = "C";
    keterangan = 'Buruk';
  } else {
    elementIndeks.value = 'Nilai tidak valid!';
    return false;
  }
  elementIndeks.value = indeks;
  elementKeterangan.value = keterangan;
  data.push({nama,nilai,indeks,keterangan});
});

btnTampilkan.addEventListener('click', function () {
  const nim = document.getElementById("nim").value;
  const elementOutput = document.getElementById('output');
  let html = `
    <b>NIM : ${nim}</b>
    <table border='1' cellspacing='0' style='border-collapse:collapse; margin-top: 20px;' id='tabelOutput'>
      <tr>
        <th>No</th>
        <th>Nama Mata Kuliah</th>
        <th>Nilai Akhir</th>
        <th>Indeks</th>
        <th>Keterangan</th>
      </tr>
  `
  data.forEach((e, i) => {
    html += `
      <tr>
        <td>${i+1}</td>
        <td>${e.nama}</td>
        <td>${e.nilai}</td>
        <td>${e.indeks}</td>
        <td>${e.keterangan}</td>
      </tr>
    `
  });
  html += '</table>'
  elementOutput.innerHTML = html
});