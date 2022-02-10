import { Request, Response } from 'express'
import IUserController from './user.d'

class UserController implements IUserController {
  index(req: Request, res: Response): Response {
    return res.send({
      users: [
        {
          nama: 'Taufik',
          umur: 19,
        },
      ],
    })
  }

  create(req: Request, res: Response): Response {
    return res.send({
      message: 'User telah berhasil dibuat!',
      data: {
        ...req.body,
      }
    })
  }

  read(req: Request, res: Response): Response {
    return res.send()
  }

  update(req: Request, res: Response): Response {
    return res.send()
  }

  delete(req: Request, res: Response): Response {
    return res.send()
  }
}

export default new UserController()
