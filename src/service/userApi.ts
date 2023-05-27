import axios from 'axios'
import { User } from '../store/userSlice'

const URL_API = 'http://localhost:3004'

axios.defaults.baseURL = URL_API

export const userApi = {
  async postCreateUser(data: User) {
    const app = await axios.post('/user', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    return app
  },
}
