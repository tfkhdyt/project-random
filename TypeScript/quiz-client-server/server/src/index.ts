import express from 'express'
import quiz from './routes/quiz.route'

const app = express()
const port = process.env.PORT || 4000
const version = 1

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(`/api/v${version}/`, quiz)

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`)
})
