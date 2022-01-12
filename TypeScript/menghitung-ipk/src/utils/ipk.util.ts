import { DataNilai } from '../libs/interfaces.lib'

export const ipk = (dataSemuaNilai: DataNilai[]): number => {
  const totalBobotAngka = dataSemuaNilai.reduce(
    (total, item) => item.bobotAngka * item.sks + total,
    0
  )
  const totalSks = dataSemuaNilai.reduce((total, item) => total + item.sks, 0)
  return totalBobotAngka / totalSks
}
