const input = require('input');

const hitungLamaRental = (jamMasuk, menitMasuk, jamKeluar, menitKeluar) => {
  const totalMenit = (jamKeluar * 60 + menitKeluar) - (jamMasuk * 60 + menitMasuk);
  const totalJam = `${Math.floor(totalMenit / 60)} jam ${totalMenit % 60} menit`;
  return { totalMenit, totalJam };
};

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
 };

const hitungHarga = (totalMenit) => {
  const floatMenit = parseFloat(totalMenit);
  const hargaPerMenit = parseFloat(5000 / 60);
  return 'Rp' + formatNumber(Math.round(floatMenit * hargaPerMenit));
};

(async () => {
  const jamMasuk = await input.text('Jam masuk    :', {
    validate(input) {
      if (!isNaN(input)) return true;
      if (input > 23) return 'Masukkan jam yang valid';
      return 'Input harus berupa bilangan bulat!';
    }
  });
  const menitMasuk = await input.text('Menit masuk  :', {
    validate(input) {
      if (!isNaN(input)) return true;
      if (input > 59) return 'Masukkan menit yang valid';
      return 'Input harus berupa bilangan bulat!';
    }
  });
  const jamKeluar = await input.text('Jam keluar   :', {
    validate(input) {
      if (!isNaN(input)) return true;
      if (input > 23) return 'Masukkan jam yang valid';
      return 'Input harus berupa bilangan bulat!';
    }
  });
  const menitKeluar = await input.text('Menit keluar :', {
    validate(input) {
      if (!isNaN(input)) return true;
      if (input > 59) return 'Masukkan menit yang valid';
      return 'Input harus berupa bilangan bulat!';
    }
  });
  console.log('---------------------------------------');
  const { totalMenit, totalJam } = hitungLamaRental(parseInt(jamMasuk), parseInt(menitMasuk), parseInt(jamKeluar), parseInt(menitKeluar));
  console.log(`Lama rental  : ${totalMenit} menit (${totalJam})`);
  console.log(`Biaya rental : ${hitungHarga(totalMenit)}`);
})();