import express, { Application, Request, Response } from 'express'

class App {
  app: Application

  constructor() {
    this.app = express()
    this.routes()
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send({
        message: 'Hello, world!',
      })
    })
  }
}

const app = new App().app
const port: number = Number(process.env.PORT) || 4000

app.listen(port, () => {
  console.log(`Server is starting at http://localhost:${port}`)
})
