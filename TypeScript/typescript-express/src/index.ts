import express, { Application } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import UserRouter from './routers/user.router'

class App {
  app: Application

  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
  }

  private routes(): void {
    this.app.use('/users', UserRouter)
  }
}

const app = new App().app
const port: number = Number(process.env.PORT) || 4000

app.listen(port, () => {
  console.log(`Server is starting at http://localhost:${port}`)
})
