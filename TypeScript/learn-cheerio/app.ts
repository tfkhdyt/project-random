import axios from 'axios'
import { load } from 'cheerio'
import pretty from 'pretty'

interface IJenisKata {
  [key: string]: string
}

interface IInfo {
  jenisKata: string[]
  deskripsi: string | string[]
}

const parseJenisKata = (char: string) => {
  const jenisKata: IJenisKata = {
    n: 'nomina (kata benda)',
  }
  return jenisKata[char] || undefined
}

const scrapeDataFromKbbi = async (keyword: string) => {
  let ejaan: string[] = []
  let pengertian: IInfo[] = []

  try {
    // fetch data
    const response = await axios.get(
      `https://kbbi.kemdikbud.go.id/entri/${keyword.toLowerCase()}`
    )
    const data = response.data

    // load html
    const $ = load(data)

    // cek not found
    const notFound = $('h4').text()

    // console.log(notFound)
    if (notFound.includes('Entri tidak ditemukan')) throw new Error('Entri tidak ditemukan')

    // iterate result
    $('h2').each(function () {
      const hasil = $(this)

      // push ejaan ke array
      ejaan = hasil
        .text()
        .split(' ')
        .filter(Boolean)
        .map((value) => value.replace(/[0-9]/g, ''))

      hasil
        .next()
        .next()
        .children()
        .each(function () {
          const info: IInfo = {
            jenisKata: [],
            deskripsi: '',
          }

          // parse raw pengertian
          console.log($(this).text())
          const rawInfo = $(this).text().split('  ').filter(Boolean)

          // parse jenis kata
          info.jenisKata = rawInfo[0].split(' ').filter(Boolean)

          // parse deskripsi
          if (rawInfo[1].length < 5) {
            info.deskripsi = rawInfo[2]
            info.jenisKata.push(rawInfo[1])
          } else {
            info.deskripsi = rawInfo[1]
          }

          // parse raw jenis kata
          info.jenisKata = info.jenisKata.map(parseJenisKata) as string[]

          // push objek info ke array pengertian
          pengertian.push(info)
        })
    })

    // console.log(pretty(pengertian.html() as string))
    console.log(pretty($.html()))
  } catch (err) {
    return console.log(err)
  }
  // console.log(pretty(html))
  const result = {
    ejaan,
    pengertian,
  }
  console.log(result)
}

scrapeDataFromKbbi('selimut')
