const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const capitalize = (text) => {
  return text.split(' ').map((e) => {
    return e[0].toUpperCase() + e.substring(1).toLowerCase();
  }).join(' ');
};

const user = [{
  nama: 'Taufik Hidayat',
  nim: '301200032',
  prodi: 'Teknik Informatika'
}, {
  nama: 'Teja Kusumah',
  nim: '301200033',
  prodi: 'Teknik Informatika'
}];

const keyValidation = (req, res, next) => {
  if (req.query.key != 'QNkRd2Q2sTu2r') {
    res.status(401);
    return res.json({
      message: 'API Key tidak valid!'
    });
  }
  next();
};

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage'
  });
});

app.get('/get/user', keyValidation, (req, res) => {
  const nim = req.query.nim;
  const fetchedData = user.find((e) => e.nim == nim);
  let json = {
    message: null,
    data: {
      nama: null,
      nim: null,
      prodi: null
    }
  };
  
  if (fetchedData) {
    res.status(200);
    json.message = 'Data berhasil ditemukan!';
    json.data.nama = fetchedData.nama;
    json.data.nim = fetchedData.nim;
    json.data.prodi = fetchedData.prodi;
  } else {
    res.status(404);
    json.message = 'Data tidak ditemukan!';
    delete json.data;
  }
  
  res.json(json);
});

app.listen(PORT, () => {
  console.log(`App listening to localhost:${PORT}...`);
});
