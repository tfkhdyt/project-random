const express = require('express')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Taufik',
      email: 'tfkhdyt@pm.me'
    },
    {
      nama: 'Fauzi',
      email: 'fauzi@pm.me'
    },
    {
      nama: 'Doni',
      email: 'doni@pm.me'
    },
  ]
  res.render('index', {
    nama : 'Taufik Hidayat', 
    title : 'Halaman home',
    mahasiswa,
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    nama : 'Taufik Hidayat',
    title : "Halaman about"
  })
})

app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id}<br>
Category ID : ${req.query.category}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
