const capitalizeSentence = (sentence: string) => {
  const sentenceArray = sentence.split(' ')
  const capitalizedArray = sentenceArray.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  return capitalizedArray.join(' ')
}

// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"

const sentence1 = 'SeLamAT PAGi semua halOo'
const capitalizedSentence1 = capitalizeSentence(sentence1)

const sentence2 = 'HaRI iNi adALAh HarI LibUR'
const capitalizedSentence2 = capitalizeSentence(sentence2)

console.log(`Kalimat 1 asli       : ${sentence1}`)
console.log(`Kalimat 1 capitalize : ${capitalizedSentence1} \n`)
console.log(`Kalimat 2 asli       : ${sentence2}`)
console.log(`Kalimat 2 capitalize : ${capitalizedSentence2}`)
