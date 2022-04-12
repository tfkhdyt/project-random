import { Pegawai } from './pegawai'

export class Programmer extends Pegawai {
  constructor(
    private bonus: number,
    gaji: number,
    nama: string
  ) {
    super(gaji, nama)
  }

  getBonus(): number {
    return this.bonus
  }

  setBonus(bonus: number): void {
    this.bonus = bonus
  }

  infoBonus(): void {
    console.log(
      `Bonus ${this.getNama()}: ${this.formatter.format(
        this.getBonus()
      )}`
    )
  }
}
