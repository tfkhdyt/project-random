import { Pegawai } from './pegawai'

export class Manager extends Pegawai {
  constructor(
    private tunjangan: number,
    gaji: number,
    nama: string
  ) {
    super(gaji, nama)
  }

  getTunjangan(): number {
    return this.tunjangan
  }

  setTunjangan(tunjangan: number): void {
    this.tunjangan = tunjangan
  }

  infoTunjangan(): void {
    console.log(
      `Tunjangan ${this.getNama()}: ${this.formatter.format(
        this.getTunjangan()
      )}`
    )
  }
}
