const getLevel = (index: number, length: number) => {
  const levelNumber: number = length - index
  if (levelNumber == 1) return ''
  if (levelNumber == 2) return 'puluh'
  if (levelNumber == 3) return 'ratus'
  if (levelNumber == 4) return 'ribu'
  if (levelNumber == 5) return 'puluh ribu'
  if (levelNumber == 6) return 'ratus ribu'
  if (levelNumber == 7) return 'juta'
  throw new Error('Level should more than 0')
}

const getNumberName = (num: number) => {
  if (num == 0) return ''
}

const convert = (num: number) => {
  const arr = num.toString().split('').map(Number)
  const arrLength = arr.length
  const result = arr.map((value, index) => {
    const level = getLevel(index, arrLength) 
    const numberName = getNumberName(value)
  })
}

const num: number = 69
const result = convert(num)

