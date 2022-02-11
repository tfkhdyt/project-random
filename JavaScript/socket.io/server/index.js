import express from "express"
import axios from 'axios'
import { createServer } from "http"
import { Server } from "socket.io"

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

const app = express();

app.get('/mhs', (req, res) => {
  res.send({ mhs })
})

app.get('/cat', async (req, res) => {
  try {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts')
    const data = response.data
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomFact = data[randomIndex].text
    res.send({ randomFact })
  } catch (err) {
    res.send({ err })
    console.log(err)
  }
})

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  socket.on('mhs', (callback) => {
    try {
      callback(null, mhs)
    } catch (err) {
      callback(err, null)
    }
  })

  socket.on('cat', async (callback) => {
    try {
      const res = await axios.get('https://cat-fact.herokuapp.com/facts')
      const data = res.data
      const randomIndex = Math.floor(Math.random() * data.length)
      const randomFact = data[randomIndex].text
      callback(null, { randomFact })
    } catch (err) {
      callback(err, null)
    }
  })
});

httpServer.listen(4000);
