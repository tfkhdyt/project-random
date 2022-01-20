const arr = [
  'BK 123 RI', 
  'BK 21 LZ', 
  'B 1 RI', 
  'BL 45 HO', 
  'BL 33 JK', 
  'BL 1234 GG'
]

const kota = {
  medan: 'BK',
  aceh: 'BL',
  jakarta: 'B'
}

const filterPlatNomor = (kota) => (
  arr.filter((value) => 
    value.split(' ')[0] == kota)
)

const argument = kota.medan
const filteredArray = filterPlatNomor(argument)

filteredArray.forEach((platNomor, index) => 
  console.log(`${index + 1}. ${platNomor}`))

console.log(`\nTotal kendaraan dari kota medan adalah: ${filteredArray.length}`)
