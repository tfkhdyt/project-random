import { Router } from 'express'

import IUserRouter from './user.d'
import UserController from '../controllers/user.controller'

class UserRouter implements IUserRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes(): void {
    this.router.get('/', UserController.index)
    this.router.post('/', UserController.create)
    this.router.get('/:id', UserController.read)
    this.router.patch('/:id', UserController.update)
    this.router.delete('/:id', UserController.delete)
  }
}

export default new UserRouter().router
