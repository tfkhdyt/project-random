import axios from 'axios'

// HTTP Request
for (let i = 0; i < 100; i++) {
  const res = await axios.get('http://localhost:4000/cat')
  const data = res.data
  console.log(i+1, data)
}

