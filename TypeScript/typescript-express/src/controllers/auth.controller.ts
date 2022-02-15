import { Request, Response } from 'express'

import UserModel from '../models/user.model'
import PasswordHash from '../utils/PasswordHash'

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { hash } = PasswordHash
    const { username, password } = req.body

    // check registered username
    try {
      const user = await UserModel.findOne({ username })
      if (user) {
        return res.status(400).send({
          message: 'Username has been used'
        })
      }
    } catch(err) {
      return res.status(500).send({
        error: err
      })
    }

    try {
      const createdUser = await UserModel.create({
        username,
        password: await hash(password)
      }) 
      return res.status(200).send({
        message: 'Registrasi berhasil!',
        user: createdUser
      })
    } catch(err) {
      return res.status(400).send({
        message: 'Registrasi gagal!',
        error: err
      })
    }
  }

  login(req: Request, res: Response): Response {
    return res.send()
  }
}

export default new AuthController()
