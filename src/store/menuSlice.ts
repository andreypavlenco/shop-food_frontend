import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  PizzaDay: boolean
  IQPizza: boolean
  KFC: boolean
}

const initialState: CounterState = {
  PizzaDay: true,
  IQPizza: false,
  KFC: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    PizzaDayOn: (state) => {
      state.PizzaDay = true
      state.IQPizza = false
      state.KFC = false
    },

    IQPizzaOn: (state) => {
      state.PizzaDay = false
      state.IQPizza = true
      state.KFC = false
    },

    KFCOn: (state) => {
      state.PizzaDay = false
      state.IQPizza = false
      state.KFC = true
    },
  },
})

export const { PizzaDayOn, IQPizzaOn, KFCOn } = menuSlice.actions
export default menuSlice.reducer
