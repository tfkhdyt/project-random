import { Request, Response } from 'express'

class AuthController {
  register(req: Request, res: Response): Response {
    return res.send()
  }

  login(req: Request, res: Response): Response {
    return res.send()
  }
}

export default new AuthController()
