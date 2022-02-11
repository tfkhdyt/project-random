const {default: axios} = require("axios");
const { Server } = require("socket.io");

const io = new Server(4000, { /* options */ });

const mhs = [
  {
    nim: 1,
    nama: 'Taufik'
  },
  {
    nim: 2,
    nama: 'Fauzi'
  }
]

io.on("connection", (socket) => {
  console.log(`${socket.id} is connected!`)
  socket.on('getAllData', (callback) => {
    callback(null, mhs)
  })

  socket.on('getData', (id) => {
    const data = mhs.filter((value) => value.nim === id)
    socket.emit('getData', data)
  })

  socket.on('calculate', (a, b) => {
    const result = a + b
    socket.emit('calculate', result)
  })

  socket.on('catFact', async (callback) => {
    try {
      const res = await axios.get('https://cat-fact.herokuapp.com/facts')
      const data = res.data
      const randomIndex = Math.floor(Math.random() * data.length)
      const randomFact = data[randomIndex].text
      callback(null, randomFact)
    } catch (err) {
      callback(err, null)
    }
  })
});


// console.log(data)
