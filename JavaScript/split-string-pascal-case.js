let str = "SelamatPagiDunia"
//expected output Selamat Pagi Dunia
// Tidak boleh langsung print expected output

// Jawaban:
function manipulateString(st) {
  let string = ''
  for (let char of st) {
    if (char === char.toUpperCase()) 
      string += ` ${char}`
    else
      string += char
  }
  return string.slice(1)
}

console.log(manipulateString(str))
