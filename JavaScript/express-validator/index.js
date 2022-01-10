// modules
const express = require('express')
const { check, validationResult } = require('express-validator')

// variables
const app = express()
const port = process.env.PORT || 4000
const colors = ['red', 'green', 'blue']
const intensity = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const validation = [
  check('color')
    .notEmpty()
    .withMessage('Warna tidak boleh kosong')
    .custom((value) => { 
      const valRes = colors.some((e) => value.startsWith(e))
      if (!valRes)
        throw new Error('Warna tidak valid')
      return true
    })
    .custom((value) => { 
      const valRes = intensity.some((e) => value.endsWith(e))
      if (!valRes)
        throw new Error('Intensitas tidak valid')
      return true
    })
    .contains('-')
    .withMessage('Format tidak valid')
]

// middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// routes
app.post('/color', validation, (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(404).send({
      errors: errors.array(),
    })
  }

  return res.status(200).send({
    msg: 'Query berhasil',
    color: req.body.color,
  })
})

// listener
app.listen(port, () => {
  console.log(`App running at port ${port}`)
})
