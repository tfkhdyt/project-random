import { Request, Response, NextFunction } from 'express'

class AuthMiddleware {
  auth(req: Request, res: Response, next: NextFunction) {
    const auth = true
    if (auth) next()
    res.status(400).json({
      message: "You're Unauthenticated",
    })
  }
}

export default new AuthMiddleware()
