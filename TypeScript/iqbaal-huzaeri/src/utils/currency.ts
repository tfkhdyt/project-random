export class Currency {
  private formatter = new Intl.NumberFormat(`id-ID`, {
    currency: 'IDR',
    style: 'currency',
    minimumFractionDigits: 0
  })

  format(num: number): string {
    return this.formatter.format(num)
  }
}
