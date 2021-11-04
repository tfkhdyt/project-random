const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "taufik";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal!");
  }
  // pilih database
  const db = client.db(dbName);

  // menambahkan 1 data ke collection mahasiswa
  //db.collection('mahasiswa').insertOne({
  //nama : 'Erik',
  //email : 'erik@gmail.com'
  //}, (error, result) => {
  //if(error){
  //return console.log('Gagal menambahkan data!')
  //}
  //console.log(result)
  //})

  // menambahkan lebih dari satu data
  //db.collection('mahasiswa').insertMany(
  //[
  //{
  //nama : 'Erik',
  //email : 'erik@yahoo.com'
  //},
  //{
  //nama : 'Afif',
  //email : 'afif@gmail.com'
  //}
  //], (error, result) => {
  //if(error){
  //return console.log('Data gagal ditambahkan!')
  //}

  //console.log(result)
  //})

  // menampilkan semua data yg ada di collection mahasiswa
  //console.log(db.collection('mahasiswa').find().toArray((error, result) => {
  //console.log(result)
  //}))

  // menampilkan data berdasarkan kriteria yg ada di collection 'mahasiswa'
  //console.log(
  //db.collection('mahasiswa')
  //.find({ _id : ObjectID('60fec69bff7be15f6bd11f44')})
  //.toArray((error, result) => {
  //console.log(result)
  //}))

  // mengubah data berdasarkan id
  //const updatePromise = db.collection('mahasiswa').updateOne({
  //_id : ObjectID("60fec69bff7be15f6bd11f44")
  //}, {
  //$set: {
  //email : "avip@yahoo.com"
  //}
  //})

  //updatePromise.then(result => {
  //console.log(result)
  //})
  //.catch(err => {
  //console.log(err)
  //})

  // mengubah data lebih dari 1 berdasarkan kriteria
  //db.collection('mahasiswa').updateMany({
  //nama : 'Erik'
  //},
  //{
  //$set : {
  //nama : 'Erik Doank'
  //}
  //})

  // menghapus 1 data
  //db.collection('mahasiswa').deleteOne(
  //{
  //_id : ObjectID("60fec69bff7be15f6bd11f44")
  //}
  //).then(result => {
  //console.log(result)
  //}).catch(error => {
  //console.log(error)
  //})

  // menghapus banyak data
  db.collection("mahasiswa")
    .deleteMany({
      nama: "Erik Doank",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
