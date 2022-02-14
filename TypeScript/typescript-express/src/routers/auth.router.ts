import AuthController from '../controllers/auth.controller'
import BaseRouter from './base.router'

class AuthRouter extends BaseRouter {
  routes(): void {
    this.router.post('/', AuthController.register)
    this.router.post('/', AuthController.login)
  }
}

export default new AuthRouter().router
