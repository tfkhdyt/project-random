import { Schema, model, Model } from 'mongoose'

import IUser from './user.interface'

class UserModel {
  model: Model<IUser>

  constructor() {
    this.model = model('User', this.schema())
  }

  private schema() {
    return new Schema<IUser>({
      username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        required: true,
        default: Date.now
      },
      updated_at: {
        type: Date,
        default: Date.now
      },
    })
  }
}

export default new UserModel().model
