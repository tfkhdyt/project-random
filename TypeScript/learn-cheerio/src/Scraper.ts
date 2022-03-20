import { IInfo } from './interfaces/info.interface'
import { load, CheerioAPI } from 'cheerio'
import { Parser } from './Parser'
// import pretty from 'pretty'

export class Scraper {
  private ejaan: string[] = []
  private pengertian: IInfo[] = []
  private $: CheerioAPI
  private parser: Parser

  constructor(html: string) {
    this.$ = load(html)
    // console.log(pretty(html))
    this.parser = new Parser()
  }

  private checkNotFound() {
    const notFound = this.$('h4').text()
    if (notFound.includes('Entri tidak ditemukan'))
      throw new Error('Entri tidak ditemukan')
  }

  async scrapeData() {
    this.checkNotFound()

    this.$('h2').each((_, element) => {
      const hasil = this.$(element)

      // push ejaan ke array
      this.ejaan = hasil
        .text()
        .split(' ')
        .filter(Boolean)
        .map((value) => value.replace(/[0-9]/g, ''))

      hasil
        /* .next()
        .next() */
        .siblings('ul,ol')
        .first()
        .children()
        .each((_, el) => {
          const info: IInfo = {
            jenisKata: [],
            deskripsi: '',
          }

          // parse raw pengertian
          // console.log(this.$(el).text())
          const rawInfo = this.$(el).text().split('  ').filter(Boolean)

          // parse jenis kata
          info.jenisKata = rawInfo[0].split(' ').filter(Boolean)

          // console.log(rawInfo)

          // parse deskripsi
          if (rawInfo[1].length < 5) {
            info.deskripsi = rawInfo.slice(2).join(' ').trim()
            info.jenisKata.push(rawInfo[1])
          } else {
            info.deskripsi = rawInfo.slice(1).join(' ').trim()
          }

          // parse raw jenis kata
          info.jenisKata = info.jenisKata.map(
            this.parser.parseJenisKata
          ) as string[]

          // push objek info ke array pengertian
          this.pengertian.push(info)
        })
    })
  }

  async getData() {
    await this.scrapeData()
    return {
      ejaan: this.ejaan,
      pengertian: this.pengertian,
    }
  }
}
