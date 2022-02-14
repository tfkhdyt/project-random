export default interface IUser {
  username: string
  password: string
  created_at: string | Date
  updated_at?: string | Date
}
