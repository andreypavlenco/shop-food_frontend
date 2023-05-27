import axios from 'axios'

const URL_API = 'http://localhost:3004'

axios.defaults.baseURL = URL_API

export const productApi = {
  async getKFC() {
    const app = await axios.get('/KFC')
    return app
  },

  async getPizzaDay() {
    const app = await axios.get('/PizzaDay')
    return app
  },

  async getIQpizza() {
    const app = await axios.get('/IQPizza')
    return app
  },
}
