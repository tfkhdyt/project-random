import bcrypt from 'bcrypt'

export default class PasswordHash {
  static async hash(password: string) {
    return bcrypt.hash(password, 16)
  }
}
