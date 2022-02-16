import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'

export default class Authentication {
  static hash(password: string) {
    return bcrypt.hashSync(password, 16)
  }

  static compare(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword)
  }

  static generateToken<T>(id: T) {
    const jwtSecretKey: Secret = process.env.JWT_SECRET_KEY || 'secret' as Secret
    return jwt.sign({ id }, jwtSecretKey, { expiresIn: '30d' }) 
  }
}
