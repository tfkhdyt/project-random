import { Request, Response } from 'express'

import IUserController from './user.d'
import User from '../data/user.data'
import IUser from '../data/user.d'

class UserController implements IUserController {
  index(req: Request, res: Response): Response {
    return res.send({ users: User.sort((a, b) => a.id - b.id) })
  }

  create(req: Request, res: Response): Response {
    const { id, nama }: IUser = req.body
    User.push({ id: Number(id), nama })
    return res.send({ message: 'Data berhasil ditambah!' })
  }

  read(req: Request, res: Response): Response {
    const { id } = req.params
    const user = User.find(value => value.id == Number(id))
    return res.send({ user })
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params
    const { nama } = req.body
    const user = User.find(value => value.id == Number(id))
    const allUser = User.filter(value => value.id != Number(id))
    const newUser = {
      ...user,
      nama
    }
    return res.send({ 
      message: 'Data berhasil diubah!',
      users: [
        ...allUser,
        newUser
      ]
    })
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params
    const users = User.filter(value => value.id !== Number(id))
    return res.send({
      users
    })
  }
}

export default new UserController()
