import { Request, Response } from 'express'
import UserModel from '../models/user.model'

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body
    try {
      const createdUser = await UserModel.create({
        username,
        password
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
