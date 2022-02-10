import { Router, Request, Response } from 'express'
import IUserRouter from './user.d'

class UserRouter implements IUserRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes(): void {
    this.router.get('/', (req: Request, res: Response) => {
      res.send({
        message: 'Hello, world!',
      })
    })

    this.router.post('/', (req: Request, res: Response) => {
      res.send(req.body)
    })
  }
}

export default new UserRouter().router
