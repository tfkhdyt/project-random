import AuthController from '../controllers/auth.controller'
import BaseRouter from './base.router'

class AuthRouter extends BaseRouter {
  routes(): void {
    this.router.post('/register', AuthController.register)
    this.router.post('/login', AuthController.login)
  }
}

export default new AuthRouter().router
