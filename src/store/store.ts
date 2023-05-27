import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import orderSlice from './orderSlice'
import { userSlice } from './userSlice'

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    order: orderSlice,
    user: userSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
