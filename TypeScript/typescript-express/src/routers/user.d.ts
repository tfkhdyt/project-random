import { Router } from 'express'

export default interface IUserRouter {
  router: Router
  #routes: () => void
}
