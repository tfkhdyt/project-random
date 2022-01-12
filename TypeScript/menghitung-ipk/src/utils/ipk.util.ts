import { DataNilai } from '../libs/interfaces.lib'

export const getIpk = (dataSemuaNilai: DataNilai[]): number => {
  const totalBobotAngka = dataSemuaNilai.reduce(
    (total, item) => item.bobotAngka * item.sks + total,
    0
  )
  const totalSks = dataSemuaNilai.reduce((total, item) => total + item.sks, 0)
  return totalBobotAngka / totalSks
}

export const getPredikat = (ipk: number): string => {
  if (ipk >= 3.5 && ipk <= 4)
    return 'DENGAN PUJIAN'
  if (ipk >= 3 && ipk <= 3.49)
    return 'SANGAT MEMUASKAN'
  if (ipk >= 2.5 && ipk <= 2.99)
    return 'MEMUASKAN'
  return 'LULUS'
}
