import { Request, Response } from 'express'
import { Secret } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import 'dotenv/config'

import UserModel from '../models/user.model'
import Authentication from '../utils/Authentication'

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { hash } = Authentication
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
      return res.status(500).send({
        message: 'Registrasi gagal!',
        error: err
      })
    }
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body
    const { compare, generateToken } = Authentication

    try {
      const user = await UserModel.findOne({ username }) 
      if (!user) {
        return res.status(404).send({
          message: 'Username tidak ditemukan!'
        })
      }

      const result = compare(password, user.password)
      if (!result) {
        return res.status(400).send({
          message: 'Password salah!'
        })
      }

      const token = generateToken<ObjectId>(user._id)
      return res.status(200).json({
        message: 'Login berhasil!',
        token
      })
    } catch(err) {
      return res.status(500).send({ err })
    }
  }
}

export default new AuthController()
