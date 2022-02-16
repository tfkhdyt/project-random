import express, { Application } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { connect } from 'mongoose'
import 'dotenv/config'

import UserRouter from './routers/user.router'
import AuthRouter from './routers/auth.router'

interface IConstructorParams {
  port?: number
  uri: string
}

class Server {
  app: Application
  port: number
  uri: string

  constructor({ port = 4000, uri }: IConstructorParams) {
    this.port = port
    this.uri = uri
    this.connection()
    this.app = express()
    this.middlewares()
    this.routes()
  }

  private connection() {
    connect(this.uri)
      .then(() => {
        console.log('Connected to DB')
      })
      .catch((err) => console.log(err.message))
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
    this.app.use('/api/v1/users', UserRouter)
    this.app.use('/api/v1/auth', AuthRouter)
  }
}

const server = new Server({
  port: Number(process.env.PORT) || 4000,
  uri: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PWD}@cluster0.pbe5r.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
})
const { app, port } = server

app.listen(port, () => {
  console.log(`Server is starting at http://localhost:${port}`)
})
