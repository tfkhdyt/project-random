import { BobotAngka, NilaiHuruf } from '../libs/enums.lib'

export const getBobotAngka = (nilai: number): BobotAngka => {
  if (nilai >= 80 && nilai <= 100) {
    return BobotAngka.EMPAT
  } else if (nilai >= 65 && nilai <= 79) {
    return BobotAngka.TIGA
  } else if (nilai >= 55 && nilai <= 64) {
    return BobotAngka.DUA
  } else {
    return BobotAngka.NOL
  }
}

export const getNilaiHuruf = (nilai: number): NilaiHuruf => {
  if (nilai >= 80 && nilai <= 100) {
    return NilaiHuruf.A
  } else if (nilai >= 65 && nilai <= 79) {
    return NilaiHuruf.B
  } else if (nilai >= 55 && nilai <= 64) {
    return NilaiHuruf.C
  } else {
    return NilaiHuruf.D
  }
}
