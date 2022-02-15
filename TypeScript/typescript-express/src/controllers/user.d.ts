import { Request, Response } from 'express'

export default interface IUserController {
  index: (req: Request, res: Response) => Promise<Response>
  create: (req: Request, res: Response) => Response
  read: (req: Request, res: Response) => Response
  update: (req: Request, res: Response) => Response
  delete: (req: Request, res: Response) => Response
}
