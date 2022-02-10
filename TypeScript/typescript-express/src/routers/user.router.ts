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
  }
}

export default new UserRouter().router
