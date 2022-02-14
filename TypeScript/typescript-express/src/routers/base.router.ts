import { Router } from 'express'

export default abstract class BaseRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  abstract routes(): void
}
