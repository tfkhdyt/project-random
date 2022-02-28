let str = "SelamatPagiDunia"
//expected output Selamat Pagi Dunia
// Tidak boleh langsung print expected output

// Jawaban:
function manipulateString(st) {
  // buat variabel dengan string kosong
  let string = ''

  // lakukan perulangan untuk variabel "st" lalu simpan setiap karakter pada variabel "char"
  for (let char of st) {

    // apabila variabel "char" adalah huruf kapital
    if (char === char.toUpperCase()) 
      
      // concat variabel "string" dengan spasi dan variabel "char"
      string += ` ${char}`
    
    // apabila tidak
    else

      // concat variabel "string" dengan variabel "char"
      string += char
  }

  // return variabel string dengan dimulai dari index ke-1
  return string.slice(1)
}

console.log(manipulateString(str))
