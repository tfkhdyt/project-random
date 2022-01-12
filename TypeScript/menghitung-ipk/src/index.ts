import rl from 'readline-sync'
import { SKS } from './libs/enums.lib'
import { DataNilai } from './libs/interfaces.lib'
import { getBobotAngka, getNilaiHuruf } from './utils/nilai.util'
import { getIpk, getPredikat } from './utils/ipk.util'

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

  // menghitung bobot angka dan nilai huruf
  const bobotAngka = getBobotAngka(nilai)
  const nilaiHuruf = getNilaiHuruf(nilai)

  // push data ke array dataSemuaNilai
  dataSemuaNilai.push({
    nama,
    sks,
    nilai,
    bobotAngka,
    nilaiHuruf,
  })
}

const ipk = getIpk(dataSemuaNilai)
const predikat = getPredikat(ipk)

// tampilkan result
console.log('Nama     : ' + namaMhs)
console.log('NIM      : ' + nim)
console.log('IPK      : ' + ipk)
console.log('Predikat : ' + predikat)
process.exit(0)
