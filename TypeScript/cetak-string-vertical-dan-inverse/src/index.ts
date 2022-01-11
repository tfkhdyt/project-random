import { rl } from './configs/readline.config'

rl.question('Masukan: ', (name) => {
  const arrName = name.toUpperCase().split('').reverse()
  arrName.forEach((value) => {
    console.log(value)
  })
  process.exit()
})
