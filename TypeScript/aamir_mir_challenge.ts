let str = ''
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i + 1; j++) {
    str += (j + 1)
  }
  str += '\n'
}

console.log(str)
