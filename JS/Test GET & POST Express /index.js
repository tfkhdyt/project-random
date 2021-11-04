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

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage'
  });
});

// app.get('/get', (req, res) => {
//   const anu = req.params.anu || '';
//   res.render('get', {
//     params: anu
//   });
// });

app.get('/get/:anu', (req, res) => {
  const anu = req.params.anu || '';
  let nama = req.query.nama;
  nama = nama.split(' ').map((e) => {
    return e[0].toUpperCase() + e.substring(1).toLowerCase();
  }).join(' ');
  res.render('get', {
    params: anu,
    nama
  });
});

app.get('/post', (req, res) => {
  const nama = '';
  res.render('post', {
    nama
  });
});

app.post('/post', (req, res) => {
  const nama = req.body.nama;
  res.render('post', {
    nama: capitalize(nama)
  });
});

app.listen(PORT, () => {
  console.log(`App listening to localhost:${PORT}...`);
});