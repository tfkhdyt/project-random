import axios from 'axios'

let counter = 0

for (let i = 0; i < 10000; i++) {
  axios.get('http://localhost:4000/mhs')
    .then((res) => res.data)
    .then((data) => {
      console.log(++counter, data)
    })
}

