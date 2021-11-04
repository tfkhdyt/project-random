const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {body, check, validationResult} = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000
const {loadContact, findContact, cekDuplikat, addContact, deleteContact, updateContacts} = require('./utils/contacts')

// gunakan ejs
app.set('view engine', 'ejs');

// third party middleware
app.use(expressLayouts)

// built in middleware
app.use(express.static('public'))

app.use(express.urlencoded({extended : true}))

// konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
  cookie : { maxAge: 6000 },
  secret : 'secret',
  resave : true,
  saveUninitialized : true
}))
app.use(flash())

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
    layout: 'layouts/main-layouts',
    title : 'Home',
    mahasiswa,
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layouts',
    title : "About"
  })
})

app.get('/contact', (req, res) => {
  const contacts = loadContact()
  console.log(contacts)
  res.render('contact', {
    layout: 'layouts/main-layouts',
    title : "Contact",
    contacts,
    msg : req.flash('msg')
  })
})

app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layouts',
    title: 'Form Tambah Contact'
  })
})

app.post('/contact', [
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value)
    if(duplikat){
      throw new Error('Nama kontak sudah digunakan!')
    }
    return true
  }),
  check('email', 'Email tidak valid').isEmail(),
  check('nohp', 'No. HP tidak valid').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.render('add-contact', {
      title : "Form Tambah Kontak",
      layout : 'layouts/main-layouts',
      errors : errors.array()
    });
  } else {
    addContact(req.body)
    req.flash('msg', 'Data kontak berhasil ditambahkan')
    res.redirect('/contact')
  }
})

app.get('/contact/delete/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  if(!contact){
    res.status(404)
    res.send('<h1>404</h4>')
  }else{
    deleteContact(req.params.nama)
    req.flash('msg', 'Data kontak berhasil dihapus')
    res.redirect('/contact')
  }
})

app.get('/contact/edit/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('edit-contact', {
    layout: 'layouts/main-layouts',
    title: 'Form Ubah Contact',
    contact
  })
})

//app.post('/contact/update/', (req, res) => {
  //res.send(req.body)
//})

app.post('/contact/update', [
  body('nama').custom((value, { req }) => {
    const duplikat = cekDuplikat(value)
    if(value !== req.body.oldNama && duplikat){
      throw new Error('Nama kontak sudah digunakan!')
    }
    return true
  }),
  check('email', 'Email tidak valid').isEmail(),
  check('nohp', 'No. HP tidak valid').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.render('edit-contact', {
      title : "Form Ubah Kontak",
      layout : 'layouts/main-layouts',
      errors : errors.array(),
      contact: req.body
    });
  } else {
    updateContacts(req.body)
    req.flash('msg', 'Data kontak berhasil diubah')
    res.redirect('/contact')
  }
})

app.get('/contact/:nama/', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('detail', {
    layout: 'layouts/main-layouts',
    title : "Detail Contact",
    contact,
  })
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
