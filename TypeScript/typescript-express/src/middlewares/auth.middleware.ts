import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

class AuthMiddleware {
  validate
  
  constructor() {
    this.validate = this.validator()
  }

  private validator() {
    return [
      check('username').isString(),
      check('password').isLength({ min: 6 }),
      (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
          return res.status(400).send({
            errors: errors.array()
          })
        }
        next()
      }
    ]
  }
}

export default new AuthMiddleware()
