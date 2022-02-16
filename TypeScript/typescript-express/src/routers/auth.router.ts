import AuthController from '../controllers/auth.controller'
import BaseRouter from './base.router'
import AuthMiddleware from '../middlewares/auth.middleware'

class AuthRouter extends BaseRouter {
  routes(): void {
    this.router.post(
      '/register',
      AuthMiddleware.validate,
      AuthController.register
    )
    this.router.post('/login', AuthController.login)
  }
}

export default new AuthRouter().router
