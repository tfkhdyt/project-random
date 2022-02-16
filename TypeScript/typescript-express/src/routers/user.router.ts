import UserController from '../controllers/user.controller'
import BaseRouter from './base.router'

class UserRouter extends BaseRouter {
  routes(): void {
    this.router.get('/', UserController.index)
    this.router.post('/', UserController.create)
    this.router.get('/:id', UserController.read)
    this.router.patch('/:id', UserController.update)
    this.router.delete('/:id', UserController.delete)
  }
}

export default new UserRouter().router
