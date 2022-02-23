const str = '11000000'
const arr = str.split('')
const jumlah = arr.filter(value => value == '1').length
console.log(`String: ${str}`)
console.log(`Jumlah angka 1 pada Array = ${jumlah}`)
