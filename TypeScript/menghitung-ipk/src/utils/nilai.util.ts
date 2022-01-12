import { BobotAngka, NilaiHuruf } from '../libs/enums.lib'

export const getBobotAngka = (nilai: number): BobotAngka => {
  if (nilai >= 80 && nilai <= 100) return BobotAngka.EMPAT
  if (nilai >= 65 && nilai <= 79) return BobotAngka.TIGA
  if (nilai >= 55 && nilai <= 64) return BobotAngka.DUA
  return BobotAngka.NOL
}

export const getNilaiHuruf = (nilai: number): NilaiHuruf => {
  if (nilai >= 80 && nilai <= 100) return NilaiHuruf.A
  if (nilai >= 65 && nilai <= 79) return NilaiHuruf.B
  if (nilai >= 55 && nilai <= 64) return NilaiHuruf.C
  return NilaiHuruf.D
}
