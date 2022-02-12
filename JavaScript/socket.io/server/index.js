import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import axios from 'axios'

const mhs = [
  {
    nim: 301200001,
    nama: 'Dadan Hardiansah'
  },
  {
    nim: 301200002,
    nama: 'Defit Taufik Ismail'
  },
  {
    nim: 301200003,
    nama: 'Muhamad Iqbal Rafly'
  },
  {
    nim: 301200005,
    nama: 'Sandi Saepudin'
  },
  {
    nim: 301200006,
    nama: 'Steven Geovani'
  },
  {
    nim: 301200008,
    nama: 'Wira Restu Wibawa'
  },
  {
    nim: 301200018,
    nama: 'Diana Salendra'
  },
  {
    nim: 301200019,
    nama: 'Eygin Reygina'
  },
  {
    nim: 301200020,
    nama: 'Fahrul Zaman'
  },
  {
    nim: 301200021,
    nama: 'Jacob Wamuka'
  },
  {
    nim: 301200024,
    nama: 'Rangga Kurniawan'
  },
  {
    nim: 301200032,
    nama: 'Taufik Hidayat'
  },
  {
    nim: 301200033,
    nama: 'Teja Kusumah'
  },
  {
    nim: 301200038,
    nama: 'Mohammad Nazil Rezqi Fu\'adi'
  },
  {
    nim: 301200042,
    nama: 'Aulia Hanifa Ardita'
  },
]

const app = express()

app.get('/mhs', (req, res) => {
  res.send({ mhs })
})

app.get('/roadmaps', async (req, res) => {
  const response = await axios.get('https://full-stack-roadmap-api.fly.dev/roadmaps/')
  const data = response.data
  res.send(data)
})

const httpServer = createServer(app)
const io = new Server(httpServer)

io.on('connection', (socket) => {
  socket.on('mhs', (callback) => {
    try {
      callback(null, mhs)
    } catch (err) {
      callback(err, null)
    }
  })

  socket.on('roadmaps', async (callback) => {
    try {
      const response = await axios.get('https://full-stack-roadmap-api.fly.dev/roadmaps/')
      const data = response.data
      callback(null, data)
    } catch (err) {
      callback(err, null)
    }
  })
})

httpServer.listen(4000)
