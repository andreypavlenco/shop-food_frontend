import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  username: string
  email: string
  phone: string
  address: string
}

export interface CounterState {
  username: string
  email: string
  phone: string
  address: string
}

const initialState: CounterState = {
  username: '',
  email: '',
  phone: '',
  address: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    nameChanOn: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },

    emailChanOn: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },

    phoneChanOn: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },

    addressChanOn: (state, action: PayloadAction<string>) => {
      state.address = action.payload
    },
  },
})

export const { nameChanOn, emailChanOn, phoneChanOn, addressChanOn } = userSlice.actions

export default userSlice.reducer
