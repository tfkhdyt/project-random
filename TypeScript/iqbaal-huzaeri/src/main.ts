import { Manager } from './manager'
import { Pegawai } from './pegawai'
import { Programmer } from './programmer'

const fauzi = new Pegawai(4_000_000, 'Fauzi')
fauzi.infoGaji()
fauzi.setGaji(10_000_000)
fauzi.infoGaji()
console.log()

const teja = new Manager(1_000_000, 7_500_000, 'Teja')
teja.infoTunjangan()
teja.setTunjangan(2_000_000)
teja.infoTunjangan()
console.log()

const taufik = new Programmer(2_500_000, 5_000_000, 'Taufik')
taufik.infoBonus()
taufik.setBonus(3_000_000)
taufik.infoBonus()
