import axios from 'axios'

let counter = 0

for (let i = 0; i < 10; i++) {
  axios.get('http://localhost:4000/roadmaps')
    .then((res) => res.data)
    .then((data) => {
      console.log(++counter, data)
    })
}

