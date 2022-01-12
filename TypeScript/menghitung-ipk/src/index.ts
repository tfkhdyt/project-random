import rl from 'readline-sync'
import { SKS } from './libs/enums.lib'
import { DataNilai } from './libs/interfaces.lib'
import { getBobotAngka, getNilaiHuruf } from './utils/nilai.util'
import { ipk } from './utils/ipk.util'

// array yang menyimpan semua data nilai
const dataSemuaNilai: DataNilai[] = []

// input data mahasiswa
const namaMhs: string = rl.question('Masukkan nama : ')
const nim: string = rl.question('Masukkan NIM : ')
const jumlahMatkul = ((): number => {
  try {
    return Number(rl.question('Masukkan jumlah mata kuliah : '))
  } catch (err) {
    throw new Error('Input harus berupa angka!')
  }
})()
console.log()

// input data nilai
for (let i: number = 1; i <= jumlahMatkul; i++) {
  const nama = rl.question(`[${i}] Masukkan nama mata kuliah : `)
  const sks = ((): number => {
    try {
      const _sks: SKS = Number(
        rl.question(`[${i}] Masukkan sks per mata kuliah : `)
      )
      return _sks
    } catch (err) {
      throw new Error('SKS tidak valid! Masukkan angka dari 1 - 4')
    }
  })()
  const nilai = ((): number => {
    try {
      return Number(rl.question(`[${i}] Masukkan nilai mata kuliah : `))
    } catch (err) {
      throw new Error('Nilai tidak valid! Masukkan angka yang valid')
    }
  })()
  console.log()

  const bobotAngka = getBobotAngka(nilai)
  const nilaiHuruf = getNilaiHuruf(nilai)

  dataSemuaNilai.push({
    nama,
    sks,
    nilai,
    bobotAngka,
    nilaiHuruf,
  })
}

console.log('Nama : ' + namaMhs)
console.log('NIM  : ' + nim)
console.log('IPK  : ' + ipk(dataSemuaNilai))
process.exit(0)
