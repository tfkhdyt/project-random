const input = require('input');

const hitungLamaRental = (jamMasuk, menitMasuk, jamKeluar, menitKeluar) => {
  const totalMenit = (jamKeluar * 60 + menitKeluar) - (jamMasuk * 60 + menitMasuk);
  const totalJam = `${totalMenit / 60} jam ${totalMenit % 60} menit`;
  return { totalMenit, totalJam };
};

const hitungHarga = (totalMenit) => {
  const floatMenit = parseFloat(totalMenit);
  const hargaPerMenit = parseFloat(5000 / 60);
  return floatMenit * hitungHarga;
};

(async () => {
  const jamMasuk = await input.text('Jam masuk:', {
    validate(input) {
      if (!isNaN(input)) return true;
      return 'Input harus berupa bilangan bulat!';
    }
  });
  const menitMasuk = await input.text('Menit masuk:', {
    validate(input) {
      if (!isNaN(input)) return true;
      return 'Input harus berupa bilangan bulat!';
    }
  });
  const jamKeluar = await input.text('Jam keluar:', {
    validate(input) {
      if (!isNaN(input)) return true;
      return 'Input harus berupa bilangan bulat!';
    }
  });
  const menitKeluar = await input.text('Menit keluar:', {
    validate(input) {
      if (!isNaN(input)) return true;
      return 'Input harus berupa bilangan bulat!';
    }
  });
  console.log('---------------------------------------');
  const { totalMenit, totalJam } = hitungLamaRental(jamMasuk, menitMasuk, jamKeluar, menitKeluar);
  console.log(`Lama rental: ${totalMenit} menit (${totalJam})`);
  console.log(`Biaya rental: ${hitungHarga(totalMenit)}`);
})();