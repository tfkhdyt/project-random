import express, {Application, Request, Response} from 'express'

class Server {
  app: Application

  constructor(public port: number) {
    this.app = express()
    this.middlewares()
    this.routers()
  }

  private middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private routers() {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello, world!'
      })
    })

    this.app.get('/:nama', (req: Request, res: Response) => {
      const { nama } = req.params
      res.status(200).send({
        message: `Selamat datang, ${nama}`
      })
    })
  }
}

const server = new Server(4000)
const port = server.port

server.app.listen(port, () => {
  console.log(`App is starting at port ${port}`)
})
