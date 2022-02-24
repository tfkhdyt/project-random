let str = ''

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (j <= i)
      str += ' '
    else
      str += '*'
  }
  str += '\n'
} 

console.log(str)
