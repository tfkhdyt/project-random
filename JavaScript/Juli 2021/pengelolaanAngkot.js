// var penumpang = ['Taufik', 'Hidayat', 'Fauzi'];
var penumpang = [];
var tambahPenumpang = function (namaPenumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada di dalam angkot!`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang) {
  if (penumpang.length == 0) {
    console.log('Angkot masih kosong!');
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if(i == penumpang.length - 1){
        console.log(`${namaPenumpang} tidak ditemukan!`);
        return penumpang;
      }
    }
  }
};

// var x = tambahPenumpang('Hidayat');
hapusPenumpang('Akmal');
// console.log(penumpang.join(' - '));