import { IJenisKata } from './interfaces/jenis-kata.interface'

export class Parser {
  parseJenisKata(char: string) {
    const jenisKata: IJenisKata = {
      n: 'nomina (kata benda)',
    }
    return jenisKata[char] || char
  }
}
