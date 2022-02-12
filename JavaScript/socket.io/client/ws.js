import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')
const dc = () => socket.disconnect()
let counter = 0

for (let i = 0; i < 10; i++) {
  socket.emit('roadmaps', (err, data) => {
    if (err) throw err
    console.log(++counter, data)
    if (counter == 10) dc()
  })
}
