import axios from 'axios'
import { Order } from '../types'

const URL_API = 'http://localhost:3004'

axios.defaults.baseURL = URL_API

export const orderApi = {
  async postCreateOrder(data: Order) {
    const app = await axios.post('/order', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    return app
  },
}
