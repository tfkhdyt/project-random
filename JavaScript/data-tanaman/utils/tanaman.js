const fs = require('fs');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/tanaman.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadTanaman = () => {
  const file = fs.readFileSync('data/tanaman.json', 'utf-8');
  const tanamans = JSON.parse(file);
  return tanamans;
};

const findTanaman = (kode) => {
  const tanamans = loadTanaman();
  const tanaman = tanamans.find((tanaman) => {
    return tanaman.kode === kode});
  return tanaman
}

const saveTanaman = (tanamans) => {
  fs.writeFileSync('data/tanaman.json', JSON.stringify(tanamans))
}

const addTanaman = (tanaman, cb) => {
  const tanamans = loadTanaman()
  tanamans.push(tanaman)
  saveTanaman(tanamans)
  cb()
}

const deleteTanaman = (tanaman) => {
  const tanamans = loadTanaman()
  const filteredTanaman = tanamans.filter((tanamans) => {
    return tanamans.kode !== tanaman
  })
  saveTanaman(filteredTanaman)
}

const updateTanaman = tanamanBaru => {
  const tanamans = loadTanaman()
  const filteredTanaman = tanamans.filter(tanaman => tanaman.kode !== tanamanBaru.oldKode)
  delete tanamanBaru.oldKode
  filteredTanaman.push(tanamanBaru)
  saveTanaman(filteredTanaman)
}

module.exports = {loadTanaman, findTanaman, addTanaman, deleteTanaman, updateTanaman};
