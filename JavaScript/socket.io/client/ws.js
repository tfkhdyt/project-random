import { io } from 'socket.io-client'
const socket = io('http://localhost:4000')
const dc = () => socket.disconnect()
let counter = 0

// WebSocket
for (let i = 0; i < 100; i++) {
  socket.emit('cat', (err, data) => {
    if (err) throw err
    console.log(i+1, data)
    counter++
    if (counter == 99) dc()
  })
}
