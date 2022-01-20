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

const cekPlatNomor = (kota) => (
  arr.filter((value) => 
    value.split(' ')[0] == kota).length
)

arr.forEach((platNomor, index) => 
  console.log(`${index + 1}. ${platNomor}`))

console.log()

console.log('Total kendaraan dari kota Medan adalah: ' + cekPlatNomor(kota.medan))
console.log('Total kendaraan dari kota Aceh adalah: ' + cekPlatNomor(kota.aceh))
console.log('Total kendaraan dari kota Jakarta adalah: ' + cekPlatNomor(kota.jakarta))
