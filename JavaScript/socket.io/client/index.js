const { io } = require('socket.io-client')
const socket = io('http://localhost:4000')
const dc = () => socket.disconnect()

socket.on('connect', () => {
  console.log('Connected!')
})

socket.emit('catFact', (err, data) => {
  if (err) return err
  console.log(data)
})

/*socket.emit('getAllData', (err, data) => {
  if (err) return err
  console.log(data)
  dc()
})*/


// socket.emit('getData', 1)
socket.on('getData', (data) => {
  console.log(data)
})

// socket.emit('calculate', 69, 420)
socket.on('calculate', (data) => {
  console.log(data)
  socket.disconnect()
})

