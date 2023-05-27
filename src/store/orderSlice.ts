import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Food } from '../types'

export interface Order {
  quantity: number
  food_id: number
  food_name: string
  food_price: number
  food_img: string
  price: number
}

export interface CounterState {
  quantity: number
  OrderPrice: number
  UserOrder: Order[]
}

const initialState: CounterState = {
  quantity: 0,
  OrderPrice: 0,
  UserOrder: [],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderAdd: (state, action: PayloadAction<Food>) => {
      const newOrder = { ...action.payload }
      const order = state.UserOrder.find((index) => index.food_id === newOrder.food_id)

      if (!order) {
        state.UserOrder.push({
          ...newOrder,
          quantity: 1,
          price: state.OrderPrice + state.OrderPrice,
        })
        state.OrderPrice = state.UserOrder.reduce(
          (total, order) => total + Number(order.food_price),
          0,
        )
      }

      if (order) {
        order.quantity = order.quantity + 1
        state.OrderPrice += Number(order.food_price)
        order.price = state.OrderPrice
      }
    },

    orderRemove: (state, action: PayloadAction<number>) => {
      const foodIdToDelete = action.payload
      const updatedUserOrder = state.UserOrder.filter((order) => order.food_id !== foodIdToDelete)
      state.UserOrder = updatedUserOrder
      state.OrderPrice = state.UserOrder.reduce(
        (total, order) => total + Number(order.food_price),
        0,
      )
    },

    orderAllRemove: (state) => {
      state.UserOrder = []
      state.OrderPrice = 0
    },

    quantityAdd: (state, action: PayloadAction<number>) => {
      const foodId = action.payload

      const order = state.UserOrder.find((index) => index.food_id === foodId)

      if (order) {
        order.quantity = order.quantity + 1
        state.OrderPrice += Number(order.food_price)
        order.price = state.OrderPrice
      }
    },

    quantityLess: (state, action: PayloadAction<number>) => {
      const foodId = action.payload
      const order = state.UserOrder.find((index) => index.food_id === foodId)

      if (order) {
        order.quantity = order.quantity - 1
        state.OrderPrice -= Number(order.food_price)
        order.price = state.OrderPrice
      }

      if (order?.quantity === 0) {
        const foodIdToDelete = action.payload
        const updatedUserOrder = state.UserOrder.filter((order) => order.food_id !== foodIdToDelete)
        state.UserOrder = updatedUserOrder
        state.OrderPrice = state.UserOrder.reduce(
          (total, order) => total + Number(order.food_price),
          0,
        )
      }
    },
  },
})

export const { orderAdd, orderRemove, quantityAdd, quantityLess, orderAllRemove } =
  orderSlice.actions

export default orderSlice.reducer
