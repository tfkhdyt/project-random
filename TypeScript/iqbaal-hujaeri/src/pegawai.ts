import { Currency } from './utils/currency'

export class Pegawai {
  protected formatter: Currency = new Currency()

  constructor(
    private gaji: number,
    private nama: string
  ) {
  }

  infoGaji(): void {
    console.log(
      `Gaji ${this.getNama()}: ${this.formatter.format(
        this.getGaji()
      )}`
    )
  }

  getGaji(): number {
    return this.gaji
  }

  setGaji(gaji: number): void {
    this.gaji = gaji
  }

  getNama(): string {
    return this.nama
  }

  setNama(nama: string) {
    this.nama = nama
  }
}
